import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import { ClientRecord } from 'src/app/interfaces/interfaces';
import { forkJoin, map, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  public clientData?: ClientRecord[];

  constructor(private readonly clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.list()
    .pipe(
      switchMap(val => {
        return forkJoin(
          of(val),
          this.clientService.getAccounts(val.map(el => el.id)),
          forkJoin(...val.map(el => this.clientService.getContact(el.id))),
        )
      })
    )
    .subscribe(([nameList, currencyList, infoList]) => {
        this.clientData = infoList.map(el => ({
          ...el,
          id: el.userId,
          name: nameList.find(nameEl => nameEl.id === el.userId)?.name ?? '',
          currency: currencyList.find(nameEl => nameEl.userId === el.userId)?.currency ?? '',
        }));
    });
  }


}

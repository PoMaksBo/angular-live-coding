import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ListItemComponent} from './list-item/list-item.component';
import {ListRoutingModule} from './list-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }

export interface Contact {
  userId: string;
  phone: string;
  email: string;
  address: string;
}

export interface Client {
  id: string;
  name: string;
}

export interface ClientRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  currency: string;
}

export interface Account {
  userId: string;
  currency: string;
}

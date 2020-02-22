import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public token: string;
  public playerID: number;

  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CharacterDashboard } from '../Responses/Character/CharacterDashboard/CharacterDashboard';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private path = `${environment.apiBaseUrl}api/character/`;

  constructor(
    private http: HttpClient
  ) { }

  public getDashboard(characterID: string): Observable<CharacterDashboard> {
    return this.http.get<CharacterDashboard>(`${this.path}${characterID}`);
  }
}

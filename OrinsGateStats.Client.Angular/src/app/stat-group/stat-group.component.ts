import { Component, OnInit, Input } from '@angular/core';
import { CharacterDashboard } from '../Services/Responses/Character/CharacterDashboard/CharacterDashboard';

@Component({
  selector: 'app-stat-group',
  templateUrl: './stat-group.component.html',
  styleUrls: ['./stat-group.component.scss']
})
export class StatGroupComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _dashboard: CharacterDashboard = null;

  @Input()
  set dashboard(dashboard: CharacterDashboard) {
    this._dashboard = dashboard || new CharacterDashboard();
    console.log(this._dashboard);
  }

  get dashboard(): CharacterDashboard { return this._dashboard; }

  constructor() { }

  ngOnInit(): void {
  }

}

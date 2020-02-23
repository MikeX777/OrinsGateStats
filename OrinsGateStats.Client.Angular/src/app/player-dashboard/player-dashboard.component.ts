import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../Services/player/player.service';
import { PlayerDashboardResponse } from '../Services/Responses/Player/PlayerDashboard/PlayerDashboardResponse';
import { Character } from '../Services/Responses/Player/PlayerDashboard/Chatacter';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.scss']
})
export class PlayerDashboardComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public characters: Character[];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.GetDashboard().subscribe((dashboard: PlayerDashboardResponse) => {
      this.firstName = dashboard.FirstName;
      this.lastName = dashboard.LastName;
      this.characters = dashboard.Characters;
    });
  }

}

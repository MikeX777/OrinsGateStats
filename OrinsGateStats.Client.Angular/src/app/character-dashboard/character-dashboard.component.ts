import { Component, OnInit } from '@angular/core';
import { CharacterDashboard } from '../Services/Responses/Character/CharacterDashboard/CharacterDashboard';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CharacterService } from '../Services/character/character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-dashboard',
  templateUrl: './character-dashboard.component.html',
  styleUrls: ['./character-dashboard.component.scss']
})
export class CharacterDashboardComponent implements OnInit {

  dashboard$: Observable<CharacterDashboard>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.dashboard$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.characterService.getDashboard(params.get('id')))
    );
  }

}

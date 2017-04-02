import { Component, OnInit, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from 'ng2-translate'
import { ApiFootBallService } from 'providers/_index'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  idLeagueChanged: EventEmitter<any> = new EventEmitter()

  constructor(private router: Router, private translate: TranslateService, private apiFootBallService: ApiFootBallService) {
  }


  ngOnInit() {
  }

  changeLeague(idChampionship: number) {
    this.apiFootBallService.setIdChampionship(idChampionship)
  }

  changeLanguage(languageKey: string) {
    this.translate.use(languageKey)
  }

}

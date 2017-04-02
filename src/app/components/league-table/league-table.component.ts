import { Component, OnInit, Input } from '@angular/core'
import { ApiFootBallService } from 'providers/_index'

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {

  league: any

  constructor(private apiFootBallService: ApiFootBallService) {
    this.league = {}
    apiFootBallService.idChampionshipChanged$.subscribe(
      leagueId => this.fetchLeagueData()
    )
  }

  ngOnInit() {
    this.fetchLeagueData()
  }

  fetchLeagueData() {
    this.apiFootBallService.getLeagueTable()
      .subscribe(league => this.league = league)
  }

}

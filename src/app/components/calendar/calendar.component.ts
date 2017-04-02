import { Component, OnInit, Input } from '@angular/core'
import { ApiFootBallService } from 'providers/_index'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  matchdays: any

  constructor(private apiFootBallService: ApiFootBallService) {
    this.matchdays = []
    apiFootBallService.idChampionshipChanged$.subscribe(
      leagueId => this.fetchLeagueCalendarData()
    )
  }

  ngOnInit() {
    this.fetchLeagueCalendarData()
  }

  fetchLeagueCalendarData() {
    this.apiFootBallService.getLeagueCalendar()
      .subscribe(matchdays => this.matchdays = matchdays)
  }

}

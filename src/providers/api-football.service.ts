import { Injectable, EventEmitter } from '@angular/core'
import { Http, Headers, Response, URLSearchParams, BaseRequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/mergeMap'

import * as _ from 'lodash'
import { environment } from '../environments/environment'

@Injectable()
export class ApiFootBallService {

  private token = ''
  private headers: Headers
  private idChampionship: number
  private matchDay: number
  private currentMatchday: number
  private matchdays: _.Dictionary<any>

  public idChampionshipChanged$: EventEmitter<number>

  constructor(private http: Http) {
    this.headers = new Headers()
    this.headers.append('X-Auth-Token', this.token)
    this.idChampionship = 434 // League 1
    this.currentMatchday = 1
    this.matchdays = []

    this.idChampionshipChanged$ = new EventEmitter()
  }

  getCurrentMatchDay() {
    return this.currentMatchday
  }

  setIdChampionship(idChampionship: number) {
    this.idChampionship = idChampionship
    this.idChampionshipChanged$.emit(idChampionship)
  }

  getLeagueInfo(): Observable<any> {
    return this.http.get(environment.apiFootballUrl + `competitions/${this.idChampionship}`,
      {
        headers: this.headers
      }).map((res: Response) => {
        const data = res.json()
        return data.currentMatchday
      }
      )
  }

  getLeagueCalendar(): Observable<any> {
    let current = null
    return this.getLeagueInfo()
      .flatMap((currentMatchday) => {
        current = currentMatchday
        return this.http.get(environment.apiFootballUrl + `competitions/${this.idChampionship}/fixtures`, {
          headers: this.headers
        })
      }
      ).map((res: Response) => {
        this.currentMatchday = current
        this.matchdays = _.groupBy(res.json().fixtures, 'matchday')
        return this.matchdays
      }
      )
  }

  getLeagueTable(): Observable<any> {
    this.matchdays = null
    return this.http.get(environment.apiFootballUrl + `competitions/${this.idChampionship}/leagueTable`, {
      headers: this.headers
    }
    ).map((res: Response) => {
      const data = res.json()
      this.matchDay = data.matchday
      return { leagueCaption: data.leagueCaption, matchday: data.matchday, standing: data.standing }
    }
      )
  }

}

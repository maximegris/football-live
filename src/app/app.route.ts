import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router'

import { LeagueTableComponent, CalendarComponent } from './components/_index'

export const mainRoute: Routes = [{
  path: '',
  component: LeagueTableComponent
}, {
  path: 'calendar',
  component: CalendarComponent
}
]

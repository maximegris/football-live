import { NgModule } from '@angular/core'
import { RouterModule, Routes, Resolve } from '@angular/router'

import { mainRoute } from '../app.route'
import { errorRoute } from './_index'

let LAYOUT_ROUTES = [
  ...mainRoute,
  ...errorRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }

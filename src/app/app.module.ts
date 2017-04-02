import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Http } from '@angular/http'
import { APP_BASE_HREF } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Routing
import { LayoutRoutingModule } from './layouts/_index'

//// Models
//import * as Models from '../models/_index'

//// Providers
import * as Services from '../providers/_index'
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate'

// Layouts
import { ErrorComponent } from './layouts/error/error.component'
import { FooterComponent } from './layouts/footer/footer.component'
import { MainComponent } from './layouts/main/main.component'
import { NavbarComponent } from './layouts/navbar/navbar.component'

// Component
import { CalendarComponent } from './components/calendar/calendar.component'
import { LeagueTableComponent } from './components/league-table/league-table.component'

@NgModule({
  declarations: [
    CalendarComponent,
    LeagueTableComponent,
    ErrorComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    LayoutRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [
    Services.ApiFootBallService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json')
}

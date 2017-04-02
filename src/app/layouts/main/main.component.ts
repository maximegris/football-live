import { Component, OnInit } from '@angular/core'
import { TranslateService } from 'ng2-translate'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.use('fr')
  }

  ngOnInit() {
  }

}

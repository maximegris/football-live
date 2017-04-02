import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MdIconRegistry } from '@angular/material'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyright: number

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    this.copyright = new Date().getFullYear()
    mdIconRegistry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('/assets/picto/logo.svg'))
  }

  ngOnInit() {

  }

}

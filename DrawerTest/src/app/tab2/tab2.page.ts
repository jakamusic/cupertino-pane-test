import {Component } from '@angular/core';
import { PaneService } from '../pane.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public paneService: PaneService) {}

  ionViewDidEnter() {
    this.paneService.cupertinoPane.moveToBreak('middle');
  }
}

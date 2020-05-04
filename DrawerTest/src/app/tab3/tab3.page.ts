import {Component, OnInit} from '@angular/core';
import { PaneService} from '../pane.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public paneService: PaneService) {}

  ionViewDidEnter() {
    this.paneService.cupertinoPane.moveToBreak('top');
  }
}

import {Component} from '@angular/core';
import { PaneService } from '../pane.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public paneService: PaneService) {}

  ionViewDidEnter() {
    this.paneService.present();
    this.paneService.cupertinoPane.moveToBreak('bottom');
  }
}

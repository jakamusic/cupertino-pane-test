import {Component, OnInit} from '@angular/core';
import { CupertinoPane } from 'cupertino-pane';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public cupertinoPane: CupertinoPane;
  settings = {
    breaks: {
      top: { enabled: true, offset: window.screen.height - 80 },
      middle: { enabled: true, offset: 300 },
      bottom: { enabled: true, offset: 100 },
    },
    initialBreak: 'middle',
    buttonClose: false,
    bottomClose: false,
  };

  constructor() {}

  ngOnInit() {
    this.cupertinoPane = new CupertinoPane('.cupertino-pane', this.settings);
    this.cupertinoPane.present({animate: true});
  }
}

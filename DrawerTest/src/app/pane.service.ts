import { Injectable } from '@angular/core';
import { CupertinoPane } from 'cupertino-pane';

/**
 * Datatype to share data between components.
 */
@Injectable()
export class PaneService {
  public cupertinoPane: CupertinoPane;
  present() {
    if (this.cupertinoPane) return;
    const settings = {
      parentElement: '.tabs-inner',
      breaks: {
        top: { enabled: true, offset: window.screen.height - 80 },
        middle: { enabled: true, offset: 300 },
        bottom: { enabled: true, offset: 100 },
      },
      initialBreak: 'bottom',
      buttonClose: false,
      bottomClose: false,
    };

    this.cupertinoPane = new CupertinoPane('.cupertino-pane', settings);
    this.cupertinoPane.present({animate: true});
  }
}
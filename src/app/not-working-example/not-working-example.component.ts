import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CupertinoPane } from 'cupertino-pane';
import { filter } from 'rxjs';

@Component({
  selector: 'app-not-working-example',
  templateUrl: './not-working-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotWorkingExampleComponent implements OnInit, AfterViewInit, OnDestroy {
  myPane: CupertinoPane | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.myPane = new CupertinoPane(
      '.cupertino-pane', // Pane container selector
      {
        parentElement: 'body', // Parent container
        buttonDestroy: false,
        breaks: {
          middle: { enabled: true, height: 300, bounce: true },
          bottom: { enabled: true, height: 80 },
        },
      }
    );

    this.myPane?.present({ animate: true });

  }

  ngAfterViewInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe({
      next: (value) => {
        console.log('NAVIGATED')
        // this.myPane?.calcFitHeight();
        // this.myPane?.scrollElementInit();
      },
    });
  }

  ngOnDestroy(): void {
    this.myPane?.destroy();
  }
}

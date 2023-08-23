import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CupertinoPane } from 'cupertino-pane';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app-go';

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
        this.myPane?.calcFitHeight();
      },
    });
  }
}

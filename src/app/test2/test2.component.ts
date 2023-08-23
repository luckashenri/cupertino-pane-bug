import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test2Component {

}

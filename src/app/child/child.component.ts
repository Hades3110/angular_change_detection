import {ChangeDetectionStrategy, Component, Input,  ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {

  constructor(private cd: ChangeDetectorRef) { }

  @Input() numbers!: { count: number }

  update(){
    this.cd.detectChanges();
  }

}

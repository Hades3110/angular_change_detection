import { ChangeDetectionStrategy, Component, Input,  ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {

  @Input() numbers: { count: number }

  constructor(private cd: ChangeDetectorRef) { }

  update(){
    this.cd.detectChanges();
  }

}

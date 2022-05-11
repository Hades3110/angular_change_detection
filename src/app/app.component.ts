import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularHomework1';

  numbers = {
    count: 0
  }
  constructor() {
  }
  ngOnInit(): void {
    setInterval(() => {
      this.numbers.count++
    }, 500)
  }
}

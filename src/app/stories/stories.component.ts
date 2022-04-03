import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  items: Number[];

  constructor() {
    this.items = Array(30);
  }

  ngOnInit(): void {}
}

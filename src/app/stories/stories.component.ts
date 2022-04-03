import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  items: Array<number>;

  constructor(private _hackernewsApiService: HackernewsApiService) {
    this.items = Array<number>(30);
  }

  ngOnInit(): void {
    // populate items from hacker news service
    this._hackernewsApiService.fetchStories('topstories').subscribe((items) => {
      this.items = items;
    });
  }
}

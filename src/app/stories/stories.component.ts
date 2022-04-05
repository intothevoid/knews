import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  items: any;

  constructor(private _hackernewsApiService: HackernewsApiService) {}

  ngOnInit(): void {
    // populate items from hacker news service
    this._hackernewsApiService.fetchStoriesUnoffical('news', 1).subscribe(
      (items) => {
        this.items = items;
      },
      (error) => {
        console.log('Could not load items: ' + error);
      }
    );
  }
}

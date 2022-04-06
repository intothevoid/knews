import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './itemcomments.component.html',
  styleUrls: ['./itemcomments.component.scss'],
})
export class ItemcommentsComponent implements OnInit {
  sub: any;
  item: any;

  constructor(
    private _hackerNewsAPIService: HackernewsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      let itemID = +params['id'];
      this._hackerNewsAPIService.fetchComments(itemID).subscribe(
        (data) => {
          this.item = data;
        },
        (error) => console.log('Could not load item' + itemID)
      );
    });
  }
}

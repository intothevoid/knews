import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  items: any;
  typeSub: any;
  pageSub: any;
  storiesType: string = 'news';
  pageNum: number = 1;
  listStart: number = 1;

  constructor(
    private _hackernewsApiService: HackernewsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.typeSub = this.route.data.subscribe(
      (data) => (this.storiesType = (data as any).storiesType)
    );

    this.pageSub = this.route.params.subscribe((params) => {
      this.pageNum = +params['page'];
      this._hackernewsApiService
        .fetchStoriesUnofficial(this.storiesType, this.pageNum)
        .subscribe(
          (items) => (this.items = items),
          (error) =>
            console.log(
              'Could not load stories.' +
                this.storiesType +
                'stories. Error:' +
                error
            ),
          () => {
            this.listStart = (this.pageNum - 1) * 30 + 1;
            window.scrollTo(0, 0);
          }
        );
    });

    // populate items from hacker news service
    // this._hackernewsApiService.fetchStoriesUnofficial('news', 1).subscribe(
    //   (items) => {
    //     this.items = items;
    //   },
    //   (error) => {
    //     console.log('Could not load items: ' + error);
    //   }
    // );
  }
}

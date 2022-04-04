import { Component, OnInit, Input } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item: any;

  constructor(private _hackernewsApiService: HackernewsApiService) {
    this.itemID = 0;
  }

  ngOnInit(): void {
    this._hackernewsApiService.fetchItem(this.itemID).subscribe(
      (data) => {
        this.item = data;
      },
      (error) => {
        console.log('Could not load item: ' + this.itemID + ' Error: ' + error);
      }
    );
  }
}

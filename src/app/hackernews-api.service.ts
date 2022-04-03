import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HackernewsApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  }

  fetchStories(storyType: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}${storyType}.json`)
      .pipe(map((response: any) => response.json()));
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HackernewsApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  }

  // fetch stories from hacker news api
  fetchStories(type: string): Observable<any> {
    console.log(`${this.baseUrl}${type}.json`);
    return this.http.get<any>(`${this.baseUrl}${type}.json`);
  }
}

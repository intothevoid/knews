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
    return this.http.get<any>(`${this.baseUrl}${type}.json`);
  }

  // fetch stories from the unoffical hacker news api
  fetchStoriesUnofficial(storyType: string, pageNo: number): Observable<any> {
    return this.http.get<any>(
      `https://node-hnapi.herokuapp.com/${storyType}?page=${pageNo}`
    );
  }

  // fetch item from hacker news api
  fetchItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}item/${id}.json`);
  }

  // fetch comments
  fetchComments(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}item/${id}.json`);
  }
}

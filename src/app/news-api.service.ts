import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // Put your News Api key here. Make sure you don't accidentally
  // upload your key from here to Github
  API_KEY = 'API_KEY_HERE'

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.API_KEY);
  }

  initArticles() {
    return this.http.get('https://newsapi.org/v2/sources?techcrunch&apiKey='+this.API_KEY);
  }

  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.API_KEY);
  }
}

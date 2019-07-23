import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const API_URL = environment.newsApiUrl;
const API_KEY = environment.newsApiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) { }

  getNews(urlPath) {
    return this.http.get(`${API_URL}/${urlPath}&apiKey=${API_KEY}`);
  }
}

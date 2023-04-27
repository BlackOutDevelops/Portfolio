import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getData(urlExtension: string): Observable<any> {
    return this.http.get<any>("https://api.github.com" + urlExtension, { headers: new HttpHeaders({ Authorization: "Bearer " + environment.apiKey }) });
  }
}

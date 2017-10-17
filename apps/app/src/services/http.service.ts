import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  headers = { headers: new Headers({ 'Content-Type': 'application/json' }) };
  url = 'http://localhost:3000/doctor/';
  toSign(objectToSend: any, urlSignType: Sign): Observable<Response> {
    const body = JSON.stringify(objectToSend);
    return this.http.post(this.url + urlSignType, body, this.headers);
  }

  constructor(private http: Http) {}
}

export type Sign = 'signin' | 'signup';
export const SIGN_IN = 'signin';
export const SIGN_UP = 'signup';

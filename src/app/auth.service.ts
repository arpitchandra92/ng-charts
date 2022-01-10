import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

const apiKey = 'coinrankingaeb66fb6739643b77b484740cb17c5617552e80aa6003fbb';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*',
  }),
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl = 'https://api.coinranking.com/v2/coins';
  private proxyurl = 'https://cors-anywhere.herokuapp.com/'

  constructor(private http :HttpClient) { }

  cryptoData(){
    const url = `${this.proxyurl}${this.baseurl}`;
    return this.http.get(url,httpOptions).toPromise().then((data)=>{return data});
  }
}

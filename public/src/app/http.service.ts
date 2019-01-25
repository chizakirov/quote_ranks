import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  displayAuthors(){
    return this._http.get('/api/authors');
  }

  addAuthor(new_author){
    return this._http.post('/api/authors', new_author);
  }

  getAuthor(id){
    return this._http.get(`/api/authors/${id}`);
  }

  addQuote(id, new_quote){
    return this._http.post(`/api/authors/${id}`, new_quote);
  }

  viewQuotes(id){
    return this._http.get(`/api/authors/${id}`);
  }

  voteUp(id, idq, updated_quote){
    return this._http.patch(`api/authors/${id}/quotes/${idq}`, updated_quote);
  }

  voteDown(id, idq, updated_quote){
    return this._http.patch(`api/authors/${id}/down/${idq}`, updated_quote);
  }

  deleteQuote(id, idq){
    return this._http.delete(`/api/authors/${id}/quotes/${idq}`);
  }
}

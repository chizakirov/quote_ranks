import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: any = [];
  updated_quote: any = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => 
    {
      console.log(params['id']);
      this.showQuotes(params['id']);
    });
  }

  showQuotes(id){
    this._router.navigate([`quotes/${id}`]);
    let obs = this._httpService.viewQuotes(id)
    obs.subscribe(data => {
      this.quotes = data;
    })
  }

  voteUp(id, idq, updated_quote){
    let obs = this._httpService.voteUp(id, idq, updated_quote)
    obs.subscribe(data => {
      this.updated_quote = data;
      this.showQuotes(id);
    })
  }

  voteDown(id, idq, updated_quote){
    let obs = this._httpService.voteDown(id, idq, updated_quote)
    obs.subscribe(data => {
      this.updated_quote = data;
      this.showQuotes(id);
    })
  }

  deleteQuote(id, idq){
    let obs = this._httpService.deleteQuote(id, idq)
    obs.subscribe();
    this.showQuotes(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  new_quote: any = {};
  author: any = {};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => 
    {
      console.log(params['id']);
      this.getAuthor(params['id']);
    });

  }

  getAuthor(id){
    let obs = this._httpService.getAuthor(id)
    obs.subscribe(data => {
      console.log(data);
      this.author = data;
    })
  }

  addQuote(id){
    let obs = this._httpService.addQuote(id, this.new_quote)
    obs.subscribe(data => {
      this.new_quote = data;
      this._router.navigate(['/home']);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  new_author: any = {name: ""};

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  }

  addAuthor(){
    // this._router.navigate(['/']);
    let obs = this._httpService.addAuthor(this.new_author)
    obs.subscribe(data => {
      this.new_author = data;
      this._router.navigate(['/home']);
    })
  }
}

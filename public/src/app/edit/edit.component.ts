import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  topicid;
  currtopic;
newtopic = {
  name: '',
  description: ''
};
  constructor(private _cookieService:CookieService, private _httpService: HttpService, private _route: ActivatedRoute, private router: Router) { 
        this._route.params.subscribe((param)=>{
        console.log("Params topic id", param.id);
        this.topicid = param.id
          this._httpService.retrieveOneTopic(param.id)
          .then(data=>{
            this.newtopic = data; console.log(" New Topic:",this.newtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
      })
  }

  ngOnInit() {
  }

  updateTopic(form){
    this._httpService.updateTopic(this.newtopic[0], this.newtopic[0]._id)
          .then(data=>{
            console.log(" updated Topic:",data);
          })
          .catch(err=>{console.log("err in updating one topic", err);})    
           this.router.navigate(['/dashboard']);

  }

  

}

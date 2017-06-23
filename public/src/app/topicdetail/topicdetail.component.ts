import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {
  currtopic = {};
  post ={content: '', _topicid: ""};
  comment ={content : '', _post: ''};
  newcomment:any;
  topicid;

  constructor(private _route: ActivatedRoute, private _cookieService:CookieService, 
      private _httpService: HttpService, private router: Router) { 
      this._route.params.subscribe((param)=>{
        console.log("Params topic id", param.id);
        this.topicid = param.id
          this._httpService.retrieveOneTopic(param.id)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
      })
 }
  addComment(form){
    console.log("Inside addform of topic detail", this.post)
    this.post._topicid = this.currtopic[0]._id
    this._httpService.createPost(this.post, this._cookieService.get("key"))
    .then(data=>{console.log("the new post:",data);
    this._httpService.retrieveOneTopic(this.topicid)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})

      })
    .catch(err=>{console.log("Failed to add:",err);})

    form.resetForm();
  }

  ngOnInit() {
    
    
  }

}

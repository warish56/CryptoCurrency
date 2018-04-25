import {Component, OnDestroy, OnInit} from '@angular/core';
import {dataService} from '../Service/data.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit, OnDestroy {

  globalContent:any;
  subscription:Subscription;
  constructor(private data:dataService, private routes:ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.routes.queryParams.subscribe(
      ()=>{
        this.data.getGlobalData().subscribe((data)=>{this.globalContent=data;})
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

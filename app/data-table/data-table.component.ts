import {Component, OnDestroy, OnInit} from '@angular/core';
import {dataService} from '../Service/data.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit , OnDestroy {

  localContent:any[]=[];
  globalContent:any;

  next:number=100;
  start:number=0;
  limitless:number=0;
  itemSelectedid:number;
  itemSelected:any;


  subscription:Subscription;
  observableSubscription:Subscription;

  constructor(private data:dataService,private router:Router,private  routes:ActivatedRoute) { }

  ngOnInit() {

    this.subscription=  this.routes.queryParams.subscribe(
      (params:Params)=>{
        this.start=params['start'] ? +params['start']:0;
        this.limitless=params['limitless'] ? 1:0;
        this.next= this.start+100 > 1592 ? 0:this.start+100;

        this.data.getData(this.start,this.limitless)
          .subscribe(
            (data)=>{
              this.localContent=data;
            },
            //showing error if not get any response
            (error:Error)=>{console.error(error);}
          );

        this.data.getGlobalData()
          .subscribe((data)=>{this.globalContent=data;});



      }
    );


    this.observableSubscription=  Observable.interval(300000).subscribe(
      ()=>{
     console.log('changed');
        this.data.getData(this.start,this.limitless)
          .subscribe(
            (data)=>{
              this.localContent=data;
            },
            //showing error if not get any response
            (error:Error)=>{console.error(error);}
          );

        this.data.getGlobalData()
          .subscribe((data)=>{this.globalContent=data;});



      });



  }


  onNext(){
    console.log('clicked');
    this.router.navigate([''],{queryParams:{start:this.next}});
  }

  onPrev(){
    this.router.navigate([''],{queryParams:{start:this.start-100}})
  }

  onViewAll(){
    this.router.navigate([''],{queryParams:{start:0,limitless:1}});

  }




  onSelected(id:number){
    this.itemSelectedid=id;
    this.itemSelected=this.localContent[id];

  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.observableSubscription.unsubscribe();
  }
}

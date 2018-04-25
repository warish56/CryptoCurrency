import {Component, OnDestroy, OnInit} from '@angular/core';
import {dataService} from '../Service/data.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  id:string;
  item:any;
  subscription:Subscription;
  constructor(private  data:dataService, private routes:ActivatedRoute, private router:Router) { }

  ngOnInit() {

   this.subscription= this.routes.queryParams.subscribe(
      (params:Params)=>{
        this.id=params['id'];

        this.data.getCurrency(this.id).subscribe(
          (currency)=>{
            this.item=currency;
          },
          (error:Error)=>{alert('Not Found');}
        );
        });

  }

  onBack(){
    this.router.navigate(['']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

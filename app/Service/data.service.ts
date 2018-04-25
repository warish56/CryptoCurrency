import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class dataService{

  private   limit:string='100';
  private   localUrl:string='https://api.coinmarketcap.com/v1/ticker/';
  private   globalUrl:string='https://api.coinmarketcap.com/v1/global/';

  constructor(private httpClient:HttpClient){}

  // get data upto limit 100
   getData(start:number , limitless?:number):Observable<any>{

   return this.httpClient.get(this.localUrl,
      {params:{start: start.toString() ,limit : limitless ? '0': '100'} } );
  }

  // get specific currency
   getCurrency(id:string):Observable<any>{
    return this.httpClient.get(this.localUrl+'/'+id+'/');
   }

  //get global data
   getGlobalData():Observable<any>{
    return this.httpClient.get(this.globalUrl);
  }




}

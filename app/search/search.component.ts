import { Component, OnInit } from '@angular/core';
import {dataService} from '../Service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  item:string;

  constructor( private data:dataService, private router:Router) { }

  ngOnInit() {
  }

  onSearch(){
    if( this.item!==undefined && this.item.length >0) {
      this.router.navigate(['/detail'], {queryParams: {id: this.item}});
      this.item = '';
    }
    else
      alert('Please Enter the Currency');
  }
}

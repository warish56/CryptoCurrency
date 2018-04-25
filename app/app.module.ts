import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import {dataService} from './Service/data.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {RouterModule, Routes} from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const route:Routes=[
  {path:'',component:DataTableComponent},
  {path:'detail',component:DetailComponent},
  {path:'**',component:NotFoundComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    GlobalComponent,
    SearchComponent,
    DetailComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(route)
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
datalist= null

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.getDatalist()
  }
 getDatalist(){
   this.http.get('http://127.0.0.1:8000/api/livre').subscribe(data=>{
     this.datalist= Object (data).livres
   },erreur=>{
     alert(erreur)
   })
 }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  datalist:any;
  constructor(private http: HttpClient) { }

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
  insertLivre(livre_choisie:any){
    this.http.post('http://127.0.0.1:8000/api/insertDemande' ,{livre_choisie}).subscribe(data=>{
      (document.getElementById("livre") as HTMLInputElement).value=""
    })
  }
  
}

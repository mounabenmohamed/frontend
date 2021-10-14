import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LivresProposés} from './create.model' ;
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  livresProposes: any;
  nom_auteur: any;
   nom_livre: any;

  constructor( private http: HttpClient , private dataService: DataService , private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.getLivresProposesData()

  }

  
  getLivresProposesData() {
      this.http.get('http://127.0.0.1:8000/api/livresProposés').subscribe(data=> {
      this.livresProposes= (data)
  },erreur=>{
    alert(erreur)
    })
    }

    insertData() {
    this.dataService.insertData({nom_auteur: this.nom_auteur,
      nom_livre: this.nom_livre}).subscribe(() => {
       this.getLivresProposesData();
       this.nom_auteur="";
       this.nom_livre="" ;
       this.toastr.success("livre à été ajoutée", "",
       {
        timeOut: 2000,
        progressBar: true 
      });
    });
  }
  deleteData(id:any) {
    this.dataService.deleteData(id).subscribe(()=> {
       this.getLivresProposesData();
       this.toastr.success("livre à été suprimée", "",
       {
        timeOut: 2000,
        progressBar: true 
      });
    })  ;
  }

}

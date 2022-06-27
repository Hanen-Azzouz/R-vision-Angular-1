import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../model/Annonce';
import { AnnoncesService } from '../service/annonces.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
annonce!:Annonce;

  constructor(private a:AnnoncesService,private router:Router) { }

  ngOnInit(): void {
this.annonce=new Annonce();
}


ajouter(f:Annonce){
 return this.a.postAnnonce(this.annonce).subscribe(
   ()=>{this.router.navigate(['/liste/']);}
 );
}



  

}

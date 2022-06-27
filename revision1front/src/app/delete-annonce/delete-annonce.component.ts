import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from '../service/annonces.service';

@Component({
  selector: 'app-delete-annonce',
  templateUrl: './delete-annonce.component.html',
  styleUrls: ['./delete-annonce.component.css']
})
export class DeleteAnnonceComponent implements OnInit {
id!:any;
  constructor(private a:AnnoncesService,private r:Router, private ar:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.ar.snapshot.params['id'];

this.a.deletAnnonce(this.id).subscribe(
  ()=>{
     this.r.navigate(['/liste/']);
   

   },
  (error)=>{alert('id inexistant!!!');}
);
  }

}

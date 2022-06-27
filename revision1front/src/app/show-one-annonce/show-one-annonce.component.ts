import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../model/Annonce';
import { AnnoncesService } from '../service/annonces.service';

@Component({
  selector: 'app-show-one-annonce',
  templateUrl: './show-one-annonce.component.html',
  styleUrls: ['./show-one-annonce.component.css']
})
export class ShowOneAnnonceComponent implements OnInit {
  ident!:any;
  annonce!:any;
//@Input() a!:Annonce;
  constructor(private ac:ActivatedRoute,private a:AnnoncesService) { }

  ngOnInit(): void {
this.ident=this.ac.snapshot.params['id'];
  
  this.a.getAnnonceByID(this.ident).subscribe(
    (data)=>{this.annonce=data;}
  );
}
}

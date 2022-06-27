import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../model/Annonce';
import { AnnoncesService } from '../service/annonces.service';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css']
})
export class ListeAnnoncesComponent implements OnInit {

list!:any;
id!:any;
  constructor(private s:AnnoncesService,private ac:ActivatedRoute) { }

  ngOnInit(): void {

    this.s.fetchAnnonces().subscribe(
      (data)=>this.list=data );
  
   
   
}
}

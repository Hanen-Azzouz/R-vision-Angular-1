import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from '../service/annonces.service';
import { Annonce } from '../model/Annonce';
@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {
id!:any;
annonce!:any;
  constructor(private s:AnnoncesService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
this.id=this.ar.snapshot.params['id'];
this.s.getAnnonceByID(this.id).subscribe(
  (d)=>{this.annonce=d;}
);
  }
update(data:any){
return this.s.updateAnnonce(this.id,data).subscribe(
  ()=>{this.router.navigate(['/liste/']);}
);

}
}
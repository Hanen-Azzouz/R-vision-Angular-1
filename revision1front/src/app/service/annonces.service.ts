import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../model/Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
url='http://localhost:3000/annonces/';

  constructor(private http:HttpClient) { }

// Afficher le contenu du fichier db.json
fetchAnnonces(){
return this.http.get(this.url);

}
// Afficher le contenu d'un element du fichier db.json

getAnnonceByID(id :any){
return this.http.get(this.url+id);}


// Ajouter un element dans db.json
postAnnonce(data:Annonce){

return this.http.post(this.url,data);
}
// supprimer un element dans db.json

 deletAnnonce(id:any) {
  return this.http.delete(this.url+id);
}
//Modifier un element dans db.json
updateAnnonce(id:any,data:Annonce)
{
return this.http.put(this.url+id,data);

}
}

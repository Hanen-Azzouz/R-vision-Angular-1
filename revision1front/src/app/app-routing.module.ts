import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { DeleteAnnonceComponent } from './delete-annonce/delete-annonce.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowOneAnnonceComponent } from './show-one-annonce/show-one-annonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'navigation',component:NavbarComponent},
  {path:'detail/:id',component:ShowOneAnnonceComponent},
  {path:'liste',component:ListeAnnoncesComponent},
  {path:'cout',component:EstimationCoutComponent},
  {path:'ajouter',component:AddAnnonceComponent},
  {path:'delete/:id',component:DeleteAnnonceComponent},
  {path:'update/:id',component:UpdateAnnonceComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

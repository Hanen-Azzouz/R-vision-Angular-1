import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { ShowOneAnnonceComponent } from './show-one-annonce/show-one-annonce.component';
import { DeleteAnnonceComponent } from './delete-annonce/delete-annonce.component';

import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeAnnoncesComponent,
    EstimationCoutComponent,
    NavbarComponent,
    LoginComponent,
    AddAnnonceComponent,
    ShowOneAnnonceComponent,
    DeleteAnnonceComponent,
    
    UpdateAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

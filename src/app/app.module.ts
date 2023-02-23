import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterFormComponent } from './ajouter-form/ajouter-form.component';
import { HeaderComponent } from './header/header.component';
import { ListeComponent } from './liste/liste.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './filter.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterFormComponent,
    HeaderComponent,
    ListeComponent,
    FilterPipe,
    NotfoundComponent,
    FooterComponent,
    DetailPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

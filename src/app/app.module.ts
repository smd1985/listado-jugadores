import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';
import { JugadorFormComponent } from './components/jugador-form/jugador-form.component';

// Services
import { JugadoresService } from './services/jugadores.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    JugadoresListComponent,
    JugadorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

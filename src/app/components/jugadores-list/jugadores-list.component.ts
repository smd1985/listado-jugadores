import { Component, OnInit, HostBinding } from '@angular/core';

import { JugadoresService } from '../../services/jugadores.service';
import { Jugador } from 'src/app/models/Jugador';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css'],
})
export class JugadoresListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  posiciones=[ {pos:"PO"},{pos:"LI"},{pos:"LD"},{ pos:"CT"}, {pos:"MCD"},{pos: "MC"},{pos:"II"} ,{pos: "ID"},{pos:"MP"} ,{ pos:"ED"},{pos:"EI"} ,{pos:"SD"},{pos:"DC"} ];
  equipos=[ {equipo:"Barcelona"},{equipo:"Madrid"},{equipo:"Celta"} ]
  nacionalidades=[{nac:"España"},{nac:"Argentina"},{nac:"Alemania"},{nac:"Holanda"},{nac:"Francia"}]
  posicionSeleccionado;
  equipoSeleccionado;
  nacionalidadSeleccionada;

  jugadores: any = [];

  constructor(private jugadorService: JugadoresService) {
  }


  ngOnInit() {
    this.getJugadores();
  }

  posicionChange(){
    console.log("la posicion seleccionada es:"+this.posicionSeleccionado)
  }

  equipoChange(){
    console.log("el equipo seleccionado es:"+this.equipoSeleccionado)
  }

  nacionalidadChange(){
    console.log("el equipo seleccionado es:"+this.nacionalidadSeleccionada)
  }

  filtros(){
    this.jugadorService.listarJugadoresFiltrados(this.posicionSeleccionado,this.equipoSeleccionado,this.nacionalidadSeleccionada)
    .subscribe(
      res => {
        console.log(res);
        this.jugadores = res;
      },
      err => {
        console.error(err)
        this.jugadores = "";
      }
    )
    
  }

  getJugadores() {
    this.jugadorService.getJugadores()
      .subscribe(
        res => {
          this.jugadores = res;
        },
        err => console.error(err)
      );
  }

  borrarJugador(id: string) {
    this.jugadorService.deleteJugador(id)
      .subscribe(
        res => {
          console.log(res);
          this.getJugadores();
        },
        err => console.error(err)
      )
  }

}

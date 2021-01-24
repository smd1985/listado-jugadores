import { Component, OnInit, HostBinding } from '@angular/core';
import { Jugador } from 'src/app/models/Jugador';

import { JugadoresService } from 'src/app/services/jugadores.service';
import { Router, ActivatedRoute } from '@angular/router';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-jugador-form',
  templateUrl: './jugador-form.component.html',
  styleUrls: ['./jugador-form.component.css']
})
export class JugadorFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  jugador: Jugador = {
    id: 0,
    nombre: '',
    posicion: '',
    equipo:'',
    nacionalidad:'',
    fecha_creacion: new Date()
  };

  edit: boolean = false;

  constructor(private jugadorService: JugadoresService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.jugadorService.getJugador(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.jugador = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  guardarJugador() {
    delete this.jugador.fecha_creacion;
    delete this.jugador.id;
    this.jugadorService.saveJugador(this.jugador)
      .subscribe(
        res => {
          this.router.navigate(['/jugadores']);
        },
        err => console.error(err)
      )
  }

  updateJugador() {
    
    delete this.jugador.fecha_creacion;
    
    this.jugadorService.updateJugador(this.jugador.id, this.jugador)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/jugadores']);
        },
        err => {
          console.log("se ha producido un error al actualizar el jugador")
          console.error(err)
        }
      )
  }

}

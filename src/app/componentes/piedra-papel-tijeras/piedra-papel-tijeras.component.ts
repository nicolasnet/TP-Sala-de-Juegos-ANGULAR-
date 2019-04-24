import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijeras',
  templateUrl: './piedra-papel-tijeras.component.html',
  styleUrls: ['./piedra-papel-tijeras.component.css']
})
export class PiedraPapelTijerasComponent implements OnInit {

  nuevoJuego: JuegoPiedraPapelTijera;
  Mensajes:string;

  constructor() { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    
    console.log("entra constructor");
  }


  public piedra(){
    this.nuevoJuego.comenzar();
    console.log("entro a piedra 222");
    this.Mensajes = this.nuevoJuego.piedra();
  }
  public papel(){
    this.nuevoJuego.comenzar();
    console.log("entro a papel 222");
    this.Mensajes = this.nuevoJuego.papel();
  }
  public tijera(){
    this.nuevoJuego.comenzar();
    console.log("entro a tijera 222");
    this.Mensajes = this.nuevoJuego.tijera();
    console.log(this.Mensajes);
  }

  
  ngOnInit() {
  }

}

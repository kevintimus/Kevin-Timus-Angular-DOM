import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  copiarTextDiv,
  countWords,
  CrearImagen, mostrarLlibre,
  mostrarValores,
  yellowSubmarine
} from "./funcions/funcions-module"
import {changeSize} from "./funcions/funcions-module"



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('AngularDOM-Kevin-Timus');

  ngOnInit(): void {
    const texto = document.getElementById("minus")!;
    const textoEnMinusculas = texto.innerHTML;
    texto.innerHTML = textoEnMinusculas.toUpperCase();

    let nodeHola = document.getElementById('minus')
    console.log(nodeHola)

    yellowSubmarine("h1")

    changeSize("taula1")

    countWords("LoremIpsum")

    CrearImagen("Imagen")

    copiarTextDiv("textoOrigen", "textoDestino");

    mostrarLlibre("infoLlibre");
  }
  onSelectChange() {
    mostrarValores("select", "div");
  }
}




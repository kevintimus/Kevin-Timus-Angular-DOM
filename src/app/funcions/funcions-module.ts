import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export function yellowSubmarine(idElement: string) {
  const etiqueta = document.getElementById(idElement)
  if (etiqueta) {
    etiqueta.style.color = "yellow";
  }
}

export function changeSize(idElement: string) {
  const taula = document.getElementById(idElement)
  if (taula) {
    taula.style.height = "200px";
  }
}

// @ts-ignore
export function countWords(idParagraf: string) {
  const paragraf = document.getElementById(idParagraf);
  // @ts-ignore
  const text = paragraf.innerText.trim();
  const paraules = text.split(/\s+/);
  const totalParaules = paraules.length;
  // @ts-ignore
  paragraf.innerHTML += `<br> Total de paraules: ${totalParaules}`;
  console.log(totalParaules);
}

export function CrearImagen(Imagen:string) {
  const contenedor = document.getElementById(Imagen);
  const img = document.createElement("img");
  img.src = "assets/wow.jpg"
  img.alt = "Aqui no sale nada :| "
  img.style.width = "300px";
  // @ts-ignore
  contenedor.appendChild(img);
}

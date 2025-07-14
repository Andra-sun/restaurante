import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './restaurante.html',
  styleUrl: './restaurante.css'
})
export class Restaurante {
  pagina = "cardapio";
}

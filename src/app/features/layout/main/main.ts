import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { RestauranteService } from '../../../core/restaurante.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.html',
})
export class MainLayoutComponent {
  constructor(
    private restaurante: RestauranteService,
    private router: Router
  ) {}

  get nomeDoRestaurante() {
    return this.restaurante.nome();
  }

  finalizarDia() {
    this.router.navigate(['/encerramento']);
  }
  
  quantidadePedidosAtivos = 10;

  pagina = '';

  irPara(destino: string) {
    this.pagina = destino;
    this.router.navigate([`/home/${destino}`]);
  }
}

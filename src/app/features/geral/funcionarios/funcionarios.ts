import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [NgbDropdownModule, FormsModule],
  templateUrl: './funcionarios.html',
  styleUrl: './funcionarios.css',
})
export class Funcionarios {
  termoBusca: string = '';
  filtroSelecionado: string = '';
  opcoesFiltro: string[] = ['admin', 'presente', 'faltou'];

  aplicarPesquisa() {
    alert(`Pesquisar por: ${this.termoBusca}`);
  }
}

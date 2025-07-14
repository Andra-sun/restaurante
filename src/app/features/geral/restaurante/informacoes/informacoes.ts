import { Component, computed, signal } from '@angular/core';
import { RestauranteService } from '../../../../core/restaurante.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './informacoes.html',
  styleUrls: ['./informacoes.css'],
})
export class Informacoes {
  nome = signal('');
  editando = signal(false);

  mesas = signal(0);
  editandoMesas = signal(false);

  admins = signal(0);
  editandoAdmins = signal(false);

  constructor(private restaurante: RestauranteService) {
    this.nome.set(this.restaurante.nome());
    this.mesas.set(this.restaurante.mesas());
    this.admins.set(this.restaurante.admins());
  }

  get nomeDoRestaurante(): string {
    return this.restaurante.nome();
  }

  alternarEdicao() {
    if (this.editando()) {
      this.restaurante.setNome(this.nome());
    }
    this.editando.set(!this.editando());
  }

  botaoTexto = computed(() => (this.editando() ? 'Salvar' : 'Editar'));

  //mesa
  alternarEdicaoMesas() {
    if (this.editandoMesas()) {
      this.restaurante.setMesas(this.mesas());
    }
    this.editandoMesas.set(!this.editandoMesas());
  }

  // admin
  alternarEdicaoAdmins() {
    if (this.editandoAdmins()) {
      this.restaurante.setAdmins(this.admins());
    }
    this.editandoAdmins.set(!this.editandoAdmins());
  }
}

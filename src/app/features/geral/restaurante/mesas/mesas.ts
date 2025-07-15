import { Component, computed, signal } from '@angular/core';
import { RestauranteService } from '../../../../core/restaurante.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mesas.html',
  styleUrl: './mesas.css',
})
export class Mesas {
  mesas = signal(0);

  indices = computed(() => Array.from({length: this.mesas()}, (_, i) => i));

  constructor(private restaurante: RestauranteService) {
    this.mesas.set(this.restaurante.mesas());
  }
}

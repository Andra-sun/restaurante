import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encerramento',
  standalone: true,
  imports: [],
  templateUrl: './encerramento.html',
  styleUrl: './encerramento.css',
})
export class Encerramento {
  constructor(private router: Router) {}
  logout() {
    this.router.navigate(['/login']);
  }
}

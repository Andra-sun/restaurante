import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  //   styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = '';
  password = '';

  login() {
    alert(`Usuário: ${this.user}, Senha: ${this.password}`);
  }
}

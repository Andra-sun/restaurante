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
  username = '';
  password = '';

  login() {
    alert(`Usuário: ${this.username}, Senha: ${this.password}`);
  }
}

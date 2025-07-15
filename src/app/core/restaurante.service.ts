import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  //nome
  private _nome = signal("restaurante com angular");
  nome() {
    return this._nome();
  }
  setNome(novoNome: string) {
    this._nome.set(novoNome);
  }
  nomeSignal = this._nome.asReadonly();


  //mesas
  private _mesas = signal(10);
  mesas() {
    return this._mesas();
  }
  setMesas(qtd: number) {
    this._mesas.set(qtd);
  }
  mesasSignal = this._mesas.asReadonly();


  //admins
  private _admins = signal(2);
  admins() {
    return this._admins();
  }
  setAdmins(qtd: number) {
    this._admins.set(qtd);
  }
  adminsSignal = this._admins.asReadonly();

  //logo
  
}

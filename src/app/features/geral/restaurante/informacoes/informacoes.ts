import { Component, computed, signal } from '@angular/core';
import { RestauranteService } from '../../../../core/restaurante.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxDropzoneModule} from 'ngx-dropzone'

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxDropzoneModule],
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

  arquivoImagem: File | null = null;
  previewImagem: string | ArrayBuffer | null = null;
  estaArrastando = false;

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

  //imagem
  aoSelecionarArquivo(event: any) {
    if (event.addedFiles && event.addedFiles.length > 0) {
      this.carregarImagem(event.addedFiles[0]);
    }
  }

  private carregarImagem(file: File) {
    if (!file.type.match('image.*')) {
      alert('Por favor, selecione apenas arquivos de imagem');
      return;
    }

    this.arquivoImagem = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImagem = reader.result;
    };
    reader.readAsDataURL(file);
  }

  removerImagem(event: Event) {
    event.stopPropagation();
    this.resetarImagem();
  }

  resetarImagem() {
    this.arquivoImagem = null;
    this.previewImagem = null;
  }

  salvarImagem() {
    if (this.arquivoImagem) {
      console.log('Imagem para upload:', this.arquivoImagem);
      alert('Imagem selecionada com sucesso!');
    } else {
      alert('Nenhuma imagem selecionada');
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SobreMim } from './sobre-mim/sobre-mim';
import { Projetos } from './projetos/projetos';
import { Experiencia } from './experiencia/experiencia';
import { Placeholder } from './placeholder/placeholder';

interface ButtonData {
  id: number;
  label: string;
  isActive?: boolean;
  type: 'botoes' | 'botoes-2';
} // definindo interface para os botoes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SobreMim, Projetos, Experiencia, Placeholder],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  botoes: ButtonData[] = [
    {id: 1, label: 'Sobre mim', isActive: false, type: 'botoes'}, 
    {id: 2, label: 'Projetos', isActive: false, type: 'botoes'}, 
    {id: 3, label: 'Experiência', isActive: false, type: 'botoes'}
  ]; // array de botoes com a interface ButtonData

  paginaInicial: boolean = false; // estado para pagina inicial

  handleButtonClick(button: ButtonData) {
    this.paginaInicial = false;
    this.botoes.forEach(b => {
      if (b.id === button.id) {
        b.type = 'botoes-2';
        b.isActive = true;
      } else {
        b.type = 'botoes';
        b.isActive = false;
      }
    });
  } // metodo para lidar com o clique nos botoes, alterando o estilo e o estado ativo

  inicial() {
    this.paginaInicial = true;
    this.botoes.forEach(b => {
      b.type = 'botoes';
      b.isActive = false;
    });
  } // metodo para retornar a pagina inicial, resetando os botoes
  
} 

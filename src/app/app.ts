import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SobreMim } from './sobre-mim/sobre-mim';
import { Projetos } from './projetos/projetos';
import { Experiencia } from './experiencia/experiencia';
import { CdkDrag } from '@angular/cdk/drag-drop';

interface ButtonData {
  id: number;
  label: string;
  isActive?: boolean;
  type: 'botoes' | 'botoes-2';
} // definindo interface para os botoes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SobreMim, Projetos, Experiencia, CdkDrag],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  botoes: ButtonData[] = [
    {id: 1, label: 'sobre mim', isActive: false, type: 'botoes'}, 
    {id: 2, label: 'projetos', isActive: false, type: 'botoes'}, 
    {id: 3, label: 'experiencia', isActive: false, type: 'botoes'}
  ]; // array de botoes com a interface ButtonData

  handleButtonClick(button: ButtonData) {
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


}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

/** * @title Basic Drag&Drop */

interface Caixas {
  id: number;
  label: string;
  temImagem?: boolean;
  zIndex: number;
  type: 'caixa-foto' | 'caixa-texto';
  posicao: { x: number; y: number };
}

@Component({
  selector: 'app-sobre-mim',
  imports: [CdkDrag, CommonModule],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
  standalone: true,
  exportAs: 'sobreMim'
})
export class SobreMim {

  caixas: Caixas[] = [
    {id: 1, label: 'caixa foto', temImagem: true, zIndex: 10, type: 'caixa-foto', posicao: {x: 50, y: 50}}, 
    {id: 2, label: 'caixa texto', temImagem: false, zIndex: 11, type: 'caixa-texto', posicao: {x: 250, y: 150}},
    {id: 3, label: 'caixa foto', temImagem: true, zIndex: 10, type: 'caixa-foto', posicao: {x: 750, y: 50}}
  ];

  private zIndexAlto = 11;

  trazerAFrente(window: Caixas) {
    this.zIndexAlto++;
    window.zIndex = this.zIndexAlto;
  }
}
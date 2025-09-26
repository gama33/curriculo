import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, Point } from '@angular/cdk/drag-drop';

/** * @title Basic Drag&Drop */

interface Caixas {
  id: number;
  label: string;
  temImagem?: boolean;
  dragPosition: {x: number, y: number};
  type: 'caixa-foto' | 'caixa-texto';
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
    {id: 1, dragPosition: {x: 100, y: 100}, label: 'caixa foto', temImagem: true, type: 'caixa-foto'}, 
    {id: 2, dragPosition: {x: 200, y: 200}, label: 'caixa texto', temImagem: false, type: 'caixa-texto'}
  ];

  moveItem() {
    this.caixas = [...this.caixas].reverse();
  }
}
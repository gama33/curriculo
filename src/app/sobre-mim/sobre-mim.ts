import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList  } from '@angular/cdk/drag-drop';

/** * @title Basic Drag&Drop */

@Component({
  selector: 'app-sobre-mim',
  imports: [CdkDrag, CommonModule],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
  standalone: true,
  exportAs: 'sobreMim'
})
export class SobreMim {
}

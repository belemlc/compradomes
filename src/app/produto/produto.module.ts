import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UploadFotoModule } from '../upload-foto/upload-foto.module';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListaComponent } from './produto-lista.component';
import { ProdutoDetalheComponent } from './produto-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProdutoRoutingModule,
    UploadFotoModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProdutoDetalheComponent,
    ProdutoListaComponent,
  ],
  exports: [
    ProdutoDetalheComponent,
    ProdutoListaComponent
  ]
})
export class ProdutoModule {}

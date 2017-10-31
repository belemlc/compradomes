import { NgModule } from '@angular/core';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListaComponent } from './produto-lista.component';

@NgModule({
  imports: [
    ProdutoRoutingModule
  ],
  declarations: [
    ProdutoListaComponent
  ],
  exports: [
    ProdutoListaComponent
  ]
})
export class ProdutoModule {}

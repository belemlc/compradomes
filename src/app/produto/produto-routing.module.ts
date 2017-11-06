import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista.component';
import { ProdutoDetalheComponent } from './produto-detalhe.component';

const produtoRoutes: Routes = [
  {
    path: 'produto',
    component: ProdutoListaComponent
  },
  {
    path: 'produto/save',
    component: ProdutoDetalheComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(produtoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProdutoRoutingModule {}

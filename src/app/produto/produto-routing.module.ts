import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista.component';

const produtoRoutes: Routes = [
  {
    path: 'produto',
    component: ProdutoListaComponent
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

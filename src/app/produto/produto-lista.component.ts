import { Component } from '@angular/core';
import { CategoriaService } from  '../services/categoria.service'; 
import { Categoria } from '../models/categoria.model';

@Component({
  moduleId: module.id,
  selector: 'produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss'],
  providers: [CategoriaService]
})
export class ProdutoListaComponent {

  public categorias: Categoria[];

  constructor(public categoriaService: CategoriaService) {
    
  }
  

}

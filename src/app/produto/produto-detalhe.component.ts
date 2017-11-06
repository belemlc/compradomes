import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { ProdutoService } from '../services/produto.service';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto.model';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'produto-detalhe',
    templateUrl: './produto-detalhe.component.html',
    providers: [
        CategoriaService,
        ProdutoService,
    ]
})
export class ProdutoDetalheComponent implements OnInit {

    @ViewChild('fileInput') fileInput;
    private categorias: Categoria[];
    produto: Produto;
    form: FormGroup;
    
    constructor(public categoriaService: CategoriaService, public produtoService: ProdutoService) {
        this.categoriaService.all().then((res: Categoria[]) => {
            this.categorias = res;
          });
    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

    save(form): void {
        let produto: Produto = form.value
        this.produto.foto = this.upload();
        this.produtoService.create(produto).then((res) => {
            console.log(JSON.stringify(res));
        });
            
            // let produto: Produto = form.value;
            // this.produtoService.create(produto).then((res) => {
            //     console.log(JSON.stringify(res));
            // });
        
    }

    upload() {
        let fileBrowser = this.fileInput.nativeElement;
        let reader = new FileReader();
        if (fileBrowser.files && fileBrowser.files[0]) {
            
            const file = fileBrowser.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                
            }
        }
    }

}
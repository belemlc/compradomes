import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { ProdutoService } from '../services/produto.service';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'produto-detalhe',
    templateUrl: './produto-detalhe.component.html',
    providers: [
        CategoriaService,
        ProdutoService
    ]
})
export class ProdutoDetalheComponent implements OnInit {

    @ViewChild('fileInput') fileInput: ElementRef;
    private categorias: Categoria[];
    produto: Produto;
    form: FormGroup;
    
    constructor(
        public categoriaService: CategoriaService,
        public produtoService: ProdutoService,
        public fb: FormBuilder
    ) {
        this.createForm();
        this.categoriaService.all().then((res: Categoria[]) => {
            this.categorias = res;
        });
    }

    ngOnInit(): void {
        this.produto = new Produto();
        this.createForm();
    }

    createForm(): void {
        this.form = this.fb.group({
            nome: ['', Validators.required],
            foto: null,
            preco: ['', Validators.required],
            precoAntigo: null,
            categoria: null
        });
    }

    onSubmit(): void {
        let produto: Produto = this.form.value;
        this.produtoService.create(produto).then((res) => {
            console.log(JSON.stringify(res));
        });
    }

    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get('foto').setValue({
                    filename: file.name,
                    fileType: file.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    }

}
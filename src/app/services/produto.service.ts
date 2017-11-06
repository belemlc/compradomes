import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { DaoInterface } from "../interfaces/dao.interface";
import { Produto } from '../models/produto.model';

@Injectable()
export class ProdutoService implements DaoInterface<Produto> {

    private _api: string = "http://localhost:3001/api/produto"; 

    constructor(private _http: Http) {}
    
    all(): Promise<Produto[]> {
        return this._http.get(this._api)
            .toPromise()
            .then(response => <Produto[]>response.json());
    }
    create(produto: Produto): Promise<Produto> {
        return this._http.post(this._api, produto)
            .toPromise()
            .then(response => <Produto>response.json());
    }
    read(): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    update(id: number): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Produto> {
        throw new Error("Method not implemented.");
    }

}
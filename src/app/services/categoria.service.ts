import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Categoria } from '../models/categoria.model';
import { DaoInterface } from "../interfaces/dao.interface";

@Injectable()
export class CategoriaService implements DaoInterface<Categoria> {

    private api: string = "http://localhost:3001/api/categoria";
    private categoria: Categoria;

    constructor(private _http: Http) {}

    all(): Promise<Categoria[]> {
        return this._http.get(this.api)
            .toPromise()
            .then(response => <Categoria[]>response.json());
    }

    create(categoria: Categoria): Promise<Categoria> {
        return this._http.post(this.api, categoria)
            .toPromise()
            .then(response => <Categoria>response.json());
    }

    read(): Promise<Categoria> {
        return this._http.get(this.api)
            .toPromise()
            .then(response => <Categoria>response.json());
    }

    update(id: number): Promise<Categoria> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<Categoria> {
        throw new Error("Method not implemented.");
    }

}
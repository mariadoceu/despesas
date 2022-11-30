import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../model/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private url = "http://localhost:3000/receitas";

  constructor(private _httpClient: HttpClient) {  }

  getReceitas(): Observable<Receita[]>{
    return this._httpClient.get<Receita[]>(this.url);
  }

  cadastrarReceita(receita: Receita):Observable<Receita[]>{
    console.log("Tentando receita no log service!")
    return this._httpClient.post<Receita[]>(this.url,receita);
  }

  atualizarReceita(id:any, receita: Receita):Observable<Receita[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Receita[]>(urlAtualizar,receita);
  }

  removerReceita(id:string):Observable<Receita[]>{
    const urlDeletar = `${this.url}/${id}`;
    // Chamar this._httpClient.delete e tratar com promise os erros
    return this._httpClient.delete<Receita[]>(urlDeletar);
    

  }
}

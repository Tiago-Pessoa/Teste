import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Lista } from '../models/lista.model';
import { MessageService } from '../services/message.service';
import { LISTA } from '../services/mock-contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatosUrl = 'api/contatos';




  constructor(
    private http: HttpClient,
    private messageService: MessageService){}

  getContatos(): Observable <Lista[]> {
    return this.http
    .get<Lista[]> (this.contatosUrl)
    .pipe(tap((contatos) => this.log(`Obteve ${contatos.length}  Contatos`)));


  };

  getContato(id: number): Observable<Lista> {
    return this.http
    .get<Lista>(`${this.contatosUrl}/${id}`)
    .pipe(tap((contato) => this.log(`Obteve contato ID: ${id} - Nome:${contato.nome}`)));


  };

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }
}

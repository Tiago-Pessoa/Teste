import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista } from '../models/lista.model';
import { MessageService } from '../services/message.service';
import { LISTA } from '../services/mock-contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatosUrl = `${environment.baseUrl}/contatos`;




  constructor(
    private http: HttpClient,
    private messageService: MessageService){}

  getAll(): Observable <Lista[]> {
    return this.http
    .get<Lista[]> (this.contatosUrl)
    // .pipe(tap((contatos) => this.log(`Obteve ${contatos.length}  Contatos`)));
  };

  getOne(id: number): Observable<Lista> {
    return this.http
    .get<Lista>(this.getUrl(id))
    .pipe(tap((contato) => this.log(`Obteve contato ID: ${id} - Nome:${contato.nome}`)));
  };

  search(term: string): Observable<Lista[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http
    .get<Lista[]>(`${this.contatosUrl}?nome=${term}`)
    .pipe(
      tap((contatos) => contatos.length
      ? this.log(`Encontrou ${contatos.length} Contato(s)  buscando: ${term}`)
      : this.log(`Não existe Contato(s) Buscando${term}`)
      )
    );
  }


  create(contato: Lista): Observable<Lista>{
    return this.http.post<Lista>(this.contatosUrl, contato)
    .pipe(tap((contato) => this.log(`Criou Novo ${this.descAttributes(contato)}`)));
  }

  update(contato: Lista): Observable<Lista>{
    return this.http.put<Lista>(this.getUrl(contato.id), contato)
    .pipe(tap((contato) => this.log(`Alterou ${this.descAttributes(contato)}`)));
  }

  delete(contato: Lista): Observable<any>{
    return this.http.delete<any>(this.getUrl(contato.id))
    .pipe(tap(() => this.log(`Apagou ${this.descAttributes(contato)}`)));
  }

  private descAttributes(contato: Lista): string {
    return `Contato ID: ${contato.id} - Nome:${contato.nome}`
  }

  private log(message: string): void {
    this.messageService.add(`ContatoService: ${message}`)
  }

  private getUrl(id: number): string {
    return `${this.contatosUrl}/${id}`
  }
}

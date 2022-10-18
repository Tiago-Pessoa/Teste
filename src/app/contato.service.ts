import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lista } from './lista.model';
import { MessageService } from './message.service';
import { LISTA } from './mock-contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private messageService: MessageService){}

  getContatos(): Observable <Lista[]> {
    const contatos = of(LISTA);
    this.messageService.add('ContatoService: Obteve Contatos')
    return contatos;
  };
}

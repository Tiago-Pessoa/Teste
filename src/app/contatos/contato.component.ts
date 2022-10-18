import { Component, OnInit  } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Lista } from '../lista.model';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {


contatos: Lista[]= [];
selectedLista?: Lista;

constructor(private contatoService: ContatoService,
  private messageService: MessageService
  ){}

ngOnInit(): void {
  this.getContatos();
}

getContatos(): void {
  this.contatoService.getContatos().subscribe(contatos => this.contatos = contatos);
}

onSelect(contato:Lista): void {
  this.selectedLista = contato;
  this.messageService.add(`ContatoComponent: Selecionou Contato ID: ${contato.id}`)
}
}

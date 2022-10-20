import { Component, OnInit  } from '@angular/core';
import { ContatoService } from '../../../core/services/contato.service';
import { Lista } from '../../../core/models/lista.model';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

displayedColumns: string[] = ['id', 'nome', 'telefone']
contatos: Lista[]= [];


constructor(private contatoService: ContatoService,

  ){}

ngOnInit(): void {
  this.getContatos();
}

getContatos(): void {
  this.contatoService.getContatos().subscribe(contatos => this.contatos = contatos);
}

}

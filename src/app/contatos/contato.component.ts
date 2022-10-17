import { Component  } from '@angular/core';
import { Lista } from '../lista.model';
import { LISTA } from '../mock-contatos';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
contato: Lista = {
  id: 1,
  nome:'Tiago',
  telefone: '33131212',
};

contatos = LISTA;


}

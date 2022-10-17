import { Component, OnInit } from '@angular/core';
import { Lista } from '../lista.model';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {
teste: Lista = {
  id: 1,
  nome:'Tiago',
  telefone: '33131212',
}
  constructor() { }

  ngOnInit(): void {
  }

}

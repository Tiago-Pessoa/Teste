import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../core/services/contato.service';
import { Lista } from '../core/models/lista.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
contatos: Lista[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.getContatos();
  }

  getContatos(): void {
    this.contatoService.getContatos().subscribe((contatos) =>
      (this.contatos = contatos.slice(1, 5)));
  }

}

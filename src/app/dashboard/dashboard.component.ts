import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../core/services/contato.service';
import { Lista } from '../core/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
contatos: Lista[] = [];

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.contatoService.getAll().subscribe((contatos) =>
      (this.contatos = contatos.splice(0, 8))
    );
  }

  onSelected(contato: Lista): void {
    this.router.navigate(['/contatos', contato.id]);
  }

}

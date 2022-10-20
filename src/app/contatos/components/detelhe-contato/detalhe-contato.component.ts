import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContatoService } from "../../../core/services/contato.service";
import { Lista } from "../../../core/models/lista.model";

@Component({
  selector: 'app-detalhe-contato',
  templateUrl: './detalhe-contato.component.html',
  styleUrls: ['./detalhe-contato.component.scss']
})

export class DetalheContatoComponent implements OnInit {
contato!: Lista;

  constructor(
    private contatoService: ContatoService,
    private location: Location,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void{
    this.getContato();
  }

  getContato(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   this.contatoService.getContato(id).subscribe((contato) => (this.contato = contato));
  }

  goBack(): void {
    this.location.back();
  }
}

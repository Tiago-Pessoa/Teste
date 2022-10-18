import { Component, Input } from "@angular/core";
import { Lista } from "../lista.model";

@Component({
  selector: 'app-detalhe-contato',
  templateUrl: './detalhe-contato.component.html',
  styleUrls: ['./detalhe-contato.component.scss']
})

export class DetalheContatoComponent {
  @Input() lista?: Lista;
}

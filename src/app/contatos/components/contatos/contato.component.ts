import { Component, OnInit  } from '@angular/core';
import { ContatoService } from '../../../core/services/contato.service';
import { Lista } from '../../../core/models/lista.model';
import { DialogData } from 'src/app/core/models/dialog-data.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'telefone', 'actions']
  contatos: Lista[]= [];


    constructor(private contatoService: ContatoService, private dialog: MatDialog){}

    ngOnInit(): void {
      this.getAll();
    }

    getAll(): void {
      this.contatoService.getAll().subscribe(contatos => this.contatos = contatos);
    }

    delete(contato: Lista): void {
      const dialogData: DialogData = {
        cancelText: 'Cancelar',
        confirmText: 'Confirmar',
        content: `Deseja Realmente deletar ${contato.nome}?`
      }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '300px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.contatoService.delete(contato).subscribe(() => {
          this.getAll();
        });
      }
    });
  }
}

import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContatoService } from "../../../core/services/contato.service";
import { Lista } from "../../../core/models/lista.model";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-detalhe-contato',
  templateUrl: './detalhe-contato.component.html',
  styleUrls: ['./detalhe-contato.component.scss']
})

export class DetalheContatoComponent implements OnInit {
contato!: Lista;
isEditing = false;

form = this.fb.group({
  id: {value: 0, disabled: true},
  nome: ['', [Validators.required,  Validators.minLength(3)]],
  telefone: ['', Validators.required],
});


  constructor(
    private fb: FormBuilder,
    private contatoService: ContatoService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(): void{
    this.getOne();
  }

  getOne(): void {

    const paramId = this.route.snapshot.paramMap.get('id');

    if(paramId !== 'new'){
       this.isEditing = true;

      const id = Number(paramId);
      this.contatoService.getOne(id).subscribe((contato) => {
        this.contato = contato;
        this.form.controls['id'].setValue(contato.id)
        this.form.controls['nome'].setValue(contato.nome)
        this.form.controls['telefone'].setValue(contato.telefone)

    });
    }

  }

  goBack(): void {
    this.location.back();
  }


  create(): void {
    const {valid, value} = this.form;
    if(valid){
      const contato: Lista = {
        nome: value.nome,
        telefone: value.telefone,
      } as Lista;
      this.contatoService.create(contato).subscribe(() => this.goBack());
    } else {
      this.showErrorMsg();
    }


  }

  update(): void {
    const {valid, value} = this.form;


    if(valid) {

      const contato: Lista = {
        id: this.contato.id,
        nome: value.nome,
        telefone: value.telefone
      } as Lista
      this.contatoService.update(contato).subscribe(() => this.goBack());
    } else {
      this.showErrorMsg();
    }

  }

  private showErrorMsg(): void {
    this.snackBar.open('Por Favor veja a mensagem de erro', 'Ok', {
      duration: 5000,
      verticalPosition: 'top'
    })
  };
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './components/contatos/contato.component';
import { ContatosRoutingModule } from './contatos-routing.module';
import { DetalheContatoComponent } from './components/detelhe-contato/detalhe-contato.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ContatoComponent, DetalheContatoComponent],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ContatosModule { }

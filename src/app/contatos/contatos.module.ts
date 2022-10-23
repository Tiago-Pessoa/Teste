import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './components/contatos/contato.component';
import { DetalheContatoComponent } from './components/detelhe-contato/detalhe-contato.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatosRoutingModule } from './contatos-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ContatoComponent, DetalheContatoComponent],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class ContatosModule { }

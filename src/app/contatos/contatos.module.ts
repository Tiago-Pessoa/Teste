import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './components/contatos/contato.component';
import { DetalheContatoComponent } from './components/detelhe-contato/detalhe-contato.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ContatosRoutingModule } from './contatos-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ContatoComponent, DetalheContatoComponent],
  imports: [
    CommonModule, FlexLayoutModule, MaterialModule, FormsModule, ContatosRoutingModule
  ]
})
export class ContatosModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contatos/contato.component';
import { DetalheContatoComponent } from './components/detelhe-contato/detalhe-contato.component';

const routes: Routes = [



   {path: ':id', component: DetalheContatoComponent},
   {path: '', component: ContatoComponent}
];




@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }

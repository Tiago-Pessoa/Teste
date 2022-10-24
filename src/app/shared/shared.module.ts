import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoSearchComponent } from './components/contato-search/contato-search.component';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [ContatoSearchComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS]
})
export class SharedModule { }

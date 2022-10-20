import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found.component';

const routes: Routes = [

   {path: '', redirectTo: '/dashboard', pathMatch:'full'},
   {
     path: 'dashboard',
     loadChildren: ()=>
     import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
   },
   {
    path: 'contatos',
    loadChildren: ()=>
    import('./contatos/contatos.module').then((m) => m.ContatosModule),
  },
   {
    path: '**',
    component:PageNotFoundComponent
  },

];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

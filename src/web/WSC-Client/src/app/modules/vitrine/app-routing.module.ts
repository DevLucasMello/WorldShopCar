import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheProdutoComponent } from '../produto/components/detalhe-produto/detalhe-produto.component';
import { AcessoNegadoComponent } from '../shared/components/nav/acesso-negado/acesso-negado.component';
import { NotFoundComponent } from '../shared/components/nav/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { VitrineGuard } from './services/vitrine.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'identidade', loadChildren: () => import('../identidade/identidade.module').then(m => m.IdentidadeModule) },
  { path: 'detalhe/:id', component: DetalheProdutoComponent, canActivate: [VitrineGuard] },
  
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

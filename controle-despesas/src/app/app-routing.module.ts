// Despesas
import { ListarDespesasComponent } from './despesas/listar-despesas/listar-despesas.component';
import { CadastrarDespesaComponent } from './despesas/cadastrar-despesa/cadastrar-despesa.component';
import { EditarDespesaComponent } from './despesas/editar-despesa/editar-despesa.component';

// Receitas
import { CadastrarReceitasComponent } from './receitas/cadastrar-receitas/cadastrar-receitas.component';

// Outras páginas
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// Módulos
import { NgModule } from '@angular/core';
// Roteamento
import { RouterModule, Routes } from '@angular/router';
// Página de roda pé
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  // Despesas
  {path: 'despesas/listar', component: ListarDespesasComponent},
  {path: 'despesas/editar/:descricao/:valor', component: EditarDespesaComponent},
  {path: 'despesas/cadastrar', component: CadastrarDespesaComponent},
  // Receitas
  {path: 'receitas/cadastrar', component: CadastrarReceitasComponent},
  // ...
  
  // 404
  {path: '**', pathMatch: 'full', component: PagenotfoundComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

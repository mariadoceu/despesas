
//Usuarios
import { UserComponent } from './user/user.component';

//Login
import { LoginComponent } from './login/login.component';


// Despesas
import { ListarDespesasComponent } from './despesas/listar-despesas/listar-despesas.component';
import { CadastrarDespesaComponent } from './despesas/cadastrar-despesa/cadastrar-despesa.component';
import { EditarDespesaComponent } from './despesas/editar-despesa/editar-despesa.component';

// Receitas
import { CadastrarReceitasComponent } from './receitas/cadastrar-receitas/cadastrar-receitas.component';
import { ListarReceitasComponent } from './receitas/listar-receitas/listar-receitas.component';
import { EditarReceitasComponent } from './receitas/editar-receitas/editar-receitas.component';

// Outras páginas
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



// Módulos
import { NgModule, Component } from '@angular/core';

//
import { AuthenticationGuard } from './util/authentication.guard';

// Roteamento
import { RouterModule, Routes } from '@angular/router';

// Página de roda pé
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'login' , component: LoginComponent},

  //Login
  { path: 'login', component: LoginComponent },

  //Cadastro de usuário
  {path: 'usuarios', component: UserComponent,
    canActivate: [AuthenticationGuard],
  },

  
  // Despesas
  {path: 'despesas/listar', component: ListarDespesasComponent},
  {path: 'despesas/editar/:descricao/:valor/:vencimento', component: EditarDespesaComponent},
  {path: 'despesas/cadastrar', component: CadastrarDespesaComponent},
  
  // Receitas
  {path: 'receitas/listar-receitas', component: ListarReceitasComponent},
  {path: 'receitas/cadastrar-receitas', component: CadastrarReceitasComponent},
  {path: 'receitas/editar/:descricao/:valor', component: EditarReceitasComponent},
  
  
  // 404
  {path: '**', pathMatch: 'full', component: PagenotfoundComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule { }
 
import { BotaoComponent } from './botao/botao.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'botao', component:BotaoComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

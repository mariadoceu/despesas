import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatListModule} from '@angular/material/list'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { CpfPipe } from './pipes/cpf.pipe';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

// Despesas
import { ListarDespesasComponent } from './despesas/listar-despesas/listar-despesas.component';
import { DespesaModelItemComponent } from './despesas/despesa-model-item/despesa-model-item.component';
import { EditarDespesaComponent } from './despesas/editar-despesa/editar-despesa.component';
import { CadastrarDespesaComponent } from './despesas/cadastrar-despesa/cadastrar-despesa.component';

// Receitas
import { CadastrarReceitasComponent } from './receitas/cadastrar-receitas/cadastrar-receitas.component';
import { ListarReceitasComponent } from './receitas/listar-receitas/listar-receitas.component';
import { EditarReceitasComponent } from './receitas/editar-receitas/editar-receitas.component';
import { ReceitaModelItemComponent } from './receitas/receita-model-item/receita-model-item.component';
import { UserComponent } from './user/user.component';
import { TotalUsersComponent } from './user/total-users/total-users.component';
import { LoginComponent } from './login/login.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ExponentialStrengthPipe,
    CpfPipe,
    AppComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    SobreComponent,
    PagenotfoundComponent,
    ListarDespesasComponent,
    DespesaModelItemComponent,
    EditarDespesaComponent,
    CadastrarDespesaComponent,
    CadastrarReceitasComponent,
    ListarReceitasComponent,
    EditarReceitasComponent,
    ReceitaModelItemComponent,
    UserComponent,
    TotalUsersComponent,
    LoginComponent,
    NotauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

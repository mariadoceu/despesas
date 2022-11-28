import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaService} from '../../service/receita.service';
import { Receita } from '../../model/receita.model';
import { v4 as uuidv4 } from 'uuid';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
@Component({
  selector: 'app-cadastrar-receitas',
  templateUrl: './cadastrar-receitas.component.html',
  styleUrls: ['./cadastrar-receitas.component.css']
})
export class CadastrarReceitasComponent implements OnInit {
  user: User;
  loggedIn = false;
  subscription!: Subscription;
  
  public ID_UNICO: string = uuidv4();
  public receita: Receita = new Receita("","",0);
  public receitas: Receita[] = [];
  constructor(public route: ActivatedRoute, private _receitaService: ReceitaService, 
  private loginService: LoginService) {    
    this.user = WebStorageUtil.get(Constants.USERS_LOGADO_KEY);
    this.subscription = loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;    
    });
  }

  ngOnInit(): void {
      const id = String(this.route.snapshot.paramMap.get('id'));
      this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as boolean;
      this.user = WebStorageUtil.get(Constants.USERS_LOGADO_KEY);
      console.log("ID recebido: " + id);
      console.log("Tipo da var: " + typeof(id));
      if (id == "NEW"){
        this.receita = new Receita(this.ID_UNICO, "", 0)
      }else{
        this.listarReceitas(id)
      }
     
  }
  listarReceitas(id: string){
    this._receitaService.getReceitas()
      .subscribe(
        retornaReceita => {
          retornaReceita.forEach(item => {
            if (item.id == id){
              this.receita = new Receita(
                item.id,
                item.descricao,
                item.valor)
            }
          });
        }
      )
  }
  cadastrar(){
    // Pagar garantir que sera criado um novo cadastro
    this.receita.id = this.ID_UNICO;
    console.log("Receita a ser cadastrada: " + JSON.stringify(this.receita));
    
    let self = this;
    let myPromise = new Promise(function(myResolve, myReject) {
      self._receitaService.cadastrarReceita(self.receita).subscribe(
        // Espera a promise ser cumprida 
        receita => {
          myResolve("OK");
        },
        // Se observar erro invoca o erro!
        err => {
          myReject("Error");
        }
      );
    });

    myPromise.then(
      function(value) {
        console.log("Sucesso ao cadastrar receita");
        self.receita = new Receita(uuidv4(),"",0);
        window.location.href = "/receitas/listar-receitas";
      },
      function(error) {
        console.log("Erro ao cadastrar receita!")
      }
    );

  }
  atualizar(id: string){
    let self = this;
    let myPromise = new Promise(function(myResolve, myReject) {
        self._receitaService.atualizarReceita(id,self.receita).subscribe(
        // Espera a promise ser cumprida 
        receita => {
          myResolve("OK");
        },
        // Se observar erro invoca o erro!
        err => {
          myReject("Error");
        }
      );
    });

    myPromise.then(
      function(value) {
        console.log("Sucesso ao atualizar receita");
        self.receita = new Receita(uuidv4(),"",0);
        window.location.href = "/receitas/listar-receitas";
      },
      function(error) {
        console.log("Erro ao atualizar receita!")
      }
    );
  }
  excluir(id: string){
    console.log("Removendo a receita de id: " + id);
    console.log("Tipo da var: " + typeof(id));
    let self = this;
    let myPromise = new Promise(function(myResolve, myReject) {
      self._receitaService.removerReceita(id).subscribe(
        // Espera a promise ser cumprida 
        receita => {
          myResolve("OK");
        },
        // Se observar erro invoca o erro!
        err => {
          myReject("Error");
        }
      );
    });

    myPromise.then(
      function(value) {
        console.log("Sucesso ao excluir receita");
        self.receita = new Receita(uuidv4(),"",0);
        window.location.href = "/receitas/listar-receitas";
      },
      function(error) {
        console.log("Erro ao excluir receita!")
      }
    );
  }
  voltar(){
    window.location.href = "/receitas/listar-receitas";
  }

  onLogout() {
    //this.loggedIn = false;
    this.loginService.logout();
  }


}

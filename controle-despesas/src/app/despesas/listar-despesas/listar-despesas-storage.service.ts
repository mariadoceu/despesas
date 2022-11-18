
import { BehaviorSubject, Observable } from 'rxjs';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Despesa } from './../../model/despesa';

@Injectable()
export class DespesaStorageService { 
    desps!: Despesa[];
    private despSource!: BehaviorSubject<number>;
    constructor() { 
        this.desps = WebStorageUtil.get(Constants.DESPESAS_KEY);
        console.log("this.desps: " + this.desps);
        if (this.desps == null){
          this.desps = [];
        }
        this.despSource = new BehaviorSubject<number>(this.desps.length);

    }

    save(desps: Despesa) {
        this.desps = WebStorageUtil.get(Constants.DESPESAS_KEY);
        this.desps.push(desps);
        WebStorageUtil.set(Constants.DESPESAS_KEY, this.desps);
      }

    /* métodos para o CRUD */
      update(desp: Despesa) {
        this.desps = WebStorageUtil.get(Constants.DESPESAS_KEY);
        this.delete(desp);        
        console.log("desp id: " + desp.id);        
        this.save(desp);
      } 


      delete(desp: Despesa): boolean {
        this.desps = WebStorageUtil.get(Constants.DESPESAS_KEY);
        var newDesps: Despesa[] = [];
        let ret = false;
        let tamanho = this.desps.length;
        this.desps.forEach(d => {
          if (d.id != desp.id){
            newDesps.push(d);
          }
        });
        if(this.desps.length != newDesps.length){
          ret = true;
        }
        WebStorageUtil.set(Constants.DESPESAS_KEY, newDesps);

        return ret;
      }
    
      isExist(d: Despesa): boolean {
        this.desps = WebStorageUtil.get(Constants.DESPESAS_KEY);
        for (let u of this.desps) {
          if (u.id == d.id) {
            console.log("Já existe esse ID cadastrado!")
            return true;
          }
        }
        return false;
      }
    
      getDespesa(): Despesa[] {
        this.desps = WebStorageUtil.get(Constants.DESPESAS_KEY);
        return this.desps;
      }
    
      notifyTotalUsers() {
        this.despSource.next(this.getDespesa()?.length);
         }
    
      asObservable(): Observable<number> {
        return this.despSource;
   
      }

      



}
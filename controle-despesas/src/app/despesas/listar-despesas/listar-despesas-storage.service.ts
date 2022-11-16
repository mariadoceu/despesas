
import { BehaviorSubject, Observable } from 'rxjs';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Despesa } from './../../model/despesa';

@Injectable()
export class DespesaStorageService { 
    desp!: Despesa[];
    private despSource!: BehaviorSubject<number>;
    constructor() { 
        this.desp = WebStorageUtil.get(Constants.USERS_KEY);
        this.despSource = new BehaviorSubject<number>(this.desp.length);

    }

    save(desp: Despesa) {
        this.desp = WebStorageUtil.get(Constants.USERS_KEY);
        this.desp.push(desp);
        WebStorageUtil.set(Constants.USERS_KEY, this.desp);
      }

    /* métodos para o CRUD */
      update(desp: Despesa) {
        this.desp = WebStorageUtil.get(Constants.USERS_KEY);
        this.delete(desp.descricao);
        this.save(desp);
      }
    
      delete(descricao: string): boolean {
        this.desp = WebStorageUtil.get(Constants.USERS_KEY);
        this.desp = this.desp.filter((d) => {
          return d.descricao?.valueOf() != descricao?.valueOf();
        });
    
        WebStorageUtil.set(Constants.USERS_KEY, this.desp);
        return true;
      }
    
      isExist(value: string): boolean {
        this.desp = WebStorageUtil.get(Constants.USERS_KEY);
        for (let u of this.desp) {
          if (u.descricao?.valueOf() == value?.valueOf()) {
            return true;
          }
        }
        return false;
      }
    
      getDespesa(): Despesa[] {
        this.desp = WebStorageUtil.get(Constants.USERS_KEY);
        return this.desp;
      }
    
      notifyTotalUsers() {
        this.despSource.next(this.getDespesa()?.length);
         }
    
      asObservable(): Observable<number> {
        return this.despSource;
   
      }



}
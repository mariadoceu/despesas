import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable()
export class UserStorageService { 
    users!: User[];
    private userSource!: BehaviorSubject<number>;
    constructor() { 
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        this.userSource = new BehaviorSubject<number>(this.users.length);

    }

    //metodos

    /* Salvar os usuarios */
    save(user: User) {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        this.users.push(user);
        WebStorageUtil.set(Constants.USERS_KEY, this.users);
      }

    /* métodos para o CRUD */
      update(user: User) {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        console.log(user.id)
        this.delete(user);
        this.save(user);
      }
    
      delete(user: User): boolean {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        var newUsers: User[] = [];
        this.users.forEach(u => {
          console.log("u.username: " + u.username +" == " +"username: " + user.username) 
          if (u.username != user.username){
            newUsers.push(u);
          }
        });

        console.log("New users: " + newUsers);
        console.log("Old users: " + this.users);
    
        WebStorageUtil.set(Constants.USERS_KEY, newUsers);
        return true;
      }
    
      isExist(value: string): boolean {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        for (let u of this.users) {
          if (u.username?.valueOf() == value?.valueOf()) {
            return true;
          }
        }
        return false;
      }
    
      getUsers(): User[] {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        return this.users;
      }
    
      notifyTotalUsers() {
        this.userSource.next(this.getUsers()?.length);
        // if (this.getUsers()?.length > 1) {
        //   this.userSource.complete();
        // }
      }
    
      asObservable(): Observable<number> {
        return this.userSource;
        //return this.userSource.asObservable()
      }



}
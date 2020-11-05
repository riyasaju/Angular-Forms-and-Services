import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class FakeService2{

    constructor(private httpClient:HttpClient){


    }

    loadData():Observable<Fake[]>{
        return this.httpClient.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
    }
    sayHello():string{
        return "Welcome to Angular Service using DI";
    }
}

//Model Class --This class help to map json data from REST API
export class Fake{
    constructor(public userId:number, public id:number, public title:string, public completed:boolean)
    {


    }
}
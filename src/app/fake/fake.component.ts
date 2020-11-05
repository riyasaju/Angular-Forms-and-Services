import { Component, OnInit } from '@angular/core';
import { FakeService1 } from '../fake.service1';
import {Fake, FakeService2 } from '../fake.service2';
@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  msg1:string;
  msg2:string;

  fakeObject:Fake[]; 
  employeeDetails:Employee[];
  constructor(private fakeSer2:FakeService2) { }

  ngOnInit(): void {
   /* this.fakeSer2.loadData().subscribe(data=> console.log(data),
   error=>console.log(error),
   ()=>console.log("completed")
   
    ); */
    this.employeeDetails.push(new Employee(100,"Ravi",12000));
    this.employeeDetails.push(new Employee(100,"Ramesh",12000));
    this.employeeDetails.push(new Employee(100,"Ri",12000));
    this.employeeDetails.push(new Employee(100,"Rai",12000));
    this.employeeDetails.push(new Employee(100,"Ra",12000));

    this.fakeSer2.loadData().subscribe(result=>this.fakeObject=result);


  }

  i=0;
  id=0;
  name=null;
  salary=0.0;
  loadDataInfo(){
    this.id=this.employeeDetails[this.i].id;
    this.name=this.employeeDetails[this.i].name;
    this.salary=this.employeeDetails[this.i].salary;
  }


  //this.http.get(url).subscribe(next(),error(),())
  fun1(){
    let ff1=new FakeService1();
    this.msg1=ff1.sayHello();


  }
  fun2(){
    this.msg2=this.fakeSer2.sayHello();
  }

}

class Employee{
  constructor(public id:number, public name:string, public salary:number )
  {

  }
}

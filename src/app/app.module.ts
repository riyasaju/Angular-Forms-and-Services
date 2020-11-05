import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplaterefComponent } from './templateref/templateref.component';
import { TdformComponent } from './tdform/tdform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdformComponent } from './mdform/mdform.component';
import { FakeComponent } from './fake/fake.component';
import {FakeService2} from './fake.service2';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component'


@NgModule({
  declarations: [
    AppComponent,
    TemplaterefComponent,
    TdformComponent,
    MdformComponent,
    FakeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FakeService2],
  bootstrap: [AppComponent]
})
export class AppModule { }

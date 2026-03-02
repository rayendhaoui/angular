import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddresidencerayendhaouiComponent } from './addresidencerayendhaoui/addresidencerayendhaoui.component';
import { ListresidancerayendhaouiComponent } from './listresidancerayendhaoui/listresidancerayendhaoui.component';
import { DetailresidancerayendhaouiComponent } from './detailresidancerayendhaoui/detailresidancerayendhaoui.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddresidencerayendhaouiComponent,
    ListresidancerayendhaouiComponent,
    DetailresidancerayendhaouiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

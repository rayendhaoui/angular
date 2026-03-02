import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListresidancerayendhaouiComponent } from './listresidancerayendhaoui/listresidancerayendhaoui.component';
import { AddresidencerayendhaouiComponent } from './addresidencerayendhaoui/addresidencerayendhaoui.component';
import { DetailresidancerayendhaouiComponent } from './detailresidancerayendhaoui/detailresidancerayendhaoui.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListresidancerayendhaouiComponent },
  { path: 'add', component: AddresidencerayendhaouiComponent },
  { path: 'detail/:id', component: DetailresidancerayendhaouiComponent },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

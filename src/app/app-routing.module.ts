import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { ElecDetailsComponent } from './elec-details/elec-details.component';
import { ElecListComponent } from './elec-list/elec-list.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';


const routes: Routes = [
  {path: 'elec', component: ElecListComponent},
  {path: 'create-elec',component: CreateBillComponent},
  
  {path: '', redirectTo: 'elec', pathMatch: 'full'},
  {path:'update-bill/:electId',component: UpdateBillComponent},
  {path:'bill-details/:electId',component: ElecDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
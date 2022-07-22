import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ElecListComponent } from './elec-list/elec-list.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { ElecDetailsComponent } from './elec-details/elec-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ElecListComponent,
    CreateBillComponent,
    UpdateBillComponent,
    ElecDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

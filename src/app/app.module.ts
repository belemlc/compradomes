import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProdutoModule } from './produto/produto.module';
import { UploadFotoModule } from './upload-foto/upload-foto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    DashboardModule,
    BrowserModule,
    ProdutoModule,
    FormsModule,
    RouterModule,
    HttpModule,
    UploadFotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

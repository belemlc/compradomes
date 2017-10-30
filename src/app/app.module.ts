import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoModule } from './produto/produto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

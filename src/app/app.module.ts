import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DialogModule } from '@angular/cdk/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { TableComponent } from './pages/table/table.component';
import { SharedModule} from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScrollComponent,
    TableComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CdkAccordionModule,
    DialogModule,
    HttpClientModule,
    ScrollingModule,
    CdkTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



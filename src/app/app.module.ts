import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';
import { UsersService } from '@services/users.service';
import { TokenInterceptor } from '@interceptors/token.interceptor';
import { MeService } from '@services/me.service';
import { BoardsService } from '@services/boards.service';
import { CardsService } from '@services/cards.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    TokenService,
    UsersService,
    MeService,
    BoardsService,
    CardsService,
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



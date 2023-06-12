import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

import { SharedModule } from '../shared/shared.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { BackgroundComponent } from './components/background/background.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { RecoveryFormComponent } from './components/recovery-form/recovery-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    RecoveryComponent,
    ForgotPasswordComponent,
    ForgotPasswordFormComponent,
    RecoveryFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AuthModule { }

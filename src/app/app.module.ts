
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { HomeComponent } from './components/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CKEditorModule } from 'ng2-ckeditor';
import { UrunekleComponent } from './components/urunekle/urunekle.component';
import { UrunsilComponent } from './components/urunsil/urunsil.component';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { UrunDetayComponent } from './components/urundetay/urundetay.component';
import { UrunduzenleComponent } from './components/urunduzenle/urunduzenle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UrunekleComponent,
    UrunsilComponent,
    UrunlerComponent,
    UrunDetayComponent,
    UrunduzenleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAFCK5HwjbbMqNsibDR3i0FAw3bIOLEWSg",
      authDomain: "angularlist-36a5c.firebaseapp.com",
      databaseURL: "https://angularlist-36a5c-default-rtdb.firebaseio.com",
      projectId: "angularlist-36a5c",
      storageBucket: "angularlist-36a5c.appspot.com",
      messagingSenderId: "596198204821",
      appId: "1:596198204821:web:43639963e28877f31f029c",
      measurementId: "G-C2VMZK0Y0K"
    }),
  ],
  declarations: [
    RootComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule { }
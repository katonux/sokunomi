import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { SlidetoggleComponent } from "./slidetoggle/slidetoggle.component";

@NgModule({
  declarations: [AppComponent, SlidetoggleComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent, SlidetoggleComponent]
})
export class AppModule {}
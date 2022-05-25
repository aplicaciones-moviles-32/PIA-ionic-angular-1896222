import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaComponent } from './alta/alta.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FeedComponent } from './feed/feed.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistcontentComponent } from './histcontent/histcontent.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './nav/nav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PopContentComponent } from './pop-content/pop-content.component';
import { PopoverComponent } from './popover/popover.component';
import { PostComponent } from './post/post.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { TabsComponent } from './tabs/tabs.component';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    EditprofileComponent,
    FeedComponent,
    HistoriasComponent,
    HistcontentComponent,
    LoginComponent,
    MapComponent,
    NavComponent,
    PerfilComponent,
    PopContentComponent,
    PopoverComponent,
    PostComponent,
    PublicacionComponent,
    PublicacionesComponent,
    TabsComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()), 
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

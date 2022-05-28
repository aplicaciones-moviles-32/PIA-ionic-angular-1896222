import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PostComponent } from './post/post.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },*/
  {path : 'feed', component :FeedComponent},
  {path : 'profile', component :PerfilComponent},
  {path : 'editprofile', component :EditprofileComponent},
  {path : 'post', component :PostComponent},
  {path : 'publi/:id', component :PublicacionComponent},
  {path : 'alta', component :AltaComponent},
  {path : '**', component :FeedComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

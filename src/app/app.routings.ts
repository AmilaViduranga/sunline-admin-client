/**
 * Created by Amila on 12/4/2017.
 */
import { RouterModule, Routes }       from "@angular/router";
import { LoginComponent }             from './login/login.component';
import { DashboardComponent }         from './dashboard/dashboard.component';
import { CommercialComponent}         from './commercial/commercial.component';
import { FilmComponent }              from './film/film.component';
import { MusicVideoComponent }        from './music-video/music-video.component';
import { PrintComponent }             from './print/print.component';
import { TeledramaComponent }         from './teledrama/teledrama.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: DashboardComponent},
  { path: 'commercial', component: CommercialComponent},
  { path: 'film', component: FilmComponent},
  { path: 'musicvideo', component: MusicVideoComponent},
  { path: 'print', component: PrintComponent},
  { path: 'teledrama', component: TeledramaComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
]

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});

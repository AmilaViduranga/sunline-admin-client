import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { AppRouting }                 from './app.routings';
import { SimpleNotificationsModule }  from 'angular2-notifications';
import { BrowserAnimationsModule }    from "@angular/platform-browser/animations";
import { NgxPaginationModule }        from 'ngx-pagination';

/*
 * components importing
 */
import { AppComponent }               from './app.component';
import { LoginComponent }             from './login/login.component';
import { DashboardComponent }         from './dashboard/dashboard.component';
import { ToastService }               from './toast.service';
import { NavbarComponent }            from './navbar/navbar.component';
import { CommercialComponent }        from './commercial/commercial.component';
import { MusicVideoComponent }        from './music-video/music-video.component';
import { FilmComponent }              from './film/film.component';
import { PrintComponent }             from './print/print.component';
import { TeledramaComponent }         from './teledrama/teledrama.component';

/*
 * services importing
 */
import { LoginService }               from './login/login.service';
import { BaseService }                from './globals/base.service';
import { APIInfo }                    from './globals/api.info';
import { CommercialService }          from './commercial/commercial.service';
import { MusicVideoService }          from './music-video/music-video.service';

/*
 * pipes importing
 */
import { UrlFilter }                  from './Pipes/UrlFilter.pipe';
import { SearchTitle }                from './Pipes/Search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    CommercialComponent,
    MusicVideoComponent,
    FilmComponent,
    PrintComponent,
    TeledramaComponent,
    UrlFilter,
    SearchTitle
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    LoginService,
    BaseService,
    APIInfo,
    ToastService,
    CommercialService,
    MusicVideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

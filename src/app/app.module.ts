import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumsupComponent } from './thumsup/thumsup.component';
import { SpriteComponent } from './sprite/sprite.component';
import { FantaComponent } from './fanta/fanta.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const raj:Routes=[
  {
    path:"thumsup", component:ThumsupComponent
  },
  {
    path:"sprite", component:SpriteComponent
  },
  {
    path:"fanta", component:FantaComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ThumsupComponent,
    SpriteComponent,
    FantaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    RouterModule.forRoot(raj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

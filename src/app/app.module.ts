import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { FooterComponent } from './modules/footer/footer.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
     AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

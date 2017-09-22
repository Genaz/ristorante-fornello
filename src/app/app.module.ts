import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuItemComponent } from './menu/menu-list/menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuComponent,
    HeaderComponent,
    NavigationComponent,
    HeadlinesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

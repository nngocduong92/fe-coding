import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { BoardContainerComponent } from './components/board-container/board-container.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { DetailMenuComponent } from './components/detail-menu/detail-menu.component';
import { SimpleMenuComponent } from './components/simple-menu/simple-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    MainContainerComponent,
    BoardContainerComponent,
    BoardComponent,
    CardComponent,
    DetailMenuComponent,
    SimpleMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

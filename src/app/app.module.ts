import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';

// import hacker news api service
import { HackernewsApiService } from './hackernews-api.service';

// Custom pipe
import { DomainPipe } from './domain.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
  ],
  imports: [BrowserModule, HttpClientModule, MomentModule],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

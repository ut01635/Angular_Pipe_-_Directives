import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchHighlightsPipe } from './pipes/search-highlights.pipe';
import { FormsModule } from '@angular/forms';
import { SearchHighlightsAutoPipe } from './pipes/search-highlights-auto.pipe';
import { AlphabetOnlyDirective } from './directives/alphabet-only.directive';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchHighlightsPipe,
    SearchHighlightsAutoPipe,
    AlphabetOnlyDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

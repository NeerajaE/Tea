import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthComponent } from './health/health.component';
import { HistoryComponent } from './history/history.component';
import { MoretypesComponent } from './moretypes/moretypes.component';
import { RisksComponent } from './risks/risks.component';
import { TopplacesComponent } from './topplaces/topplaces.component';
import { TypesComponent } from './types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    HistoryComponent,
    MoretypesComponent,
    RisksComponent,
    TopplacesComponent,
    TypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  


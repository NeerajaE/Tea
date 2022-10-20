import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './health/health.component';
import { HistoryComponent } from './history/history.component';
import { MoretypesComponent } from './moretypes/moretypes.component';
import { RisksComponent } from './risks/risks.component';
import { TopplacesComponent } from './topplaces/topplaces.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  {path:"history",component:HistoryComponent},
  {path:"topplaces",component:TopplacesComponent},
  {path:"health",component:HealthComponent},
  {path:"history",component:HistoryComponent},
  {path:"types",component:TypesComponent},
  {path:"moretypes",component:MoretypesComponent},
  {path:"risks",component:RisksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

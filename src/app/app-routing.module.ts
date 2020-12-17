import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'homepage' },
  { path:'homepage', component:HomepageComponent },
  { path:'subcategory', component:SubcategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

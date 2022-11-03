import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"inventory",
    component: InventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-contact', component: NewContactComponent},
  { path: 'contact/:id', component: ContactDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

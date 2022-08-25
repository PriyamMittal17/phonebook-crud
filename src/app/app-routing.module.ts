import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactsComponent} from './components/contacts/contacts.component';
import {AddContactComponent} from './components/contacts/add-contact/add-contact.component';
import {EditContactComponent} from './components/contacts/edit-contact/edit-contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/add', component: AddContactComponent},
  {path: 'contacts/:id/edit', component: EditContactComponent},
  {path: '**', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

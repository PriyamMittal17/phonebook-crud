import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactFormComponent} from './components/contacts/contact-form/contact-form.component';
import {AddContactComponent} from './components/contacts/add-contact/add-contact.component';
import {EditContactComponent} from './components/contacts/edit-contact/edit-contact.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactFormComponent,
    AddContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

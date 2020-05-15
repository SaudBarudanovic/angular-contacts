import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableContainerComponent } from './table-container/table-container.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';


const routes: Routes = [
  { path: '', component: TableContainerComponent },
  { path: 'contacts/:id', component: EditContactComponent },
  { path: 'addcontact', component: AddContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AppRoutingModule { }

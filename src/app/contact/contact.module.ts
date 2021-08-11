import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactindexComponent } from './contactindex/contactindex.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { EmailComponent } from './email/email.component';
import { PhoneComponent } from './phone/phone.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { ContactRoutingModule } from './contact.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactindexComponent,
    EnquiryComponent,
    EmailComponent,
    PhoneComponent,
    HelpdeskComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContactModule { }

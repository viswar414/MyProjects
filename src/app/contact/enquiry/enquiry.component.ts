import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  phone="";
  navigatePhone(){
    this.router.navigate(['contact/enquiry/phone',this.phone]);
  }

}

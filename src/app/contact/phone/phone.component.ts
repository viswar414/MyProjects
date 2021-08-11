import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor(private actRouter:ActivatedRoute) { }
  phone:any;

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe((param:ParamMap)=>{
      this.phone=param.get("id");
    });
  }

}

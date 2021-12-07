import { Component, OnInit } from '@angular/core';
import { InsurancePlansService } from '../insurance-plans.service';

@Component({
  selector: 'app-insurance-plans',
  templateUrl: './insurance-plans.component.html',
  styleUrls: ['./insurance-plans.component.css']
})
export class InsurancePlansComponent implements OnInit {

  insurancePlansData : any[] = [];
  constructor(private service: InsurancePlansService) { }

  ngOnInit(): void {
    this.service.getInsurancePlans().subscribe((data)=>{
      this.insurancePlansData = data['quotes'];
      console.log("data", data);
    }
    )
  }

  // List View
listView() {
  this.insurancePlansData.forEach(data=>{
    data.style.width = "100%";
  })
}

// Grid View
gridView() {
  this.insurancePlansData.forEach(data=>{
    data.style.width = "50%";
  })
}

}

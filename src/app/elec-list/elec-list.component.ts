import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Elecbill } from '../elecbill';
import { ElecbillsService } from '../elecbills.service';
import { UpdateBillComponent } from '../update-bill/update-bill.component';

@Component({
  selector: 'app-elec-list',
  templateUrl: './elec-list.component.html',
  styleUrls: ['./elec-list.component.css']
})
export class ElecListComponent implements OnInit {
  elecbills: Elecbill[];

  constructor(private elecbillservice: ElecbillsService, private router: Router) { }

  ngOnInit(): void {
    this.getElecBbills();
  }

  private getElecBbills(){
    this.elecbillservice.getElecbillList().subscribe(data => {
      this.elecbills = data;

    });

   }

  updateelecbill(electId: number){
    this.router.navigate(['update-bill', electId]);
  }

  billdetails(electId: number){
    this.router.navigate(['bill-details',electId]);
  }

  deleteelecbill(electId: number){
    this.elecbillservice.deleteBill(electId).subscribe(data=>{
      console.log(data);
      this.getElecBbills();
    })
  }
}

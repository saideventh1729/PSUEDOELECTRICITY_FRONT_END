import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Elecbill } from '../elecbill';
import { ElecbillsService } from '../elecbills.service';


@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
elecbill : Elecbill   = new Elecbill;
constructor(private elecbillservice: ElecbillsService,private router:Router ) { }

  ngOnInit(): void {
  }

  saveElecbill(){
    this.elecbillservice.createbill(this.elecbill).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/elec']);
  }
  
  onSubmit(){
    console.log(this.elecbill);
    this.saveElecbill();
  }

}

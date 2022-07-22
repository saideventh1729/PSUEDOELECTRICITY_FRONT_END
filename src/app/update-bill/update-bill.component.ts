import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Elecbill } from '../elecbill';
import { ElecbillsService } from '../elecbills.service';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit {
  
  electId: number;
  
  elecbill : Elecbill   = new Elecbill();

  constructor(private elecbillservice: ElecbillsService,
    private route: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.electId = this.route.snapshot.params['electId'];

    this.elecbillservice.getBillById(this.electId).subscribe(data => {
      this.elecbill = data;
    }, error => console.log(error));
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

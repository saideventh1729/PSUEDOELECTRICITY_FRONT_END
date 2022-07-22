import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Elecbill } from '../elecbill';
import { ElecbillsService } from '../elecbills.service';

@Component({
  selector: 'app-elec-details',
  templateUrl: './elec-details.component.html',
  styleUrls: ['./elec-details.component.css']
})
export class ElecDetailsComponent implements OnInit {
  
  electId: number;
  
  elecbill : Elecbill;

  constructor(private elecbillservice: ElecbillsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.electId = this.route.snapshot.params['electId'];

    this.elecbill = new Elecbill();
    this.elecbillservice.getBillById(this.electId).subscribe( data => {
      this.elecbill = data;
    });
  }

}

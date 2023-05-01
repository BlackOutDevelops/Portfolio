import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'work',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.css']
})
export class WorkComponent {
  houseOneBeforeImageLocations = this.dataService.houseOneBeforeImageLocations;
  houseOneAfterImageLocations = this.dataService.houseOneAfterImageLocations;
  houseTwoBeforeImageLocations = this.dataService.houseTwoBeforeImageLocations;
  houseTwoAfterImageLocations = this.dataService.houseTwoAfterImageLocations;

  constructor(private dataService: DataService) { };
}

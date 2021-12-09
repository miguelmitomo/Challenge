import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { FormatNifService } from '../services/format-nif.service';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  public selectedFormat: string = "1";

  constructor(public dataService: DataService, private authService: AuthService, public formatNifService: FormatNifService) { }


  ngOnInit() {
    this.dataService.getData(this.authService.getToken());
  }

}

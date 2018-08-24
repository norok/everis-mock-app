import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../../services/mock-data.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public contentData:Array<any> = [];
  public modalContent:any = null;

  constructor(
    private mockDataService:MockDataService,
    private modalService:NgbModal
  ) { }

  ngOnInit() {
    this.mockDataService.loadData()
      .subscribe(
        data => {
          this.contentData = data;
        }, error => {
          console.error(error);
        }
      );
  }

  public openModal(modal, modalData):void {
    this.modalContent = modalData;
    this.modalService.open(modal);
  }

}

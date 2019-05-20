import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirma-delete',
  templateUrl: './confirma-delete.component.html',
  styleUrls: ['./confirma-delete.component.scss']
})
export class ConfirmaDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmaDeleteComponent>) { }

  public confirmMessage:string;


  ngOnInit() {
  }

}

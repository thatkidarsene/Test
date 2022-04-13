import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Test } from '../test';
import { Test2Service } from '../test2.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})


export class DialogComponent implements OnInit {

  selectedtest!:Test;
  text!:string;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private tsv: Test2Service

    )
    { this.selectedtest = data.selectedTest; }

    onNoClick(): void {
      this.dialogRef.close();
    }
    onClick(): void {
      if(this.text){
      this.tsv.createTest(new Test(this.text))
      .subscribe(
       error => console.log(error));
      this.dialogRef.close({data:new Test(this.text)});
      }else{
        this.onNoClick()
      }
    }

  ngOnInit():void {
  }

}

import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Test } from '../test';
import { Test2Service } from '../test2.service';
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  selectedtest!:Test;
  text!:string;
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private tsv: Test2Service

    )
    { this.selectedtest = data.selectedTest; this.text=this.selectedtest.title; }

    onNoClick(): void {
      this.dialogRef.close();
    }
    onClick(): void {
      if(this.text){
        this.selectedtest.title = this.text;
        this.tsv.updateTest(this.selectedtest.id,this.selectedtest)
        .subscribe(
         error => console.log(error));
        }else{
          this.onNoClick()
        }
        this.dialogRef.close();
        console.log("closing dialog....")
    }

  ngOnInit():void {
  }

}


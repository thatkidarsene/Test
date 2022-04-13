import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Test } from '../test';
import { Test2Service} from '../test2.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  selectedtest!:Test;
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private tsv: Test2Service,

    )
    { this.selectedtest = data.selectedTest;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }


    onClick(): void {
       this.tsv.deleteTest(this.selectedtest.id).
       subscribe(
        error => console.log("an error occured"+error)
        );
       this.dialogRef.close();

    }

  ngOnInit():void {
    console.log("selected test : id="+this.selectedtest.id+" title="+this.selectedtest.title)
  }

}



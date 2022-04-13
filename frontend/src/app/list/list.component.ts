import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent} from '../dialog/dialog.component'
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../deletedialog/deletedialog.component';
import { Test2Service} from '../test2.service';
import { Test } from '../test';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  name!: string;
  isSelected!:boolean;
  testList:Test[] = [];
  selectedTest!:Test ;
  onSelect(test: Test): void {
    this.isSelected = true;
    this.selectedTest = test;
    console.log("a test was clicked!! , test id : "+test.id+" test title: "+test.title)
  }
  constructor(private tsv: Test2Service, public dialog: MatDialog) { }


  openDialog(): void {
    console.log("selectedTest : " +this.selectedTest)
    let dialogRref = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { selectedTest: this.selectedTest}
    });

    dialogRref.afterClosed().subscribe(res => {
      // received data from dialog-component
      console.log("dialog closed... reloading data");

     this.getTests();
      this.isSelected= false;
      //console.log("dialog closed, selected test is now :"+this.selectedTest.title)
     // console.log("dialog closed,last test found : "+this.testList[this.testList.length-1].title)
    })
  }

  openEditDialog(): void {
    console.log("selectedTest : " +this.selectedTest)
    let dialogRref = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: { selectedTest: this.selectedTest}
    });
    dialogRref.afterClosed().subscribe(res => {
      console.log("dialog closed")
      // received data from dialog-component
      //this.getTests();
      //this.getTests();
      this.isSelected= false;
      console.log("dialog closed, selected test is now :"+this.selectedTest.title)
      console.log("dialog closed,last test found : "+this.testList[this.testList.length-1].title)

    })

  }

  openDeleteDialog(): void {
    console.log("selectedTest : " +this.selectedTest)
    console.log("selectedTestId : " +this.selectedTest.id)
    let dialogRref = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: {  selectedTest: this.selectedTest}
    });

    dialogRref.afterClosed().subscribe(res => {
      // received data from dialog-component
     this.getTests();
      this.isSelected= false;
      console.log("dialog closed, selected test is now :"+this.selectedTest.title)
    })
  }






  ngOnInit(): void {
    this.getTests();
  }

  getTests(): void {
    this.tsv.getAll()
      .subscribe({
        next: (data) => {
          this.testList  = data;
          console.log(data);
          //console.log("selected test :"+this.selectedTest.title);

          //console.log("last test found : "+this.testList[this.testList.length-1].title)

        },
        error: (e) => console.error(e)
      });
  }



}

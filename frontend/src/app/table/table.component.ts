import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { TestCase } from '../testcase';
import { TestService} from '../test.service';
import { Test2Service } from '../test2.service';
import { MatTable } from '@angular/material/table';




@Component({
  selector: 'app-data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  TestData!:TestCase[];
  data : Map<string, string>[] = [];
  displayedColumns: string[] = ['test_id', 'objective', 'date', 'time','test_data', 'status','error_message','executor'];
  translations = new Map<string, string>()



  constructor(private tsv: TestService, private t2sv:Test2Service) { }

  ngOnInit(): void {
    this.notifyForChange();
this.getTests();
this.update();
this.translations.set("test_id","id")
this.translations.set("objective","objectif")
this.translations.set("date","date")
this.translations.set("time","heure",)
this.translations.set("test_data","données de test")
this.translations.set("status","statut")
this.translations.set("error_message","message d'erreur")
this.translations.set("executor","exécute par")

console.log("ngoninit end p : "+this.tsv.p);
console.log("ngoninit end s : "+this.tsv.s);
console.log("ngoninit end f : "+this.tsv.f);
  }


  notifyForChange() {
    this.tsv.notifyAboutChange();
  }



  launchTest(){
    console.log("Test script is executing...")
    console.log("next subscribe is runtest")
    this.t2sv.runTest()
    .subscribe(
      arg => this.refresh()
      );
    console.log("method called");
    console.log("refreshing...");

  }

  refresh(){
    console.log("inside refresh..");
    this.getTests()
    this.update()
  }


  getTests(){
    this.tsv.getAll()
      .subscribe({
        next: (data) => {
          this.TestData = data;
          console.log(data);
          console.log("hello")
        },
        error: (e) => console.error(e)
      });
  }

  update(){
    this.tsv.getPassed()
    .subscribe({
      next: (data) => {
        let t:TestCase[] = data;
        this.tsv.p = t.length;
        this.notifyForChange()
        console.log("inside update p :"+this.tsv.p)
        console.log("inside update s :"+this.tsv.s)
        console.log("inside update f :"+this.tsv.f)
        console.log("bool p :"+!!this.tsv.p)
        console.log("bool s :"+!!this.tsv.s)
        console.log("bool f :"+!!this.tsv.f)
        console.log("inside update isLoaded :"+this.tsv.isLoaded)
      },
      error: (e) => console.error(e)
    });

    this.tsv.getFailed()
    .subscribe({
      next: (data) => {
        let t:TestCase[] = data;
        this.tsv.s = t.length;
        this.notifyForChange()
      },
      error: (e) => console.error(e)
    });

    this.tsv.getSkipped()
    .subscribe({
      next: (data) => {
        let t:TestCase[] = data;
        this.tsv.f = t.length;
        this.notifyForChange()
        this.tsv.isLoaded = (!!this.tsv.p)&&(!!this.tsv.s)&&(!!this.tsv.f)
      },
      error: (e) => console.error(e)
    });



  }


}

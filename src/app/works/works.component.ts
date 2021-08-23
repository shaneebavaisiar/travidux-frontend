import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {


  constructor(private service: SharedService) { }
  lst_works: any = []
  createEditActive: boolean = false
  ViewActive:boolean=false
  FormName = ""
  CreateEditWork: any = []
  workSelected: number = 0
  lst_work_status: any = []
  lst_project: any = []
  lst_work_type: any = []
  dat_current: any
  ins_work_view:any





  ngOnInit(): void {
    this.ListWorks()
    this.get_workstatus()
    this.get_Project()
    this.get_worktype()
    this.dateCurrent()
  }



  get_workstatus() {
    return this.service.ListWorkStatus().subscribe(response => {
      this.lst_work_status = response


    })
  }
  get_Project() {
    return this.service.ListProject().subscribe(response => {
      this.lst_project = response
    })
  }

  get_worktype() {
    return this.service.ListWorkType().subscribe(response => {
      this.lst_work_type = response
    })
  }

  ListWorks() {
    return this.service.GetWorks().subscribe(response => {
      this.lst_works = response
      var project_name = this.lst_project

      var project = project_name[1]
      console.log("id", project);

      console.log("works", this.lst_works);


    })
  }
  dateCurrent() {
    this.service.CurrentDate().subscribe(response => {
      this.dat_current = response
    })
  }

  CreateWork() {
    this.CreateEditWork = {
      id: 0,
      str_title: "",
      txt_descrption: "",
      fk_project_id_id: 1,
      jsn_attachment: [{}],
      dat_created: this.dat_current,

      fk_type_id_id: 1,
      fk_work_status_id_id: 1
    }

    this.FormName = "CREATE WORK"
    this.createEditActive = true

  }

  EditWorks(ins_work: any) {
    this.CreateEditWork = ins_work
    this.FormName = "EDIT WORK"
    this.createEditActive = true
    console.log("edit work",ins_work);
    
  }
  DeleteWorks(item:any) {
    console.log(item);
    var val={}
    this.service.DeleteWorks(item.id,val).subscribe(response=>{
      console.log(response);  
    })
    this.ListWorks() 
  }
  ViewWorks(item:any) {
    this.ins_work_view=item
    this.ViewActive=true
  }
  closeClick(){
    this.createEditActive=false
    this.ViewActive=false
    this.ListWorks()
  }



}

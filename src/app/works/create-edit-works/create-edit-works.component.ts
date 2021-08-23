import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-create-edit-works',
  templateUrl: './create-edit-works.component.html',
  styleUrls: ['./create-edit-works.component.css']
})
export class CreateEditWorksComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() edit_create: any = []



  lst_project: any = []
  lst_work_type: any = []
  lst_work_status: any = []
  int_id = 0
  str_title = ""
  txt_descrption = ""
  fk_project_id_id = ""
  jsn_attachment = ""
  dat_created: any
  fk_type_id_id = ""
  fk_work_status_id_id: string = "select"

  ngOnInit(): void {
    this.get_Project()
    this.get_workstatus()
    this.get_worktype()
    this.int_id = this.edit_create.id
    this.str_title = this.edit_create.str_title
    this.txt_descrption = this.edit_create.txt_descrption
    this.fk_project_id_id = this.edit_create.fk_project_id_id
    this.jsn_attachment = this.edit_create.jsn_attachment
    this.dat_created = this.edit_create.dat_created
    this.fk_type_id_id = this.edit_create.fk_type_id_id
    this.fk_work_status_id_id = this.edit_create.fk_work_status_id_id



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

  get_workstatus() {
    return this.service.ListWorkStatus().subscribe(response => {
      this.lst_work_status = response
    })
  }

  SubmitWork() {
    var val = {
      str_title: this.str_title,
      txt_descrption: this.txt_descrption,
      fk_project_id_id: this.fk_project_id_id,
      jsn_attachment: this.jsn_attachment,
      fk_type_id_id: this.fk_type_id_id,
      fk_work_status_id_id: this.fk_work_status_id_id
    }
    return this.service.PostWorks(val).subscribe(response => {
      console.log(response);
    })
  }
  EditWork() {
    var val = {
      id: this.int_id,
      str_title: this.str_title,
      txt_descrption: this.txt_descrption,
      fk_project_id_id: this.fk_project_id_id,
      jsn_attachment: this.jsn_attachment,
      fk_type_id_id: this.fk_type_id_id,
      fk_work_status_id_id: this.fk_work_status_id_id
    }
    console.log(val);
    var id = val.id

    return this.service.UpdateWorks(id, val).subscribe(response => {
      console.log(response);
    })
  }
}

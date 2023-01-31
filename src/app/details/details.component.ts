import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  queryparams: any;
  jobForm:FormGroup
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private api:ApiService) {     this.jobForm = this.fb.group({
    experience_required: [Validators.required],
    job_close_date: [Validators.required],
    job_notes: ['', [Validators.required, Validators.maxLength(70)]],
    job_number: [''],
    job_start_date: [''],
    job_title: [''],
    number_of_openings: ['']
  }); }

  ngOnInit(): void {
    this.queryparams = this.route.snapshot.queryParams;

    console.log('queryParams', this.queryparams.id);
    if (this.queryparams?.id){
      this.fetchData(this.queryparams.id);
    }
  }


  fetchData(id:any) {
    this.api.getDataById(id).subscribe((data:any)=>{
      let res=data;
      this.setData(res[0]);
    })
  }
  setData(data: any) {
    console.log("data", data["job_title"])
    let obj = {
      'job_title':data['job_title'],
      'job_start_date':data['job_start_date'],
      'job_close_date':data['job_close_date'],
      'experience_required':data['experience_required'],
      'number_of_openings':data['number_of_openings'],
      'job_notes':data["job_notes"],
      'job_number':data["job_number"]

      }
    // };
 
    this.jobForm.setValue(obj);
  }

}

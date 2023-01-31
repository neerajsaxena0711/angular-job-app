import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  jobForm: FormGroup;
  minDate: any;
  jobCloseDate: any;
  constructor(private fb: FormBuilder, private api: ApiService, private router:Router) {

    this.minDate = new Date().toISOString().split("T")[0]

    this.jobForm = this.fb.group({
      experience_required: [Validators.required],
      job_close_date: [Validators.required],
      job_notes: ['', [Validators.required, Validators.maxLength(70)]],
      job_number: [''],
      job_start_date: [''],
      job_title: [''],
      number_of_openings: ['']
    });

  }

  ngOnInit(): void {
  }

  isExperienceRequiredInvalid() {
    const experienceRequiredControl = this.jobForm.get('experience_required');
    return experienceRequiredControl?.invalid && experienceRequiredControl.touched;
  }

  onSubmit() {
    if (this.jobForm.invalid) {
      //In complete details
      alert("All fields are mandatory");
    } else {
      this.addJob();
    }
  }

  addJob() {
    let data = {
      "job_number": this.jobForm.controls['job_number'].value,
      "job_title": this.jobForm.controls['job_title'].value,
      "job_start_date": this.jobForm.controls['job_start_date'].value,
      "job_close_date": this.jobForm.controls['job_close_date'].value,
      "experience_required": this.jobForm.controls['experience_required'].value,
      "number_of_openings": this.jobForm.controls['number_of_openings'].value,
      "job_notes": this.jobForm.controls['job_notes'].value
    }
    console.log("daTa", data);
    this.api.postData(data).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['jobs']);
    });
  }
}


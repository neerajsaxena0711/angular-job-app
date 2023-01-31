import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs:any=[];
  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.fetchJobs();
  }

  createNewJob(){
    this.router.navigate(['new']);
  }

  viewDetails(id:any){
    this.router.navigate(['details'], {queryParams:{id:id}});
  }

  fetchJobs(){
    this.api.getData().subscribe((data)=>{
      this.jobs=data;
      console.log("The result is", this.jobs);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AmsServiceService } from '../services/ams-service.service';
import { AttendanceService } from '../services/attendance.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private attendanceService :  AttendanceService, private amsData :AmsServiceService) { }

  ngOnInit(): void {
  }


  present() {
    this.attendanceService.createList('present').subscribe((response:any)=>{
      console.log(response)
    })
  }

  absent() {
    this.attendanceService.createList('absent').subscribe((response:any)=>{
      console.log(response)
    })
  }


//filter
  
 month : string[] =["january" ,"feburary" ,"march" ,"april" ,"mayy" ,"june" ,"july" ,"augest","september","octber","november","december"];
 year : any[]=["2020","2021"];

 days :any[] =["sun" ,"mon" ,"tue" ,"wed" ,"thr" ,"fri" ,"sat"]
 
//get boxes
ust : any = new Date().getDate();

getDate(abc :any){
  return new Array(abc)
}



// present staus count
color :any;
count :number =0;
myname ={"status" :"present"}
give(data :any){
  // this.color ="green"
  console.log(data);
this.amsData.saveUser(data).subscribe((result: any)=>{
  console.log(result); 
})
this.count++;
}

//Absent status  count



// box ids 
globalId : any;
 getId(id:any){
   this.globalId = id;
console.log(id);

 }
// color function 
  bg:any;
 colorId(clr :any){
      this.bg = document.getElementById(this.globalId);
        this.bg.style.background = clr;
  //  console.log(bg);
 }


 //storing id in backend

 value:any=0;
 getValue(id :any){
   console.log(id);
   this.value =id;
   var idStore={
     "id" :this.value
   }
   console.log(idStore);
   this.amsData.saveId(idStore).subscribe((result)=>{
     console.log(result);
   })
 }



 user:any=0;
 users(id:any){
   console.log(id);
   this.value =id;
   var userStore={
     "id":this.value
   }
   console.log(userStore);
   this.amsData.saveId(userStore).subscribe((result) =>{
     console.log(result);
   })
 }

}

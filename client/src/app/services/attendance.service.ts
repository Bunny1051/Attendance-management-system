import { Injectable } from '@angular/core';
import {AmsServiceService} from './ams-service.service'

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private AmsServiceService:AmsServiceService) { }

  createList(status:any){
    return this.AmsServiceService.post('ams',{status})
  }
}

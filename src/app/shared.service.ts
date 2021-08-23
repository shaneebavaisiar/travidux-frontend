import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl="http://127.0.0.1:8000/api/works/v1/"
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') }

  constructor(private http:HttpClient) { }



  ListProject():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+"project/")
  }
  ListWorkType():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+"worktype/")
  }
  ListWorkStatus():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+"workstatus/")
  }
  CurrentDate():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+"date/")
  }




  GetWorks():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+"works/")
  }

  PostWorks(val:any){
    return this.http.post(this.ApiUrl+"works/",val,this.options)

  }
  
  DeleteWorks(id:any,val:any){
    return this.http.put(this.ApiUrl+"workdelete/"+id,val)
    
  }
  UpdateWorks(id:any,val:any){
    return this.http.put(this.ApiUrl+"workupdate/"+id,val)
  }








}

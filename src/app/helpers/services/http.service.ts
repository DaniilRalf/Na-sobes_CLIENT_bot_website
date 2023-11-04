import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {DevSpecification, GradeEnum, ModeEnum, SandboxDataType} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = environment.apiPath

  constructor(
    public http: HttpClient
  ) {
  }

  getCountQuestion(devSpecification: DevSpecification, grade: GradeEnum): Observable<number> {
    return this.http.post<number>(`${this.url}/${ModeEnum.Sandbox}/get-count`, {
      devSpecification: devSpecification,
      grade
    })
  }

  getActualQuestion(devSpecification: DevSpecification, number: number, grade: GradeEnum): Observable<SandboxDataType> {
    return this.http.post<SandboxDataType>(`${this.url}/${ModeEnum.Sandbox}/get-actual-question`, {
      number,
      devSpecification: devSpecification,
      grade
    })
  }

}

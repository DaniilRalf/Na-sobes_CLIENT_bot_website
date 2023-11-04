import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {DevSpecification, GradeEnum, ModeEnum, SandboxDataType} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  protected devSpecification!: DevSpecification

  url = environment.apiPath

  constructor(
    protected http: HttpClient
  ) {
  }

  getCountQuestion(grade: GradeEnum): Observable<number> {
    return this.http.post<number>(`${this.url}/${ModeEnum.Sandbox}/get-count`, {
      devSpecification: this.devSpecification,
      grade
    })
  }

  getActualQuestion(number: number, grade: GradeEnum): Observable<SandboxDataType> {
    return this.http.post<SandboxDataType>(`${this.url}/${ModeEnum.Sandbox}/get-actual-question`, {
      number,
      devSpecification: this.devSpecification,
      grade
    })
  }

}

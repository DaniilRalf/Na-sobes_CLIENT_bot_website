import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {DevSpecification, GradeEnum, ModeEnum} from "../../models";
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

  getCountQuestion(number: number, grade: GradeEnum): Observable<number> {
    return this.http.post<number>(`${this.url}/${ModeEnum.Sandbox}/get-count`, {
      number,
      devSpecification: this.devSpecification,
      grade}
    )
  }

}

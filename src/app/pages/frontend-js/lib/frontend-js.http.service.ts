import {Inject, Injectable} from '@angular/core';
import {HttpService} from "../../../helpers/services/http.service";
import {DevSpecification} from "../../../models";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FrontendJsHttpService extends HttpService {

  protected override devSpecification = DevSpecification.FrontendJS

  @Inject(HttpClient) protected override http!: HttpClient

}

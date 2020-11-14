import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AliasService} from "../@shared/api-platform/http/alias.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-alias',
    templateUrl: './create-alias.page.html',
    styleUrls: ['./create-alias.page.scss'],
})
export class CreateAliasPage implements OnInit {

    newAliasForm: FormGroup;
    emailList = new BehaviorSubject<string[]>([]);

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private aliasService: AliasService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.http.get<string[]>(`${environment.apiUrl}/api/email`).subscribe(
            (data) => this.emailList.next(data)
        )

        this.newAliasForm = this.formBuilder.group({
            realEmail: ['', [Validators.email, Validators.required]],
            aliasEmail: ['', [Validators.email, Validators.required]],
        })
    }

    onSubmit() {
        const data = this.newAliasForm.value;
        this.aliasService.postCollection({realEmail: data.realEmail, aliasEmail: data.aliasEmail}).subscribe(
            () => this.router.navigate(['/home']).then(),
            (err) => console.error(err)
        )
    }
}

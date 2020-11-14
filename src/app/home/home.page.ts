import {Component, OnInit} from '@angular/core';
import {Alias} from "../@shared/api-platform/interfaces/alias";
import {AliasService} from "../@shared/api-platform/http/alias.service";
import {BehaviorSubject} from "rxjs";
import * as _ from "lodash";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public aliases: BehaviorSubject<Alias[]> = new BehaviorSubject<Alias[]>(null);

    constructor(private aliasService: AliasService) {
    }

    ngOnInit(): void {
        this.aliasService.getCollection().subscribe(
            (data) => this.aliases.next(data["hydra:member"]),
            (err) => console.error(err)
        )
    }

    delete(alias: Alias) {
        this.aliasService.deleteItem(alias.id.toString()).subscribe(
            () => {
                this.aliasService.getCollection().subscribe(
                    (data) => this.aliases.next(data["hydra:member"]),
                    (err) => console.error(err)
                )
            },
            (err) => console.error(err)
        );
    }


}

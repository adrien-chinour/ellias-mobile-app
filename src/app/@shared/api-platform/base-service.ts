import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {APIPlatformCollection, APIPlatformPagedCollection} from "./interfaces/hydra";

@Injectable()
export class BaseService<Item extends { id: number }, NewItem> {
    constructor(
        protected http: HttpClient,
        protected resourcePath: string
    ) {
    }

    protected url() {
        return environment.apiUrl + this.resourcePath;
    }

    public getCollection() {
        return this.http.get<APIPlatformCollection<Item>>(this.url());
    }

    // TODO
    public getPaginatedCollection() {
        return this.http.get<APIPlatformPagedCollection<Item>>(this.url());
    }

    public postCollection(item: NewItem) {
        return this.http.post<Item>(this.url(), item);
    }

    public getItem(id: string) {
        return this.http.get<Item>(`${this.url()}/${id}`);
    }

    public putItem(item: Item) {
        return this.http.put<Item>(`${this.url()}/${item.id}`, item);
    }

    // TODO
    public patchItem(item: Item) {
        return this.http.patch<Item>(`${this.url()}/${item.id}`, item);
    }

    public deleteItem(id: string) {
        return this.http.delete<{}>(`${this.url()}/${id}`);
    }


}

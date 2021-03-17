import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpConfig } from "./config";

export interface Rest<T> {
    all$(): Observable<T[]>;
    one$(id): Observable<T>;
    create$(data: T): Observable<T>
    update$(id, data: any): Observable<T>;
    delete$(id): Observable<boolean>;
}


export abstract class RestService<T> implements Rest<T> {

    abstract collectionName(): string;

    constructor(private httpClient: HttpClient, private config: HttpConfig) {}

    all$(): Observable<T[]> {
        const url = `${this.config.serverAddress}/${this.collectionName()}`
        return this.httpClient.get<T[]>(url);
    }

    one$(id): Observable<T> {
        const url = `${this.config.serverAddress}/${this.collectionName()}/${id}`;
        return this.httpClient.get<T>(url);
    }

    create$(data: T): Observable<T> {
        const url = `${this.config.serverAddress}/${this.collectionName()}`;
        return this.httpClient.post<T>(url, data);
    }

    update$(id, data: any): Observable<T> {
        const url = `${this.config.serverAddress}/${this.collectionName()}/${id}`;
        return this.httpClient.put<T>(url, data);
    }

    delete$(id): Observable<boolean> {
        const url = `${this.config.serverAddress}/${this.collectionName()}/${id}`;
        return this.httpClient.delete<boolean>(url);
    }
}
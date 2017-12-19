import { AppSettings } from "./../app.settings";
/* import { AsyncLocalStorage } from "angular-async-local-storage"; */
import { Injectable, EventEmitter } from "@angular/core";
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/finally";
import { Router } from "@angular/router";


@Injectable()
export class HttpService extends Http {
    token: string;
    onRequest: EventEmitter<void> = new EventEmitter<void>();
    onFinishRequest: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        backend: XHRBackend,
        options: RequestOptions,
/*         protected storage: AsyncLocalStorage, */
        private router: Router,
    ) {
        super(backend, options);
    }

    /* deleteToken() {
        return this.storage.removeItem(AppSettings.APP_LOCALSTORAGE_TOKEN).take(1);
    }
    setToken(token: string): Observable<boolean> {
        this.token = token;
        return this.storage.setItem(AppSettings.APP_LOCALSTORAGE_TOKEN, token).take(1);
    } */
    protected setHeaders({ headers }: Request | RequestOptionsArgs) {
        if (headers) {
            // headers.set("Content-Type", "application/json");
            headers.set("Authorization", `Bearer ${this.token}`);
        }
    }

    protected configureRequest(request: string | Request, options?: RequestOptionsArgs) {
        if (typeof request === "string") {
            this.setHeaders(options || {});
        } else {
            this.setHeaders(request);
        }
    }

    request(url: string | Request, options?: RequestOptionsArgs) {
        this.onRequest.emit();
        this.configureRequest(url, options);

        return super.request(url, options)
            .catch((res: Response) => {
                if (res.status === 401) {
                    this.router.navigate(["/home"]);
                }
                return Observable.throw(res);
            })
            // .catch(error => Observable.throw(error))
            .finally(() => this.onFinishRequest.emit());
    }
/*     refreshToken(resRaw) {
        const res = resRaw.json();
        if (res.token) {
            this.token = res.token;
        }
        return res;
    } */
    get<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        return super.get(url, options)
            .map(res => res.json());
    }

    post<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
        return super.post(url, body, options)
            // .map(res => this.refreshToken(res));
            .map(res => res.json());
    }

    put<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
        return super.put(url, body, options)
            .map(res => res.json());
    }

    delete<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        return super.delete(url, options)
            .map(res => res.json());
    }

    patch<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
        return super.patch(url, body, options)
            .map(res => res.json());
    }

    head<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        return super.head(url, options)
            .map(res => res.json());
    }

    options<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        return super.options(url, options)
            .map(res => res.json());
    }
    postWithFile(url: string, file: File) {
        const formData: FormData = new FormData();
        formData.append("avatar", file, file.name);
        // For multiple files
        // for (let i = 0; i < files.length; i++) {
        //     formData.append(`files[]`, files[i], files[i].name);
        // }
        return this.post(url, formData);
    }
}

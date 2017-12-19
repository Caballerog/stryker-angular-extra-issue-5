import { Injectable } from "@angular/core";
import { HttpService } from "app/shared/services/http.service";
import { AppSettings } from "app/shared/app.settings";
import { News } from "app/home/front/news/interfaces/news.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NewsService {

    private _news: News[] = [];

    constructor(
        private httpService: HttpService,
    ) { }

    get news(): News[] {
        return this._news;
    }
    set news(news: News[]) {
        this._news = news;
    }

    public getAllNews(): Observable<News[]> {
        return this.httpService.get(AppSettings.API_ENDPOINT_NEWS);
    }
}

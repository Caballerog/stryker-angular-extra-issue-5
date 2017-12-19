import { TestBed, inject } from "@angular/core/testing";
import { NewsService } from "./news.service";
import { HttpService } from "app/shared/services/http.service";
import { XHRBackend, BaseRequestOptions, Http, ConnectionBackend } from "@angular/http";
import { Router } from "@angular/router";
import { MockBackend } from "@angular/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { News } from "app/home/front/news/interfaces/news.interface";

describe("NewsService", () => {
    let newsService: NewsService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NewsService,
                {
                    provide: HttpService,
                    useFactory: (
                        backend: XHRBackend,
                        defaultOptions: BaseRequestOptions,
                        router: Router,
                    ) => {
                        return new HttpService(backend, defaultOptions, router);
                    },
                    deps: [MockBackend, BaseRequestOptions, Router],
                },
                { provide: MockBackend, useClass: MockBackend },
                { provide: BaseRequestOptions, useClass: BaseRequestOptions },
                { provide: XHRBackend, useClass: MockBackend },
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions],
                },
            ],
            imports: [
                RouterTestingModule,
            ],

        });
    });
    beforeEach(inject([NewsService], (_newsService: NewsService) => {
        newsService = _newsService;
    }));
    describe("#getNews", () => {

        it("should return an array of News[]", () => {
            newsService.news = [
                {} as News,
                {} as News,
                {} as News,
            ];

            const news = newsService.news;
            expect(news).toEqual(jasmine.any(Array));
            expect(news.length).toBe(3);
        });
        it("should return an empty array", () => {
            const news = newsService.news;
            expect(news).toEqual(jasmine.any(Array));
            expect(news.length).toBe(0);
        });

    });
});


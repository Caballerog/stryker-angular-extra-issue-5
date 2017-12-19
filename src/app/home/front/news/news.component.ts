import { Component, OnInit } from '@angular/core';
import { News } from 'app/home/front/news/interfaces/news.interface';
import { NewsService } from 'app/home/front/news/news.service';


@Component({
    selector: 'polinet-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent {

    public news: News[] = [];

    constructor(
        private newsService: NewsService,
    ) {
        /*  this.newsService.getAllNews(); */ //Resolver
        this.newsService.getAllNews().
            subscribe(
            (news: News[]) => this.news = news,
            () => { },
        );
    }



}

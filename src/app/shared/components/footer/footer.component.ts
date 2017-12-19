import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'app/shared/app.settings';

@Component({
    selector: 'polinet-footer',
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
    public socialNetworks = [
        {
            fontawesome: "fa fa-facebook-square",
            enabled: true,
            url: "https://www.facebook.com/IES-Polit%C3%A9cnico-Jes%C3%BAs-Mar%C3%ADn-125272187648374/"
        },
        {
            fontawesome: "fa fa-twitter-square",
            enabled: true,
            url: "https://www.twitter/politecnico"
        },
        {
            fontawesome: "fa fa-instagram",
            enabled: true,
            url: ""
        },
    ];

    public polinetVersion = AppSettings.APP_VERSION;
    public ip = "Usted está conectado desde Internet con la IP 192.168.2.7";

    constructor() { }

    ngOnInit() {
    }

}

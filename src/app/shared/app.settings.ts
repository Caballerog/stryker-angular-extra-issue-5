export class AppSettings {
    public static readonly APP_NAME = "Polinet";
    public static readonly APP_VERSION = "0.1.0";
    public static readonly API_ENDPOINT = "//localhost:3000/";
    public static readonly API_ENDPOINT_APP = AppSettings.API_ENDPOINT + "app";
    public static readonly API_ENDPOINT_USER = AppSettings.API_ENDPOINT + "user";
    public static readonly API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + "auth";
    public static readonly API_ENDPOINT_NEWS = AppSettings.API_ENDPOINT + "news";

    public static readonly API_ENDPOINT_UTILITIES = AppSettings.API_ENDPOINT + "utilities";


    public static readonly APP_DEFAULT_MOMENT_LOCALE = "en";

    public static readonly STUDENT_ROL = "student";
    public static readonly TEACHER_ROL = "teacher";
}

import { InjectionToken } from "@angular/core";

export interface HttpConfig {
    serverAddress: string;
}

export const HTTP_CONFIG = new InjectionToken<HttpConfig>('http.config');

export const HTTP_CONFIG_DETAILS: HttpConfig = {
    serverAddress: 'http://localhost:8081/api'
} 
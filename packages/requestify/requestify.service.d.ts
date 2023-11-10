import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
export declare class RequestifyService {
    private readonly httpService;
    constructor(httpService: HttpService);
    get<T>(url: string): Promise<AxiosResponse>;
}

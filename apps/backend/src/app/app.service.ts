import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from '@nestjs/terminus/dist/errors/axios.error';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async exampleData() {
    const { data } = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/users').pipe(
        catchError((error: AxiosError) => {
          throw error.message;
        })
      )
    );
    return data;
  }
}

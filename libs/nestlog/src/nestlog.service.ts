import { Injectable } from '@nestjs/common';

@Injectable()
export class NestlogService {
  log(logData) {
    console.log(logData);
  }

  info(infoData) {
    console.info(infoData);
  }

  error(error) {
    console.error(error);
  }

  detail(object) {
    console.dir(object);
  }

  debug(value) {
    console.debug(value);
  }
}

import { InjectConnection } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Connection } from 'typeorm';
import { ValidatorConstraint } from 'class-validator';

import { ExistValidator, UniqueValidator } from '@core/shared/helpers';

@ValidatorConstraint({ name: 'is-unique', async: true })
@Injectable()
export class IsUnique extends UniqueValidator {
  constructor(@InjectConnection() protected readonly connection: Connection) {
    super(connection);
  }
}

@ValidatorConstraint({ name: 'is-exist', async: true })
@Injectable()
export class IsExist extends ExistValidator {
  constructor(@InjectConnection() protected readonly connection: Connection) {
    super(connection);
  }
}

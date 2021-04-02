import { Injectable } from '@nestjs/common';

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import moment from 'moment-timezone';

export function TimezoneValidator(timezone: string): boolean {
  return moment.tz.zone(timezone) != null;
}

@ValidatorConstraint({ name: 'is-timezone' })
@Injectable()
export class IsTimezone implements ValidatorConstraintInterface {
  public async validate(timezone: string) {
    return TimezoneValidator(timezone);
  }

  public defaultMessage() {
    return `This timezone does not exist!`;
  }
}

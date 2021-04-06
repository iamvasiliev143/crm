import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  Validate,
} from 'class-validator';

import { AccountType, Trader, Language } from '@shared/entities';

import { IsExist, IsUnique } from '@shared/helpers';

import { TraderOpenTradingAccountDTO as CoreTraderOpenTradingAccountDTO } from '@core/trader/dtos';

export class TraderOpenTradingAccountDTO extends CoreTraderOpenTradingAccountDTO {
  @IsNotEmpty({ message: 'Account Type cannot be empty!' })
  @IsString()
  @Validate(IsExist, [AccountType])
  @ApiProperty({
    type: String,
    example: 'c0bf0c71-2f86-4b8f-90c0-8c3ce31931e3',
  })
  accountType!: string;

  @IsNotEmpty({ message: 'Email cannot be empty!' })
  @IsEmail(undefined, { message: 'Email is wrong!' })
  @MaxLength(255)
  @Validate(IsUnique, [Trader])
  @ApiProperty({
    type: String,
    example: 'iamvasliev143@gmail.com',
  })
  email!: string;

  @IsNotEmpty({ message: 'Language cannot be empty!' })
  @MaxLength(2)
  @Validate(IsExist, [Language])
  @ApiProperty({
    type: String,
    example: 'en',
  })
  language!: any;
}

import { ApiProperty } from '@nestjs/swagger';

import { IsEnum, IsNotEmpty } from 'class-validator';

import { AccountTypeE, CurrencyE } from '@core/shared/consts';

export class AccountTypeDTO {
  @IsNotEmpty({ message: 'Title cannot be empty!' })
  @ApiProperty({
    type: String,
    example: `Account #${Date.now()}`,
  })
  title!: string;

  @IsNotEmpty({ message: 'Type cannot be empty!' })
  @IsEnum(AccountTypeE)
  @ApiProperty({
    enum: AccountTypeE,
    example: AccountTypeE.trading,
  })
  type!: AccountTypeE;

  @IsNotEmpty({ message: 'Currency cannot be empty!' })
  @ApiProperty({
    enum: CurrencyE,
    example: CurrencyE.EUR,
  })
  currency!: CurrencyE;
}

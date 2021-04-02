import { ApiProperty } from '@nestjs/swagger';

import {
  IsNotEmpty,
  IsEnum,
  IsEmail,
  IsMobilePhone,
  ValidateNested,
  IsISO31661Alpha2,
  IsString,
  IsInt,
  IsDateString,
  MinLength,
  Matches,
  MaxLength,
  Validate,
} from 'class-validator';
import { Type } from 'class-transformer';
import moment from 'moment';

import { MessengerTypeE, PasswordRegex } from '@core/shared/consts';
import { IsTimezone, MakePassword } from '@core/shared/helpers';

export class TraderMessengersDTO {
  @IsNotEmpty({ message: 'Messenger Type cannot be empty!' })
  @IsEnum(MessengerTypeE)
  @ApiProperty({
    enum: MessengerTypeE,
    example: MessengerTypeE.telegram,
  })
  messengerType!: MessengerTypeE;

  @IsNotEmpty({ message: 'Messenger Account cannot be empty!' })
  @IsString()
  @MaxLength(64)
  @ApiProperty({
    example: 'iamvasiliev143',
  })
  messengerAccount!: string;
}

export class TraderOpenBaseAccountDTO {
  @IsNotEmpty({ message: 'Account Type cannot be empty!' })
  @IsString()
  @ApiProperty({
    type: String,
    example: 'c0bf0c71-2f86-4b8f-90c0-8c3ce31931e3',
  })
  accountType!: string;

  @IsNotEmpty({ message: 'First Name cannot be empty!' })
  @IsString()
  @MaxLength(64)
  @ApiProperty({
    type: String,
    example: 'Mikhail',
  })
  firstName!: string;

  @IsNotEmpty({ message: 'Last Name cannot be empty!' })
  @IsString()
  @MaxLength(64)
  @ApiProperty({
    type: String,
    example: 'Vasiliev',
  })
  lastName!: string;

  @IsNotEmpty({ message: 'Birth Date cannot be empty!' })
  @IsDateString()
  @ApiProperty({
    type: Date,
    example: moment(new Date('1999-04-10')).format('YYYY-MM-DD'),
  })
  birthDate!: Date;

  @IsNotEmpty({ message: 'Email cannot be empty!' })
  @IsEmail(undefined, { message: 'Email is wrong!' })
  @MaxLength(255)
  @ApiProperty({
    type: String,
    example: 'iamvasliev143@gmail.com',
  })
  email!: string;

  @IsNotEmpty({ message: 'Password cannot be empty!' })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(PasswordRegex)
  @ApiProperty({
    type: String,
    example: MakePassword(),
  })
  password!: string;

  @IsNotEmpty({ message: 'Mobile Phone cannot be empty!' })
  @IsMobilePhone(undefined, undefined, { message: 'Mobile Phone is wrong!' })
  @ApiProperty({
    type: String,
    example: '+380992247184',
  })
  phone!: string;

  @ValidateNested({ each: true })
  @Type(() => TraderMessengersDTO)
  @ApiProperty({
    type: TraderMessengersDTO,
    required: false,
  })
  messenger!: TraderMessengersDTO;

  @IsNotEmpty({ message: 'Country cannot be empty!' })
  @IsISO31661Alpha2()
  @ApiProperty({
    type: String,
    example: 'UA',
  })
  country!: string;

  @IsNotEmpty({ message: 'Province cannot be empty!' })
  @IsString()
  @MaxLength(255)
  @ApiProperty({
    type: String,
    example: 'Sumskaya',
  })
  province!: string;

  @IsNotEmpty({ message: 'Province cannot be empty!' })
  @IsString()
  @MaxLength(255)
  @ApiProperty({
    type: String,
    example: 'Sumy',
  })
  city!: string;

  @IsNotEmpty({ message: 'Province cannot be empty!' })
  @IsInt()
  @ApiProperty({
    type: Number,
    example: 40000,
  })
  zip!: number;

  @IsNotEmpty({ message: 'Province cannot be empty!' })
  @IsString()
  @MaxLength(255)
  @Validate(IsTimezone)
  @ApiProperty({
    type: String,
    example: 'Europe/Kiev',
  })
  timezone!: string;

  @IsNotEmpty({ message: 'Leverage cannot be empty!' })
  @ApiProperty({
    type: String,
    example: '40000',
  })
  leverage!: string;

  @IsNotEmpty({ message: 'Language cannot be empty!' })
  @MaxLength(2)
  @ApiProperty({
    type: String,
    example: 'en',
  })
  language!: string | any;
}

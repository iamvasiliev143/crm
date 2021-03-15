import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsEmail, IsMobilePhone } from 'class-validator';

export class TraderOpenTradingAccountDTO {
  @IsNotEmpty({ message: 'First Name cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'Mikhail',
  })
  firstName!: string;

  @IsNotEmpty({ message: 'Last Name cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'Vasiliev',
  })
  lastName!: string;

  @IsNotEmpty({ message: 'Birth Date cannot be empty!' })
  @ApiProperty({
    type: Date,
    example: new Date('1999-04-10'),
  })
  birthDate!: Date;

  @IsNotEmpty({ message: 'Email cannot be empty!' })
  @IsEmail(undefined, { message: 'Email is wrong!' })
  @ApiProperty({
    type: String,
    example: 'iamvasliev143@gmail.com',
  })
  email!: string;

  @IsNotEmpty({ message: 'Password cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'Qwerty123',
  })
  password!: string;

  @IsNotEmpty({ message: 'Mobile Phone cannot be empty!' })
  @IsMobilePhone(undefined, undefined, { message: 'Mobile Phone is wrong!' })
  @ApiProperty({
    type: String,
    example: '+380992247184',
  })
  phone!: string;

  @ApiProperty({
    type: String,
    required: false,
    example: 'live:36e254e929e41e85',
  })
  skype!: string;
}

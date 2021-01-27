import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsBoolean } from 'class-validator';

export class LanguageDTO {
  @IsNotEmpty({ message: 'Code cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'ru',
  })
  readonly code!: string;

  @IsNotEmpty({ message: 'Title cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'Russian',
  })
  readonly title!: string;

  @IsNotEmpty({ message: 'If the Language is Public cannot be empty!' })
  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    example: true,
  })
  readonly public!: boolean;

  @IsNotEmpty({
    message: 'If the Language is Default and Public	 cannot be empty!',
  })
  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    example: false,
  })
  readonly default!: boolean;
}

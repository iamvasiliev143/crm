import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty } from 'class-validator';

export class TranslationDTO {
  code?: string;

  @IsNotEmpty({ message: 'Key of Translation cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'lead_types.client',
  })
  readonly key!: string;

  @IsNotEmpty({ message: 'Translation cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'Client',
  })
  readonly translation!: string;
}

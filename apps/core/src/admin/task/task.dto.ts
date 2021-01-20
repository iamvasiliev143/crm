import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty } from 'class-validator';

export class TaskDTO {
  @IsNotEmpty({ message: 'Title cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'Task #1',
  })
  title!: string;

  @IsNotEmpty({ message: 'Description cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'Description',
  })
  description!: string;
}

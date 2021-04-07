import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsEnum } from 'class-validator';

import { TaskTypeE } from '@core/shared/consts';

export class TaskDTO {
  @IsNotEmpty({ message: 'Type cannot be empty!' })
  @IsEnum(TaskTypeE)
  @ApiProperty({
    enum: TaskTypeE,
    example: TaskTypeE.openDemoAccount,
  })
  type!: TaskTypeE;

  @IsNotEmpty({ message: 'TraderID cannot be empty!' })
  @ApiProperty({
    type: String,
    example: 'Description',
  })
  trader!: any;

  openDemoAccount?: {
  };

  openTradingAccount?: {
  };
}

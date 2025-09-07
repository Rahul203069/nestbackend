import { IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class VisitorInsightsQueryDto {
  @ApiProperty({ example: 7, description: 'Number of days to fetch (1-30)' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(30)
  days: number;
}
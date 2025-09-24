import { IsString, IsNotEmpty } from 'class-validator';

export class CreateApiDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  comment: string;
}

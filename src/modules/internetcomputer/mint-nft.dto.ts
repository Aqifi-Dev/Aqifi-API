// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsString } from 'class-validator';

export class MintNftDto {
  @IsString()
  content: string;
}

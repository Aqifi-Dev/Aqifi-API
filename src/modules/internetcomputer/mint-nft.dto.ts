// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsString } from 'class-validator';

export class General {
  @IsString()
  content: string;
}
export class MintNftDto {
  @IsString()
  content: string;
  @IsString()
  textone: string;
}

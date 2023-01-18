/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { IcController } from './ic.controller';

@Module({
  controllers: [IcController],
})
// eslint-disable-next-line prettier/prettier
export class InternetcomputerModule { }

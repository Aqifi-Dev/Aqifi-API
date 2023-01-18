/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MintNftDto } from './mint-nft.dto';

@Controller('ic')
export class IcController {
  @Get('/d00')
  stopD00() {
    console.log('stopDfx');
  }
  @Get('/d0')
  startD0() {
    console.log('startDfx');
  }
  @Get('/d1')
  deployD3() {
    console.log('deploy hello');
  }
  @Get('/d2')
  deployD2() {
    console.log('deploy dip721');
  }
  @Get('/d4')
  deployD4() {
    console.log('call simple dip721 canister functions');
  }
  @Get('/d5')
  deployD5() {
    console.log('call inter-canister');
  }
  //POST /ic { "content": "hi there" }
  @Post('/d6')
  mintNFT(@Body() body: MintNftDto) {
    console.log('mintNFT body:', body);
  }

  @Get()
  listNFTs() {
    console.log('list NFTs');
  }

  //GET /ic/:id
  @Get('/:id')
  getMetadata(@Param('id') id: string) {
    console.log('getMetadata for id:', id);
  }
}

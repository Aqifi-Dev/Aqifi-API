/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MintNftDto } from './mint-nft.dto';
import { exec, spawn } from 'child_process';
export const lg = console.log;

@Controller('ic')
export class IcController {
  @Get('/test')
  test() {
    lg('test');
    exec(
      '../dip721-nft-container/bashscript.sh test',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }
  @Post('/once')
  once(@Body() body: MintNftDto) {
    lg('once');
    exec(
      '../dip721-nft-container/bashscript.sh once',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }

  @Post('/startDfx')
  startDfx(@Body() body: MintNftDto) {
    lg('startDfx');
    exec(
      '../dip721-nft-container/bashscript.sh startDfx',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }
  @Post('/deployHello')
  deployHello(@Body() body: MintNftDto) {
    lg('deployHello');
    exec(
      '../dip721-nft-container/bashscript.sh deployHello',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }
  @Post('/deployDip721')
  deployDip721(@Body() body: MintNftDto) {
    lg('deployDip721');
    exec(
      '../dip721-nft-container/bashscript.sh deployDip721',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }
  @Get('/callSimpleFunctions')
  callSimpleFunctions() {
    lg('callSimpleFunctions d4');
    exec(
      '../dip721-nft-container/bashscript.sh callSimpleFunctions',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }
  @Get('/callInterCanister')
  callInterCanister() {
    lg('callInterCanister d5');
    exec(
      '../dip721-nft-container/bashscript.sh callInterCanister',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }
  //POST /ic { "content": "hi there" }
  @Post('/mintNFT')
  mintNFT(@Body() body: MintNftDto) {
    lg('mintNFT d6. body:', body, ', content:', body.content);
    exec(
      '../dip721-nft-container/bashscript.sh mintNFT ' + body.content,
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }
  //POST /ic { "content": "hi there" }
  @Post('/mintNftforall')
  mintNftforall(@Body() body: MintNftDto) {
    lg('mintDip721forall d6a. body:', body, ', content:', body.content);
    exec(
      '../dip721-nft-container/bashscript.sh mintDip721forall ' + body.content,
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }

  @Post('/dfxstop')
  dfxstop(@Body() body: MintNftDto) {
    lg('mintDip721forall d6a. body:', body, ', content:', body.content);
    exec(
      '../dip721-nft-container/bashscript.sh dfxstop',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }

  @Get('/listNfts')
  listNFTs() {
    lg('list NFTs');
  }

  //GET /ic/:id
  @Get('/:id')
  getMetadata(@Param('id') id: string) {
    lg('getMetadata d6b. nft_id:', id);
    exec(
      '../dip721-nft-container/bashscript.sh getMetadata ' + id,
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }
}

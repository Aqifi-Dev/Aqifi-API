/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Principal } from '@dfinity/principal';
import { General, MintNftDto } from './mint-nft.dto';
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
    return 'OK:test';
  }
  @Post('/once')
  once(@Body() body: General) {
    lg('once', body, ', content:', body.content);
    exec(
      '../dip721-nft-container/bashscript.sh once',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }

  @Post('/cargocheck')
  cargocheck(@Body() body: General) {
    lg('cargocheck', body, ', content:', body.content);
    exec(
      '../dip721-nft-container/bashscript.sh cargocheck',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }

  @Post('/useDfxAdmin')
  useDfxAdmin(@Body() body: General) {
    lg('useDfxAdmin', body, ', content:', body.content);
    exec(
      '../dip721-nft-container/bashscript.sh useDfxAdmin',
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }

  @Post('/startDfx')
  startDfx(@Body() body: General) {
    lg('startDfx', body, ', content:', body.content);
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
  deployHello(@Body() body: General) {
    lg('deployHello', body, ', content:', body.content);
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
  deployDip721(@Body() body: General) {
    lg('deployDip721', body, ', content:', body.content);
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
    lg('mintNFT d6. body:', body, ', content:', body.content, ', textone:', body.textone);
    //const nft_to_principal = Principal.fromText(body.textone);
    exec(
      '../dip721-nft-container/bashscript.sh mintNFT ' + body.content + ' ' + body.textone,
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
    lg('mintDip721forall d6a. body:', body, ', content:', body.content, ', textone:', body.textone);
    exec(
      '../dip721-nft-container/bashscript.sh mintDip721forall ' + body.content + ' ' + body.textone,
      (err, stdout, stderr) => {
        lg('err:', err);
        lg('stdout:', stdout);
        lg('stderr:', stderr);
      },
    );
  }

  @Post('/dfxstop')
  dfxstop(@Body() body: General) {
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

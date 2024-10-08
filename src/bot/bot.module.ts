import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';
import { SequelizeModule } from '@nestjs/sequelize';
import { fromFileId } from 'telegraf/typings/input';
import { JwtModule } from '@nestjs/jwt';
import { Admin } from './models/admin.model';
import { Master } from './models/master.model';
import { Client } from './models/client.model';
import { AdminModule } from './admin.module';
import { MasterModule } from './master.module';
import { ClientModule } from './client.module';

@Module({
  imports:[SequelizeModule.forFeature([Admin, Master, Client]), AdminModule, MasterModule, ClientModule],
  controllers: [],
  providers: [BotService, BotUpdate, JwtModule],
  exports:[BotService]
})
export class BotModule {}

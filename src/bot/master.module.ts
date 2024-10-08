import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TelegrafModule } from "nestjs-telegraf";
import { BotModule } from "./bot.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { BOT_NAME } from "../app.constants";
import { Master } from "./models/master.model";

@Module({
  imports: [SequelizeModule.forFeature([Master])],
  controllers: [],
  providers: [],
})
export class MasterModule {}

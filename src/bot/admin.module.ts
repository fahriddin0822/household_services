import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TelegrafModule } from "nestjs-telegraf";
import { BotModule } from "./bot.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { BOT_NAME } from "../app.constants";
import { Admin } from "./models/admin.model";

@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  controllers: [],
  providers: [],
})
export class AdminModule {}

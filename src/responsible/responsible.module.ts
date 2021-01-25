import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ResponsibleController} from "./responsible.controller";
import {ResponsibleRepository} from "./responsible.respository";
import {ResponsibleService} from "./responsible.service";
import {BalancesheetService} from "./balancesheet/balancesheet.service";
import {BalancesheetRepository} from "./balancesheet/balancesheet.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResponsibleRepository, BalancesheetRepository]),
  ],
  controllers: [ResponsibleController],
  providers: [ResponsibleService, BalancesheetService],
})
export class ResponsibleModule {}

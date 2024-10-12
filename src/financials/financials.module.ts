import { Module } from '@nestjs/common';
import { FinancialsService } from './financials.service';
import { FinancialsController } from './financials.controller';
import { DatabaseModule } from 'src/database/database.module';
import { financialsProvider } from './financials.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [FinancialsController],
  providers: [FinancialsService, ...financialsProvider],
})
export class FinancialsModule {}

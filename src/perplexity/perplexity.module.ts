import { Module } from '@nestjs/common';
import { PerplexityService } from './perplexity.service';
import { PerplexityController } from './perplexity.controller';
import { FinancialsService } from 'src/financials/financials.service';
import { financialsProvider } from 'src/financials/financials.provider';
import { databaseProviders } from 'src/database/database.provider';
import { messagesRepository } from './perplexity.provider';

@Module({
  controllers: [PerplexityController],
  providers: [
    PerplexityService,
    FinancialsService,
    ...financialsProvider,
    ...databaseProviders,
    ...messagesRepository,
  ],
  imports: [],
})
export class PerplexityModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AggregatorModule } from './aggregator/aggregator.module';
import { PerplexityModule } from './perplexity/perplexity.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { FinancialsModule } from './financials/financials.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AggregatorModule,
    PerplexityModule,
    DatabaseModule,
    UsersModule,
    FinancialsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

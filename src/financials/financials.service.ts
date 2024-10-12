import { Inject, Injectable } from '@nestjs/common';
import { Financials } from './entities/financials.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FinancialsService {
  constructor(
    @Inject('FINANCIALS_REPOSITORY')
    private financialsRepository: Repository<Financials>,
  ) {}

  // TODO: Recieve userId as parameters when user module is implemented
  async getUserFinancials() {
    const userFinancialDetails = await this.financialsRepository.find();
    return userFinancialDetails[0];
  }

  // TODO: Update userFinancialData with its type
  async setUserFinancials(userFinancialData: any) {
    const userFinancials = this.financialsRepository.create(userFinancialData);
    await this.financialsRepository.save(userFinancials);
  }
}

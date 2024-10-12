import { Controller, Get } from '@nestjs/common';
import { FinancialsService } from './financials.service';

@Controller('financials')
export class FinancialsController {
  constructor(private readonly financialsService: FinancialsService) {}

  // TODO: Recieve userId as parameters when user module is implemented
  @Get('get-user-financials')
  async getUserFinancials() {
    return this.financialsService.getUserFinancials();
  }
}

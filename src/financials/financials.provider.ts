import { DataSource } from 'typeorm';

import { Financials } from './entities/financials.entity';

export const financialsProvider = [
  {
    provide: 'FINANCIALS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Financials),
    inject: ['DATA_SOURCE'],
  },
];

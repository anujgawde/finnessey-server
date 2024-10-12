import { DataSource } from 'typeorm';

import { Messages } from './entities/messages.entity';

export const messagesRepository = [
  {
    provide: 'MESSAGES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Messages),
    inject: ['DATA_SOURCE'],
  },
];

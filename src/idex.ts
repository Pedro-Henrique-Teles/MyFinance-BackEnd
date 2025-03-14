import { User } from './entity/user.entity';

export const myFinanceProviders = [
  {
    provide: 'USER_PROVIDER',
    useValue: User,
  },
];
export const modelProviders = myFinanceProviders.map((item) => item.useValue);

import { InputType, registerEnumType } from '@nestjs/graphql';
import { Order } from '@/common/order/order';

export enum UserOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  published = 'published',
  title = 'title',
  content = 'content',
}

registerEnumType(UserOrderField, {
  name: 'UserOrderField',
  description: 'Properties by which User connections can be ordered.',
});

@InputType()
export class UserOrder extends Order {
  field!: UserOrderField;
}

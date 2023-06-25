import { UserInterface } from 'interfaces/user';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id: string;
  wait_staff_id: string;
  table_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user_order_customer_idTouser?: UserInterface;
  user_order_wait_staff_idTouser?: UserInterface;
  table?: TableInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  wait_staff_id?: string;
  table_id?: string;
  status?: string;
}

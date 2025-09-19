import { LinkProps } from "next/link";

export interface OrderItemProps extends LinkProps {
  name: string;
  price: number;
  totalUsageTime: string;
  shopName: string;
  purchaseDate: string;
}

import { LinkProps } from "next/link";

export interface OrderItemDetailProps extends LinkProps {
  shopName: string;
  startedAt: string;
  endedAt: string;
  price: number;
  totalUsageTime: string;
  purchaseDate: string;
  paymentKey: string;
  paymentStatus: string;
  customerName: string;
  paymentMethod: string;
  amount: number;
  receiptUrl: string;
  status: "IN_USE" | "COMPLETED";
}

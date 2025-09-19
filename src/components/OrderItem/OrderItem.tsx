import Link from "next/link";
import React from "react";
import { OrderItemProps } from "@/components/OrderItem/OrderItemProps";
import UsageStatusBadge from "@/components/Badge/UsageStatusBadge/UsageStatusBadge";
import Stack from "@/components/Stack/Stack";

function ChevornRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 19L15 12L8 5"
        stroke="#161C24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function OrderItem({
  href,
  name,
  price,
  totalUsageTime,
  shopName,
  purchaseDate,
}: OrderItemProps) {
  return (
    <li>
      <Link className="order-item-container" href={href}>
        <Stack className="w-full" dir="row" items="center" justify="between">
          <Stack gap={8}>
            <UsageStatusBadge status="IN_USE" />
            <Stack gap={4}>
              <Stack dir="row" gap={12}>
                <h2 className="text-grey-900 text-sm font-medium leading-5">
                  {name}
                </h2>
                <span className="text-grey-600 text-sm font-medium leading-5">
                  총 {totalUsageTime}
                </span>
              </Stack>
              <div className="text-grey-900 text-xl font-bold leading-5">
                {price.toLocaleString()}원
              </div>
            </Stack>
            <Stack dir="row" gap={12}>
              <div className="text-grey-600 text-xs font-normal leading-5">
                {shopName}
              </div>
              <div className="text-grey-600 text-xs font-normal leading-5">
                {purchaseDate}
              </div>
            </Stack>
          </Stack>
          <ChevornRight />
        </Stack>
      </Link>
    </li>
  );
}

export default OrderItem;

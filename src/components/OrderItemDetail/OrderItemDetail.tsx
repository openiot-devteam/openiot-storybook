import Link from "next/link";
import React from "react";
import UsageStatusBadge from "@/components/Badge/UsageStatusBadge/UsageStatusBadge";
import Stack from "@/components/Stack/Stack";
import { OrderItemDetailProps } from "@/components/OrderItemDetail/OrderItemDetailProps";

function OrderItemDetail({
  shopName,
  startedAt,
  endedAt,
  totalUsageTime,
  paymentKey,
  paymentStatus,
  customerName,
  paymentMethod,
  amount,
  receiptUrl,
  status,
}: OrderItemDetailProps) {
  return (
    <Stack className="order-item-detail-container" gap={24}>
      <Stack dir="row" justify="between">
        <h2>1번 플러그</h2>
        <UsageStatusBadge status={status} />
      </Stack>
      <Stack gap={8}>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="text-grey-600">이용 지점</span>
          <span className="text-grey-900">{shopName}</span>
        </Stack>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="text-grey-600">이용 시작</span>
          <span className="text-grey-900">{startedAt}</span>
        </Stack>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="text-grey-600">이용 종료</span>
          <span className="text-grey-900">{endedAt}</span>
        </Stack>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="text-grey-600">총 이용 시간</span>
          <span className="text-grey-900">{totalUsageTime}</span>
        </Stack>
      </Stack>
      <div className="h-[1px] border-t-1 border-grey-300" />
      <Stack gap={8}>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="text-grey-600">구매번호</span>
          <span className="text-grey-900">{paymentKey}</span>
        </Stack>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="text-grey-600">결제 상태</span>
          <span className="text-grey-900">{paymentStatus}</span>
        </Stack>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="text-grey-600">결제자</span>
          <span className="text-grey-900">{customerName}</span>
        </Stack>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="text-grey-600">결제 수단</span>
          <span className="text-grey-900">{paymentMethod}</span>
        </Stack>
        <Stack dir="row" justify="between" className="order-item-detail-text">
          <span className="flex self-center text-grey-600">총 결제 금액</span>
          <span className="text-xl font-bold text-grey-900">
            {amount?.toLocaleString() ?? "0"}원
          </span>
        </Stack>
      </Stack>

      <Stack justify="end" dir="row">
        <Link
          className="underline order-item-detail-text text-grey-500"
          href={receiptUrl}
        >
          결제 영수증 보기
        </Link>
      </Stack>
    </Stack>
  );
}

export default OrderItemDetail;

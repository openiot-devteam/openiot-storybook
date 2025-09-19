import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import OrderItemDetail from "@/components/OrderItemDetail/OrderItemDetail";

const meta = {
  title: "Components/OrderItemDetail",
  component: OrderItemDetail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shopName: { control: "text" },
    startedAt: { control: "text" },
    endedAt: { control: "text" },
    totalUsageTime: { control: "text" },
    paymentKey: { control: "text" },
    paymentStatus: { control: "text" },
    customerName: { control: "text" },
    paymentMethod: { control: "text" },
    amount: { control: "number" },
    receiptUrl: { control: "text" },
    status: {
      control: "select",
      options: ["IN_USE", "COMPLETED"],
    },
  },
} satisfies Meta<typeof OrderItemDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리들
export const Default: Story = {
  args: {
    shopName: "오픈아이오티샵 강남점",
    startedAt: "2024.01.20 14:30",
    endedAt: "2024.01.20 16:45",
    totalUsageTime: "2시간 15분",
    paymentKey: "ORD-20240120-001",
    paymentStatus: "결제완료",
    customerName: "김오픈",
    paymentMethod: "카드결제",
    amount: 25000,
    receiptUrl: "/receipt/ORD-20240120-001",
    status: "COMPLETED",
  },
};

export const InUse: Story = {
  args: {
    shopName: "스마트플러그 센터",
    startedAt: "2024.01.22 09:15",
    endedAt: "-",
    totalUsageTime: "1시간 30분",
    paymentKey: "ORD-20240122-002",
    paymentStatus: "결제완료",
    customerName: "이스마트",
    paymentMethod: "카드결제",
    amount: 15000,
    receiptUrl: "/receipt/ORD-20240122-002",
    status: "IN_USE",
  },
};

export const HighAmount: Story = {
  args: {
    shopName: "프리미엄 충전소",
    startedAt: "2024.01.18 10:00",
    endedAt: "2024.01.18 18:30",
    totalUsageTime: "8시간 30분",
    paymentKey: "ORD-20240118-003",
    paymentStatus: "결제완료",
    customerName: "박프리미엄",
    paymentMethod: "계좌이체",
    amount: 150000,
    receiptUrl: "/receipt/ORD-20240118-003",
    status: "COMPLETED",
  },
};

export const LongUsageTime: Story = {
  args: {
    shopName: "24시간 충전소",
    startedAt: "2024.01.15 20:00",
    endedAt: "2024.01.16 08:00",
    totalUsageTime: "12시간",
    paymentKey: "ORD-20240115-004",
    paymentStatus: "결제완료",
    customerName: "최장시간",
    paymentMethod: "카드결제",
    receiptUrl: "/receipt/ORD-20240115-004",
    status: "COMPLETED",
  },
};

export const ShortUsageTime: Story = {
  args: {
    shopName: "퀵충전소",
    startedAt: "2024.01.25 15:00",
    endedAt: "2024.01.25 15:30",
    totalUsageTime: "30분",
    paymentKey: "ORD-20240125-005",
    paymentStatus: "결제완료",
    customerName: "정퀵",
    paymentMethod: "카드결제",
    amount: 5000,
    receiptUrl: "/receipt/ORD-20240125-005",
    status: "COMPLETED",
  },
};

export const DifferentPaymentMethods: Story = {
  args: {
    shopName: "다양한결제샵",
    startedAt: "2024.01.23 12:00",
    endedAt: "2024.01.23 14:00",
    totalUsageTime: "2시간",
    paymentKey: "ORD-20240123-006",
    paymentStatus: "결제완료",
    customerName: "다양한결제",
    paymentMethod: "간편결제",
    amount: 30000,
    receiptUrl: "/receipt/ORD-20240123-006",
    status: "COMPLETED",
  },
};

// 여러 주문 상세를 비교하는 스토리
export const StatusComparison: Story = {
  args: {
    shopName: "비교샵",
    startedAt: "2024.01.20 14:30",
    endedAt: "2024.01.20 16:45",
    totalUsageTime: "2시간 15분",
    paymentKey: "ORD-20240120-001",
    paymentStatus: "결제완료",
    customerName: "김비교",
    paymentMethod: "카드결제",
    amount: 25000,
    receiptUrl: "/receipt/ORD-20240120-001",
    status: "COMPLETED",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <OrderItemDetail
        shopName="이용중 샵"
        startedAt="2024.01.22 09:15"
        endedAt="-"
        totalUsageTime="1시간 30분"
        paymentKey="ORD-20240122-002"
        paymentStatus="결제완료"
        customerName="이용중고객"
        paymentMethod="카드결제"
        amount={15000}
        receiptUrl="/receipt/ORD-20240122-002"
        status="IN_USE"
      />
      <OrderItemDetail
        shopName="완료된 샵"
        startedAt="2024.01.20 14:30"
        endedAt="2024.01.20 16:45"
        totalUsageTime="2시간 15분"
        paymentKey="ORD-20240120-001"
        paymentStatus="결제완료"
        customerName="완료고객"
        paymentMethod="카드결제"
        amount={25000}
        receiptUrl="/receipt/ORD-20240120-001"
        status="COMPLETED"
      />
    </div>
  ),
};

// 다양한 결제 상태들
export const PaymentStatusVariations: Story = {
  args: {
    shopName: "결제상태샵",
    startedAt: "2024.01.20 14:30",
    endedAt: "2024.01.20 16:45",
    totalUsageTime: "2시간 15분",
    paymentKey: "ORD-20240120-001",
    paymentStatus: "결제완료",
    customerName: "결제고객",
    paymentMethod: "카드결제",
    amount: 25000,
    receiptUrl: "/receipt/ORD-20240120-001",
    status: "COMPLETED",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <OrderItemDetail
        shopName="결제완료샵"
        startedAt="2024.01.20 14:30"
        endedAt="2024.01.20 16:45"
        totalUsageTime="2시간 15분"
        paymentKey="ORD-20240120-001"
        paymentStatus="결제완료"
        customerName="완료고객"
        paymentMethod="카드결제"
        amount={25000}
        receiptUrl="/receipt/ORD-20240120-001"
        status="COMPLETED"
      />
      <OrderItemDetail
        shopName="결제대기샵"
        startedAt="2024.01.21 10:00"
        endedAt="2024.01.21 12:00"
        totalUsageTime="2시간"
        paymentKey="ORD-20240121-002"
        paymentStatus="결제대기"
        customerName="대기고객"
        paymentMethod="카드결제"
        amount={20000}
        receiptUrl="/receipt/ORD-20240121-002"
        status="IN_USE"
      />
      <OrderItemDetail
        shopName="결제실패샵"
        startedAt="2024.01.22 15:00"
        endedAt="2024.01.22 17:00"
        totalUsageTime="2시간"
        paymentKey="ORD-20240122-003"
        paymentStatus="결제실패"
        customerName="실패고객"
        paymentMethod="카드결제"
        amount={30000}
        receiptUrl="/receipt/ORD-20240122-003"
        status="IN_USE"
      />
    </div>
  ),
};

// 다양한 결제 수단들
export const PaymentMethodVariations: Story = {
  args: {
    shopName: "결제수단샵",
    startedAt: "2024.01.20 14:30",
    endedAt: "2024.01.20 16:45",
    totalUsageTime: "2시간 15분",
    paymentKey: "ORD-20240120-001",
    paymentStatus: "결제완료",
    customerName: "결제고객",
    paymentMethod: "카드결제",
    amount: 25000,
    receiptUrl: "/receipt/ORD-20240120-001",
    status: "COMPLETED",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <OrderItemDetail
        shopName="카드결제샵"
        startedAt="2024.01.20 14:30"
        endedAt="2024.01.20 16:45"
        totalUsageTime="2시간 15분"
        paymentKey="ORD-20240120-001"
        paymentStatus="결제완료"
        customerName="카드고객"
        paymentMethod="카드결제"
        amount={25000}
        receiptUrl="/receipt/ORD-20240120-001"
        status="COMPLETED"
      />
      <OrderItemDetail
        shopName="계좌이체샵"
        startedAt="2024.01.21 10:00"
        endedAt="2024.01.21 12:00"
        totalUsageTime="2시간"
        paymentKey="ORD-20240121-002"
        paymentStatus="결제완료"
        customerName="계좌고객"
        paymentMethod="계좌이체"
        amount={20000}
        receiptUrl="/receipt/ORD-20240121-002"
        status="COMPLETED"
      />
      <OrderItemDetail
        shopName="간편결제샵"
        startedAt="2024.01.22 15:00"
        endedAt="2024.01.22 17:00"
        totalUsageTime="2시간"
        paymentKey="ORD-20240122-003"
        paymentStatus="결제완료"
        customerName="간편고객"
        paymentMethod="간편결제"
        amount={30000}
        receiptUrl="/receipt/ORD-20240122-003"
        status="COMPLETED"
      />
    </div>
  ),
};

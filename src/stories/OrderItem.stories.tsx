import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import OrderItem from "@/components/OrderItem/OrderItem";

const meta = {
  title: "Components/OrderItem",
  component: OrderItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    price: { control: "number" },
    totalUsageTime: { control: "text" },
    shopName: { control: "text" },
    purchaseDate: { control: "text" },
    href: { control: "text" },
  },
} satisfies Meta<typeof OrderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리들
export const Default: Story = {
  args: {
    name: "스마트 플러그",
    price: 25000,
    totalUsageTime: "2시간 30분",
    shopName: "오픈아이오티샵",
    purchaseDate: "2024.01.15",
    href: "/order/1",
  },
};

export const HighPrice: Story = {
  args: {
    name: "프리미엄 스마트 디바이스",
    price: 150000,
    totalUsageTime: "5시간 15분",
    shopName: "프리미엄샵",
    purchaseDate: "2024.01.20",
    href: "/order/2",
  },
};

export const LongUsageTime: Story = {
  args: {
    name: "스마트 센서",
    price: 45000,
    totalUsageTime: "12시간 45분",
    shopName: "센서월드",
    purchaseDate: "2024.01.18",
    href: "/order/3",
  },
};

export const ShortName: Story = {
  args: {
    name: "센서",
    price: 15000,
    totalUsageTime: "1시간",
    shopName: "간단샵",
    purchaseDate: "2024.01.22",
    href: "/order/4",
  },
};

export const LongName: Story = {
  args: {
    name: "고급 스마트 홈 자동화 디바이스 프로",
    price: 200000,
    totalUsageTime: "8시간 20분",
    shopName: "고급 스마트홈 전문점",
    purchaseDate: "2024.01.25",
    href: "/order/5",
  },
};

// 여러 주문 아이템을 리스트로 보여주는 스토리
export const OrderList: Story = {
  args: {
    name: "스마트 플러그",
    price: 25000,
    totalUsageTime: "2시간 30분",
    shopName: "오픈아이오티샵",
    purchaseDate: "2024.01.15",
    href: "/order/1",
  },
  render: () => (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      <OrderItem
        name="스마트 플러그"
        price={25000}
        totalUsageTime="2시간 30분"
        shopName="오픈아이오티샵"
        purchaseDate="2024.01.15"
        href="/order/1"
      />
      <OrderItem
        name="프리미엄 스마트 디바이스"
        price={150000}
        totalUsageTime="5시간 15분"
        shopName="프리미엄샵"
        purchaseDate="2024.01.20"
        href="/order/2"
      />
      <OrderItem
        name="스마트 센서"
        price={45000}
        totalUsageTime="12시간 45분"
        shopName="센서월드"
        purchaseDate="2024.01.18"
        href="/order/3"
      />
    </ul>
  ),
};

// 다양한 가격대의 주문 아이템들
export const PriceVariations: Story = {
  args: {
    name: "스마트 플러그",
    price: 25000,
    totalUsageTime: "2시간 30분",
    shopName: "오픈아이오티샵",
    purchaseDate: "2024.01.15",
    href: "/order/1",
  },
  render: () => (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      <OrderItem
        name="저가형 센서"
        price={5000}
        totalUsageTime="30분"
        shopName="저가샵"
        purchaseDate="2024.01.10"
        href="/order/cheap"
      />
      <OrderItem
        name="중간가격 디바이스"
        price={50000}
        totalUsageTime="3시간"
        shopName="중간샵"
        purchaseDate="2024.01.12"
        href="/order/mid"
      />
      <OrderItem
        name="고가형 프리미엄"
        price={500000}
        totalUsageTime="24시간"
        shopName="고급샵"
        purchaseDate="2024.01.14"
        href="/order/expensive"
      />
    </ul>
  ),
};

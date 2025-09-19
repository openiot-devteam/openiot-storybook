import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ControlCard from "@/components/ControlCard/ControlCard";
import PlugControlCard from "@/components/ControlCard/PlugControlCard";

// 기본 아이콘 컴포넌트
const PlugIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clip-path="url(#clip0_469_2208)">
      <g clip-path="url(#clip1_469_2208)">
        <rect x="1" y="1" width="22" height="22" rx="3" fill="#00C7C7" />
        <path
          d="M12.9354 3.75131V5.29655C12.9354 5.81316 12.5173 6.23292 12.0007 6.23292C11.4841 6.23292 11.0644 5.81316 11.0644 5.29655V3.75131C6.92073 4.21636 3.69821 7.73128 3.69821 11.9992C3.69821 16.2685 6.92068 19.7835 11.0644 20.2471V18.7064C11.0644 18.1897 11.484 17.7717 12.0007 17.7717C12.5173 17.7717 12.9354 18.1897 12.9354 18.7064V20.2471C17.0806 19.7835 20.3017 16.2685 20.3017 11.9992C20.3017 7.73133 17.0806 4.21636 12.9354 3.75131ZM7.5767 13.3916C6.80706 13.3916 6.18442 12.7689 6.18442 11.9992C6.18442 11.231 6.80706 10.6085 7.5767 10.6085C8.34488 10.6085 8.96757 11.2311 8.96757 11.9992C8.96757 12.7688 8.34484 13.3916 7.5767 13.3916ZM16.4686 13.3916C15.7005 13.3916 15.0762 12.7689 15.0762 11.9992C15.0762 11.231 15.7005 10.6085 16.4686 10.6085C17.2368 10.6085 17.8594 11.231 17.8594 11.9992C17.8594 12.7688 17.2368 13.3916 16.4686 13.3916Z"
          fill="#F4F6F8"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_469_2208">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_469_2208">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const meta = {
  title: "Components/ControlCard",
  component: ControlCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    status: {
      control: "select",
      options: ["ACTIVE", "INACTIVE", "READY"],
    },
    href: { control: "text" },
  },
} satisfies Meta<typeof ControlCard>;

const plugMeta = {
  title: "Components/PlugControlCard",
  component: PlugControlCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    status: {
      control: "select",
      options: ["ACTIVE", "INACTIVE", "READY"],
    },
    href: { control: "text" },
  },
} satisfies Meta<typeof PlugControlCard>;

export default meta;
type Story = StoryObj<typeof meta>;
type PlugStory = StoryObj<typeof plugMeta>;

// 기본 스토리들
export const Active: Story = {
  args: {
    name: "스마트 플러그",
    status: "ACTIVE",
    icon: <PlugIcon className="control-card-icon-active" />,
    href: "/control/plug",
  },
};

export const Inactive: Story = {
  args: {
    name: "스마트 플러그",
    status: "INACTIVE",
    icon: <PlugIcon className="control-card-icon-inactive" />,
    href: "/control/plug",
  },
};

export const Ready: Story = {
  args: {
    name: "스마트 플러그",
    status: "READY",
    icon: <PlugIcon className="control-card-icon-ready" />,
    href: "/control/plug",
  },
};

// 커스텀 상태 텍스트
export const CustomStatusText: Story = {
  args: {
    name: "커스텀 디바이스",
    status: "ACTIVE",
    icon: <PlugIcon className="control-card-icon-active" />,
    href: "/control/custom",
    statusText: {
      ACTIVE: "작동중",
      INACTIVE: "중지됨",
      READY: "대기중",
    },
  },
};

// 모든 상태를 한 번에 보여주는 스토리
export const AllStates: Story = {
  args: {
    name: "활성 디바이스",
    status: "ACTIVE",
    icon: <PlugIcon className="control-card-icon-active" />,
    href: "/control/active",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ControlCard
        name="활성 디바이스"
        status="ACTIVE"
        icon={<PlugIcon className="control-card-icon-active" />}
        href="/control/active"
      />
      <ControlCard
        name="비활성 디바이스"
        status="INACTIVE"
        icon={<PlugIcon className="control-card-icon-inactive" />}
        href="/control/inactive"
      />
      <ControlCard
        name="준비된 디바이스"
        status="READY"
        icon={<PlugIcon className="control-card-icon-ready" />}
        href="/control/ready"
      />
    </div>
  ),
};

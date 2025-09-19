import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import UsageStatusBadge from "@/components/Badge/UsageStatusBadge/UsageStatusBadge";

const meta = {
  title: "Components/UsageStatusBadge",
  component: UsageStatusBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["IN_USE", "COMPLETED"],
    },
    texts: { control: "object" },
  },
} satisfies Meta<typeof UsageStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리들
export const InUse: Story = {
  args: {
    status: "IN_USE",
  },
};

export const Completed: Story = {
  args: {
    status: "COMPLETED",
  },
};

// 커스텀 텍스트
export const CustomTexts: Story = {
  args: {
    status: "IN_USE",
    texts: {
      IN_USE: "사용중",
      COMPLETED: "완료됨",
    },
  },
};

// 모든 상태를 한 번에 보여주는 스토리
export const AllStates: Story = {
  args: {
    status: "IN_USE",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <UsageStatusBadge status="IN_USE" />
      <UsageStatusBadge status="COMPLETED" />
    </div>
  ),
};

// 커스텀 텍스트와 함께 모든 상태
export const AllStatesWithCustomTexts: Story = {
  args: {
    status: "IN_USE",
    texts: {
      IN_USE: "활성",
      COMPLETED: "종료",
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <UsageStatusBadge
        status="IN_USE"
        texts={{
          IN_USE: "활성",
          COMPLETED: "종료",
        }}
      />
      <UsageStatusBadge
        status="COMPLETED"
        texts={{
          IN_USE: "활성",
          COMPLETED: "종료",
        }}
      />
    </div>
  ),
};

// 가로로 나열된 상태들
export const HorizontalStates: Story = {
  args: {
    status: "IN_USE",
  },
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <UsageStatusBadge status="IN_USE" />
      <UsageStatusBadge status="COMPLETED" />
    </div>
  ),
};

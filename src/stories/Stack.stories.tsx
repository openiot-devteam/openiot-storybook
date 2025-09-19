import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Stack from "@/components/Stack/Stack";

const meta = {
  title: "Components/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    dir: {
      control: "select",
      options: ["row", "column"],
    },
    gap: { control: "number" },
    justify: {
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly"],
    },
    items: {
      control: "select",
      options: ["start", "end", "center", "stretch", "baseline"],
    },
    className: { control: "text" },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 아이템들
const SampleItem = ({
  children,
  color = "bg-blue-500",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div className={`${color} text-white p-4 rounded text-center min-w-[60px]`}>
    {children}
  </div>
);

// 기본 스토리들
export const Column: Story = {
  args: {
    dir: "column",
    gap: 8,
    children: (
      <>
        <SampleItem>Item 1</SampleItem>
        <SampleItem>Item 2</SampleItem>
        <SampleItem>Item 3</SampleItem>
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    dir: "row",
    gap: 8,
    children: (
      <>
        <SampleItem>Item 1</SampleItem>
        <SampleItem>Item 2</SampleItem>
        <SampleItem>Item 3</SampleItem>
      </>
    ),
  },
};

// Justify 속성들
export const JustifyStart: Story = {
  args: {
    dir: "row",
    gap: 8,
    justify: "start",
    children: (
      <>
        <SampleItem>Start</SampleItem>
        <SampleItem>Middle</SampleItem>
        <SampleItem>End</SampleItem>
      </>
    ),
  },
};

export const JustifyEnd: Story = {
  args: {
    dir: "row",
    gap: 8,
    justify: "end",
    children: (
      <>
        <SampleItem>Start</SampleItem>
        <SampleItem>Middle</SampleItem>
        <SampleItem>End</SampleItem>
      </>
    ),
  },
};

export const JustifyCenter: Story = {
  args: {
    dir: "row",
    gap: 8,
    justify: "center",
    children: (
      <>
        <SampleItem>Start</SampleItem>
        <SampleItem>Middle</SampleItem>
        <SampleItem>End</SampleItem>
      </>
    ),
  },
};

export const JustifyBetween: Story = {
  args: {
    dir: "row",
    gap: 8,
    justify: "between",
    children: (
      <>
        <SampleItem>Start</SampleItem>
        <SampleItem>Middle</SampleItem>
        <SampleItem>End</SampleItem>
      </>
    ),
  },
};

export const JustifyAround: Story = {
  args: {
    dir: "row",
    gap: 8,
    justify: "around",
    children: (
      <>
        <SampleItem>Start</SampleItem>
        <SampleItem>Middle</SampleItem>
        <SampleItem>End</SampleItem>
      </>
    ),
  },
};

export const JustifyEvenly: Story = {
  args: {
    dir: "row",
    gap: 8,
    justify: "evenly",
    children: (
      <>
        <SampleItem>Start</SampleItem>
        <SampleItem>Middle</SampleItem>
        <SampleItem>End</SampleItem>
      </>
    ),
  },
};

// Items 속성들
export const ItemsStart: Story = {
  args: {
    dir: "row",
    gap: 8,
    items: "start",
    children: (
      <>
        <SampleItem>Short</SampleItem>
        <SampleItem>
          Very Long
          <br />
          Content
          <br />
          Here
        </SampleItem>
        <SampleItem>Medium</SampleItem>
      </>
    ),
  },
};

export const ItemsEnd: Story = {
  args: {
    dir: "row",
    gap: 8,
    items: "end",
    children: (
      <>
        <SampleItem>Short</SampleItem>
        <SampleItem>
          Very Long
          <br />
          Content
          <br />
          Here
        </SampleItem>
        <SampleItem>Medium</SampleItem>
      </>
    ),
  },
};

export const ItemsCenter: Story = {
  args: {
    dir: "row",
    gap: 8,
    items: "center",
    children: (
      <>
        <SampleItem>Short</SampleItem>
        <SampleItem>
          Very Long
          <br />
          Content
          <br />
          Here
        </SampleItem>
        <SampleItem>Medium</SampleItem>
      </>
    ),
  },
};

export const ItemsStretch: Story = {
  args: {
    dir: "row",
    gap: 8,
    items: "stretch",
    children: (
      <>
        <SampleItem>Short</SampleItem>
        <SampleItem>
          Very Long
          <br />
          Content
          <br />
          Here
        </SampleItem>
        <SampleItem>Medium</SampleItem>
      </>
    ),
  },
};

// Gap 변화
export const GapVariations: Story = {
  args: {
    dir: "row",
    gap: 4,
    children: (
      <>
        <SampleItem>Gap 4</SampleItem>
        <SampleItem>Gap 4</SampleItem>
        <SampleItem>Gap 4</SampleItem>
      </>
    ),
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h3 className="text-sm font-medium mb-2">Gap 4</h3>
        <Stack dir="row" gap={4}>
          <SampleItem>Item 1</SampleItem>
          <SampleItem>Item 2</SampleItem>
          <SampleItem>Item 3</SampleItem>
        </Stack>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Gap 8</h3>
        <Stack dir="row" gap={8}>
          <SampleItem>Item 1</SampleItem>
          <SampleItem>Item 2</SampleItem>
          <SampleItem>Item 3</SampleItem>
        </Stack>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Gap 16</h3>
        <Stack dir="row" gap={16}>
          <SampleItem>Item 1</SampleItem>
          <SampleItem>Item 2</SampleItem>
          <SampleItem>Item 3</SampleItem>
        </Stack>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Gap 32</h3>
        <Stack dir="row" gap={32}>
          <SampleItem>Item 1</SampleItem>
          <SampleItem>Item 2</SampleItem>
          <SampleItem>Item 3</SampleItem>
        </Stack>
      </div>
    </div>
  ),
};

// 복합 예제들
export const ComplexLayout: Story = {
  args: {
    dir: "column",
    gap: 16,
    children: (
      <>
        <Stack dir="row" gap={8} justify="between" items="center">
          <SampleItem color="bg-green-500">Left</SampleItem>
          <SampleItem color="bg-yellow-500">Center</SampleItem>
          <SampleItem color="bg-red-500">Right</SampleItem>
        </Stack>
        <Stack dir="row" gap={12} justify="center">
          <SampleItem color="bg-purple-500">Item 1</SampleItem>
          <SampleItem color="bg-pink-500">Item 2</SampleItem>
        </Stack>
        <Stack dir="column" gap={4} items="stretch">
          <SampleItem color="bg-indigo-500">Stretched 1</SampleItem>
          <SampleItem color="bg-teal-500">Stretched 2</SampleItem>
        </Stack>
      </>
    ),
  },
};

// 실제 사용 예제
export const RealWorldExample: Story = {
  args: {
    dir: "row",
    gap: 12,
    justify: "between",
    items: "center",
    children: (
      <>
        <Stack dir="column" gap={4}>
          <div className="text-sm font-medium">제품명</div>
          <div className="text-xs text-gray-500">상세 정보</div>
        </Stack>
        <Stack dir="row" gap={8} items="center">
          <div className="text-lg font-bold">25,000원</div>
          <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">
            활성
          </div>
        </Stack>
      </>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import SmartThingsOAuth from "@/components/SmartThingsOAuth/SmartThingsOAuth";
import useSmartThingsOAuth from "@/components/SmartThingsOAuth/useSmartThingsOAuth";
import { useArgs } from "storybook/internal/preview-api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SmartThingsOAuth",
  component: SmartThingsOAuth,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // @ts-ignore
    state: { control: "text" },
    clientId: { control: "text" },
    redirectUri: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onCancel: fn(),
    onConfirm: fn(),
    // @ts-ignore
    state: "123",
    clientId: "123",
    redirectUri: "123",
  },
} satisfies Meta<typeof SmartThingsOAuth>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // @ts-ignore
    state: "enter your state",
    clientId: "enter your client id",
    redirectUri: "enter your redirect uri",
  },

  render: (args) => {
    const [{ state, clientId, redirectUri }, updateArgs] = useArgs();

    const onCancel = () => alert("연동 취소");
    const { redirect } = useSmartThingsOAuth();
    return (
      <div style={{ height: "500px", width: "500px", overflow: "auto" }}>
        {/* 테스트를 위한 파라미터 입력 필드. 컴포넌트 사용시는 SmartThingsOAuth 컴포넌트만 필요합니다 */}
        <input
          type="text"
          hidden
          value={state}
          onChange={(e) => updateArgs({ state: e.target.value })}
        />
        <input
          type="text"
          hidden
          value={clientId}
          onChange={(e) => updateArgs({ clientId: e.target.value })}
        />
        <input
          type="text"
          hidden
          value={redirectUri}
          onChange={(e) => updateArgs({ redirectUri: e.target.value })}
        />

        {/* 이 컴포넌트와 훅만 사용하세요! */}
        <SmartThingsOAuth
          onCancel={onCancel}
          onConfirm={() =>
            redirect({
              state,
              clientId,
              redirectUri,
            })
          }
        />
      </div>
    );
  },
};

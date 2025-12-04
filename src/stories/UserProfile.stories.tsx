import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import UserProfile from "@/components/UserProfile/UserProfile";
import derpy from "@/stories/assets/derpy.webp";

const meta = {
  title: "Components/UserProfile",
  component: UserProfile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    nickname: { control: "text" },
    profileImg: { control: "text" },
    email: { control: "text" },
  },
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

// 프로필 이미지가 있는 사용자
export const WithProfileImage: Story = {
  args: {
    nickname: "이오티",
    profileImg: derpy.src,
    email: "lee@example.com",
  },
};

// 긴 닉네임과 이메일
export const LongText: Story = {
  args: {
    nickname: "매우긴닉네임을가진사용자입니다",
    profileImg: derpy.src,
    email: "verylongemailaddress@verylongdomainname.com",
  },
};

// 프로필 이미지가 없는 경우 (기본 아바타)
export const NoProfileImage: Story = {
  args: {
    nickname: "정수진",
    profileImg: derpy.src,
    email: "jung@example.com",
  },
};

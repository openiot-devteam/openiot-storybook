import AdminDayPicker from "@/components/AdminDayPicker/AdminDayPicker";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
    title: "Example/AdminDayPicker",
    component: AdminDayPicker,
} satisfies Meta<typeof AdminDayPicker>;

export default meta;
type Story = StoryObj<typeof AdminDayPicker>;

export const Default: Story = {
    render: () => <AdminDayPicker />,
}
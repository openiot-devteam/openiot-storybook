import { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdminTable from "@/components/AdminTable/AdminTable";
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Car = {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
};

export const defaultData: Car[] = [
  {
    id: "CN7",
    name: "아반떼",
    brand: "현대",
    type: "세단",
    price: 20000000,
  },
  {
    id: "DN8",
    name: "쏘나타 디 엣지",
    brand: "현대",
    type: "세단",
    price: 28000000,
  },
  {
    id: "GN7",
    name: "디 올 뉴 그랜저",
    brand: "현대",
    type: "세단",
    price: 35000000,
  },
];

const columnHelper = createColumnHelper<Car>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: "모델",
    size: 140,
  }),
  columnHelper.accessor((row) => row.name, {
    id: "name",
    cell: (info) => info.getValue(),
    header: () => "차종",
    size: 286,
  }),
  columnHelper.accessor("brand", {
    header: () => "브랜드",
    cell: (info) => info.renderValue(),
    size: 286,
  }),
  columnHelper.accessor("type", {
    header: () => "타입",
    size: 286,
  }),
  columnHelper.accessor("price", {
    header: () => "가격",
    cell: (info) => `${info.getValue().toLocaleString()} ~`,
    size: 286,
  }),
];

const meta = {
  title: "Example/AdminTable",
  component: AdminTable,
} satisfies Meta<typeof AdminTable>;

export default meta;
type Story = StoryObj<typeof AdminTable<Car>>;

export const Default: Story = {
  render: () => {
    const table = useReactTable<Car>({
      data: defaultData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      rowCount: 10,
    });

    return <AdminTable table={table} />;
  },
};

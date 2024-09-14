import { Article } from "@/types/article"
import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

interface Props {
  can: {
    edit: boolean
  }
}

export const getArticleColumns = (props: Props) => {
  
  const { can } = props
  const articleColumns: ColumnDef<Article>[] = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "title",
      header: "Titre",
    },
    {
      accessorKey: "created_at",
      header: "Publié le",
    },
    {
      id: "actions",
      cell: ({ row }) => <CellAction data={row.original} can={can} />,
  },
  ]

  return articleColumns
}


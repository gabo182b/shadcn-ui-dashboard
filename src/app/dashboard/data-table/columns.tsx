'use client'
import { Badge } from '@/components/ui/badge'
import { Payment } from '@/data/payments.data'
import { ColumnDef, FilterFn, Row, SortDirection } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { MoreHorizontal, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'

const myCustomFilterFn: FilterFn<Payment> = (
  row: Row<Payment>,
  columnId: string,
  filterValue: string,
  addMeta: (meta: any) => void
) => {
  filterValue = filterValue.toLocaleLowerCase()
  const filterWords = filterValue.split(' ')
  const rowValues = `${row.original.email} ${row.original.clientName} ${row.original.status}`.toLocaleLowerCase()
  return filterWords.every((word) => rowValues.includes(word))
  // if (row.original.email.includes(filterValue)) {
  //   return true
  // }
  // if (row.original.clientName.includes(filterValue)) {
  //   return true
  // }
  // if (row.original.status.includes(filterValue)) {
  //   return true
  // }
  // return false
}

const SortedIcon = ({ isSorted }: {isSorted: false | SortDirection}) => {
  if (isSorted === 'asc') {
    return <ArrowUp className='h-4 w-4 mx-2'/>
  }
  if (isSorted === 'desc') {
    return <ArrowUp className='h-4 w-4 mx-2 transform rotate-180'/>
  }
  return null
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'clientName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Client name
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
    cell: ({ row }) => (<p>{row.getValue('clientName')}</p>)
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Amount
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status: string = row.getValue('status')
      const variant = {
        pending: 'secondary',
        processing: 'info',
        success: 'success',
        failed: 'destructive'
      }[status] ?? ('default') as any
      return <Badge
        capitalize
        variant={variant}
      >
        {status}
      </Badge>
    }
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Amount
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)
      return <p>{formatted}</p>
    }
  },
  {
    accessorKey: 'email',
    filterFn: myCustomFilterFn,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id)
                toast.success('Payment ID copied to the clipboard', {
                  duration: 5000,
                  position: 'top-right'
                })
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => console.log(payment.clientName)}
            >
              View customer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }

]

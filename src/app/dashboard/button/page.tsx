'use client'
import { Button } from '@/components/ui/button'
import { ChevronRight, Loader2, Mail } from 'lucide-react'

export default function Page () {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>defaul</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button disabled>Disabbled</Button>
      <Button onClick={(() => console.log('Button clicked'))}>click me</Button>
      <Button variant={'success'}>success</Button>
      {/* You can add custom properties, in this case we added capitalize which by default is set to true */}
      <Button capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> button with icon
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    </div>
  )
}

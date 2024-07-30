import { Badge } from '@/components/ui/badge'

export default function Page () {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <Badge capitalize>default</Badge>
      <Badge variant={'destructive'}>Badge</Badge>
      <Badge variant={'secondary'}>Secondary</Badge>
      <Badge variant={'outline'}>outline</Badge>
      <Badge capitalize variant={'info'}>info</Badge>
      <Badge capitalize variant={'success'}>success</Badge>
    </div>
  )
}

'use client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function Page () {
  const getDate = new Date()
  const currentDate = getDate.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
  return (
    <div className='grid grid-cols-4 gap-4'>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            duration: 5000,
            position: 'top-right',
            description: currentDate,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo')
            }
          })
        }
      >
      Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Event has been created', {
            className: 'bg-green-500 text-white',
            duration: 5000,
            position: 'top-right',
            description: currentDate,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo')
            }
          })
        }
      >
      Show custom colors
      </Button>
    </div>
  )
}

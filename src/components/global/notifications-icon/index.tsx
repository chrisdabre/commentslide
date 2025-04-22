import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { Activity, Bell } from 'lucide-react'

type Props = {}

const Notifications = (props: Props) => {
  return (
      <Button className='py-6 hover:opacity-80 text-white rounded-xl bg-gradient-to-br
             from-[#CC3804]
             font-medium
             to-[#D064AC]'>
                <Bell />
      </Button>
  )
}

export default Notifications
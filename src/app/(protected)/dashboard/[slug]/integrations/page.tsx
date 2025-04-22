import { INTEGRATION_CARDS } from '@/constants/integrations'
import React from 'react'
import IntegrationCard from './_components/integration-card/page'

type Props = {}

const Integrations = (props: Props) => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col w-full lg:w-6/12 gap-y-5'>
            {INTEGRATION_CARDS.map((card, key) => {
                return <IntegrationCard key={key} {...card} />
            })}
        </div>
    </div>
  )
}

export default Integrations
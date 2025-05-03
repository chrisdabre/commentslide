import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

const PLANS = [
  {
    name: 'Standard',
    label: 'FREE',
    price: 'Free',
    features: [
      'Boost engagement with target responses',
      'Automate comment replies to enhance audience interaction',
      'Turn followers into customers with targeted messaging'
    ]
  },
  {
    name: 'Smart AI Plan',
    label: 'PRO',
    price: '$99/month',
    features: [
      'All features from Free Plan',
      'AI-powered response generation',
      'Advanced analytics and insights',
      'Priority customer support',
      'Custom branding options'
    ]
  }
]

type Props = {
    label: string,
    current: 'PRO' | 'FREE'
    landing?: boolean
}

const PaymentCard = ( { label, current, landing }: Props) => {
  return (
    <div className={cn(
        label !== current ?
        '' :
        'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
        'p-[2px] rounded-xl '
    )}>
        <div className={cn(
            landing && 'radial--gradient--pink',
            'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-BB'
        )}>
            {
                landing ? (
                    <h2 className='text-2xl'>
                        {label === 'PRO' && 'Premium Plan'}
                        {label === 'FREE' && 'Standard'}
                    </h2>
                ) : (
                    <h2>
                        {
                        label === current ?
                        "Your Current Plan" :
                        current === 'PRO' ?
                        'Downgrade' : 
                        'Upgrade'
                    }
                    </h2>
                )
            }
            <p className='text-text-secondary text-sm mt-2 mb-2'>
                This is what your plan covers
            </p>
            {
                label === 'PRO' ? (
                    <span className='bg-gradient-to-r text-3xl from-indigo-500 via-purple-500 font-bold to-pink-500 bg-clip-text text-transparent'>
                        Smart AI
                    </span>
                ) : (
                    <p className='font-bold text-text-secondary mt-2'>Standard</p>
                )
            } {
                label === 'PRO' ? (
                    <p className='mb-2'>
                        <b className='text-xl'>$99</b>/month
                    </p>
                ) : (
                    <p className='text-xl mt-2'>Free</p>
                )
            }

            {PLANS[label === 'PRO' ? 1 : 0].features.map((i) => (
                <p key={i} className='mt-3 text-muted-foreground flex gap-2'>
                    <CircleCheck />
                    {i}
                </p>
            ))}
            {
                landing ? (
                    <Button className={cn(
                        'rounded-xl mt-5',
                        label === 'PRO' ?
                        'bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500' :
                        'bg-background-80 text-white hover:text-background-80'
                    )}>
                        {
                        label === current ?
                        'Get Started' :
                        current === "PRO" ?
                        'Free' :
                        'Get Started'
                        }
                    </Button>
                ) : (
                    <Button className='rounded-full mt-5 bg-background-DB text-white hover:text-background-BB' disabled={label === current}>
                        {
                            label === current ?
                            'Active' :
                            current === 'PRO' ?
                            'Downgrade' :
                            'Upgrade'
                        }
                    </Button>
                )
            }
        </div>
    </div>
  )
}

export default PaymentCard




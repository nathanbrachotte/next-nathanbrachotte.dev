'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Zoom from 'react-medium-image-zoom'
import './zoomedImage.css'

// TODO: Create a script that read height and width of an image and outputs the corrected width & height for the blog
export function ZoomedImage(props) {
  const { wrapperClassName, className, ...restProps } = props

  return (
    <Zoom>
      <div className={wrapperClassName}>
        <Image
          alt={restProps.alt}
          {...restProps}
          className={twMerge('rounded-lg', className)}
        />
      </div>
    </Zoom>
  )
}

import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import type { StaticImageData } from 'next/image'

import RichText from '@/components/RichText'
import { cn } from '@/lib/utils'
import React from 'react'

import { Media } from '../../components/Media'

type Props = {
  breakout?: boolean
  captionClassName?: string
  className?: string
  disableInnerContainer?: boolean
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
} & MediaBlockProps

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    disableInnerContainer,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
  } = props

  let caption
  if (media && typeof media === 'object') {
    caption = media.caption
  }

  return (
    <div
      className={cn(
        '',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}

import type { CardPostData } from '@/components/Card'

import { Card } from '@/components/Card'
import { cn } from '@/lib/utils'
import React from 'react'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className="mx-12">
      <div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 lg:gap-16 px-6 gap-6">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card className="h-full" doc={result} relationTo="posts" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}

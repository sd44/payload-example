import { Card, CardContent } from '@/components/ui/card'
import { CarouselPlugin } from '@/components/myui/dot-carousel'

import Image from 'next/image'
import Link from 'next/link'
import { getDocsWithHero } from '@/utilities/getPosts'
import type { Media } from '@/payload-types'

export async function ArtsCarousel() {
  // Example slides with titles
  const posts = await getDocsWithHero()

  const slides = posts.map((post) => ({
    content: (
      <div className="p-2">
        <Card>
          <CardContent className="flex aspect-video items-center justify-center p-6">
            <Link href={`/posts/${post.slug}`}>
              <Image
                src={(post.heroImage as Media).url!}
                alt={(post.heroImage as Media)?.alt ?? ''}
                className="rounded-lg"
                fill
              />
            </Link>
          </CardContent>
        </Card>
      </div>
    ),
    title: post.title,
  }))

  return (
    <div className="flex w-full m-auto items-center justify-center p-6">
      <CarouselPlugin slides={slides} autoplayDelay={3000} loop={true} />
    </div>
  )
}

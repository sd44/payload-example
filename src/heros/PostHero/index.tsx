import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import React from 'react'
import { formatDateTime } from 'src/utilities/formatDateTime'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors = populatedAuthors?.some(
    (author) => author?.name?.trim() && author?.name !== 'undefined',
  )

  return (
    <section className="bg-background py-6 md:py-4 lg:py-8">
      {heroImage && typeof heroImage !== 'string' && (
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-60vdw max-w-3xl pb-8">
          {/* This inner div is for styling: aspect ratio, rounded corners, shadow */}
          <div className="aspect-video overflow-hidden rounded-xl shadow-2xl transition-all duration-300 ease-in-out hover:shadow-3xl">
            <Media imgClassName="object-cover w-full " resource={heroImage} priority />
          </div>
        </div>
      )}
      {/* 文字信息区块 */}
      <div className="max-w-3xl mx-auto px-4 py-4 lg:py-8">
        {/* 标题 */}
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-foreground">{title}</h1>

        {/* 元信息容器 */}
        <div className="flex flex-cols justify-center items-center gap-6 text-base lg:text-lg text-muted-foreground">
          {/* 作者信息 */}
          {hasAuthors && (
            <div className="flex items-center gap-2">
              <UserIcon className="h-5 w-5" />
              <div className="flex gap-1.5">
                {populatedAuthors?.map((author, index) => (
                  <span key={index}>
                    {author?.name}
                    {index < populatedAuthors.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 发布时间 */}
          {publishedAt && (
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

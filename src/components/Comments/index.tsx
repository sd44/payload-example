import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Comment } from '@/payload-types'
import CommentForm from './CommentForm'

type Props = {
  postId: number | string
  className?: string
}

export const Comments: React.FC<Props> = async ({ postId, className }) => {
  const payload = await getPayload({ config: configPromise })
  const { docs: comments } = await payload.find({
    collection: 'comments',
    where: {
      post: {
        equals: postId,
      },
      isApproved: {
        equals: true,
      },
    },
    sort: '-createdAt',
    depth: 0,
  })

  return (
    <div className={`py-8 ${className || ''}`}>
      <h2 className="text-2xl font-bold mb-4">留言板</h2>

      {/* Display existing comments */}
      <div className="space-y-4 mb-8">
        {(comments as Comment[]).map((comment) => (
          <div key={comment.id} className="p-4 space-y-4 m-auto border rounded">
            <div className="font-medium text-base flex flex-row justify-between">
              <div>{'昵称：' + comment.author?.name}</div>
              <div>{new Date(comment.createdAt).toLocaleDateString()}</div>
            </div>
            <div>{comment.content}</div>
          </div>
        ))}
        {/* comments.length === 0 && (
*  <p className="text-gray-500">请提交第一个留言吧</p>
        ) */}
      </div>

      {/* Comment form */}
      <CommentForm postId={postId} />
    </div>
  )
}

'use server'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
// import type { Media } from '@/payload-types'

export const getDocsWithHero = async () => {
  const payload = await getPayload({ config: configPromise })

  const fetchedPosts = await payload.find({
    collection: 'posts',
    select: {
      title: true,
      slug: true,
      heroImage: true,
    },
    depth: 1,
    limit: 5,
    where: {
      heroImage: {
        exists: true,
      },
      _status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
  })
  return fetchedPosts.docs
}

export const getDocs = async () => {
  const payload = await getPayload({ config: configPromise })

  const fetchedPosts = await payload.find({
    collection: 'posts',
    select: {
      title: true,
      slug: true,
      publishedAt: true,
    },
    limit: 8,
    where: {
      _status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
  })
  return fetchedPosts.docs
}

// export default async function TestPage() {
//   const posts = await getDocsWithHero()

//   return (
//     <div>
//       {posts?.map((post, index) => (
//         <div key={index}>
//           <h2>{post?.title}</h2>
//           {post.heroImage && (
//             <img
//               src={(post.heroImage as Media).url ?? undefined}
//               alt={(post.heroImage as Media)?.alt ?? ''}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

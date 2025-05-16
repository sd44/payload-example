export const PAYLOAD_GRAPHQL_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL
  ? `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/graphql`
  : 'http://localhost:3000/api/graphql'
import { Graffle } from 'graffle'

const graffle = Graffle.create().transport({
  url: PAYLOAD_GRAPHQL_URL,
})

export const getDocsWithHeroQL = async () => {
  const response = await graffle.gql`
  query GetLimitedPosts {
    Posts(
      sort: "-publishedAt"
      limit: 5
      where: { heroImage: { exists: true }, _status: { equals: published } }
    ) {
      docs {
        title
        slug
        heroImage {
          url
        }
      }
    }
  }
`.send()
  return response
}

// Uncomment the following code to use the query in a component file
/* 'use client'
 * import { useQuery } from '@tanstack/react-query'
 * import { getDocsWithHero } from '@/graphql/queryGql'
 *
 * export default () => {
 *   const { data } = useQuery({
 *     queryKey: ['docsWithHero'],
 *     queryFn: getDocsWithHero,
 *   })
 *   return <p>{JSON.stringify(data?.Posts?.docs)}</p>
 * } */

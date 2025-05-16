import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

import { ArtsCarousel } from './arts-carousel'
import { getDocs } from '@/utilities/getPosts'

type MyArticle = {
  date: string
  title: string
  url: string
  openInTab?: boolean
}

async function Articles({ data }: { data: MyArticle[] }) {
  return (
    <ul className="list-outside list-disc space-y-2 divide-y divide-gray-100 pl-2 lg:pl-5 pr-6 lg:pr-18 m-auto">
      {/* 可以加一些左内边距 pl-5 给标记留空间，如果 list-inside 不够的话 */}
      {data.map((item, index) => (
        <li className="py-2 pl-2 lg:pl-4" key={index}>
          <div className="flex flex-row flex-wrap justify-between items-baseline gap-x-2 lg:gap-x-6">
            {/*
    1. Added items-baseline for better text vertical alignment
       (you can also use items-center if preferred).
    2. The outer div takes care of justify-content: space-between.
  */}

            {/* Left Column: Title that truncates */}
            <div className="flex-1 min-w-0">
              {/*
      1. 'flex-1': Allows this div to grow and take available space.
      2. 'min-w-0': Crucial for flex items that contain text that needs to truncate.
                    It allows the item to shrink below its content's intrinsic minimum width.
    */}
              <Link
                className="mt-1 text-base lg:text-lg block whitespace-nowrap overflow-hidden text-ellipsis"
                // ^^^ ADDED 'overflow-hidden' HERE
                href={item.url ?? '/#'}
                title={item.title} // This title attribute will show the full text on hover, which is good UX
                target={item.openInTab ? '_blank' : undefined}
              >
                {item.title}
              </Link>
            </div>

            {/* Right Column: Date, should not wrap and stay at the end */}
            <div className="hidden shrink-0 sm:flex sm:items-center">
              {/*
      1. 'shrink-0': Prevents this column from shrinking.
      2. 'sm:flex sm:items-center': Ensures it's a flex item on sm+ screens and vertically centers content,
         which is good if the date text has different line-height/margin than the title.
    */}
              <p className="text-base text-gray-700 whitespace-nowrap">
                {/* Added whitespace-nowrap to the <p> for good measure, ensuring the date itself doesn't wrap */}
                {item.date ? new Date(item.date).toLocaleDateString() : '日期未知'}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export async function TabsArts() {
  const posts = await getDocs()
  const newPosts = posts.map((item) => ({
    date: item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : '日期未定义', // 添加友好的默认值
    title: item.title,
    url: `/posts/${item.slug}`,
  }))

  return (
    <section className="mx-auto items-center justify-center xl:grid xl:grid-cols-2 w-full">
      <h2 className="mb-8 text-center text-4xl col-span-full font-semibold tracking-tight text-gray-900 sm:text-5xl md:mb-12">
        最新图文
      </h2>

      <ArtsCarousel />
      <Tabs className="w-full p-8" defaultValue="account">
        <TabsList>
          <TabsTrigger className="text-lg" value="account">
            丽心丽语
          </TabsTrigger>
          <TabsTrigger className="text-lg" value="science">
            心理测评
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Articles data={newPosts} />
        </TabsContent>
        <TabsContent value="science">
          <Articles data={sciences} />
        </TabsContent>
      </Tabs>
    </section>
  )
}

const sciences: MyArticle[] = [
  {
    date: '2025-05-15T15:30Z',
    title: '综合心理健康自评量表 SCL-90 （toolonline）',
    url: 'https://toolonline.net/scl90',
    openInTab: true,
  },
  {
    date: '2025-05-12T15:30Z',
    title: '你是 i 人还是 e 人？（16人格官网）',
    url: 'https://www.16personalities.com/ch/%E4%BA%BA%E6%A0%BC%E6%B5%8B%E8%AF%95',
    openInTab: true,
  },
  {
    date: '2025-05-07T12:30Z',
    title: '大五人格测试（罗码术）',
    url: 'https://www.luomashu.com/tests/big-five',
    openInTab: true,
  },
  {
    date: '2025-05-07T09:30Z',
    title: '艾森克人格问卷 EPQ（中科院 7-15 岁儿童版）',
    url: 'http://eap.psych.cn/a/index.php?r=survey/index&sid=462957&lang=zh-Hans',
    openInTab: true,
  },
  {
    date: '2025-05-07T09:30Z',
    title: '艾森克人格问卷 EPQ（中科院成人版）',
    url: 'http://eap.psych.cn/a/index.php?r=survey/index&sid=715332&lang=zh-Hans',
    openInTab: true,
  },
  {
    date: '2025-05-06T09:30Z',
    title: '乐观自评（中科院版）',
    url: 'http://eap.psych.cn/a/index.php?r=survey/index&sid=91226&lang=zh-Hans',
    openInTab: true,
  },
  {
    date: '2025-05-02T09:30Z',
    title: '强迫自评（中科院版）',
    url: 'http://eap.psych.cn/a/index.php?r=survey/index&sid=715332&lang=zh-Hans',
    openInTab: true,
  },
]

import { Banner } from '@/components/myui/banner'
import { Scopes } from '@/components/myui/cards'
import { TabsArts } from '@/components/myui/articles'
import { Feedbacks } from '@/components/myui/feedback'
import { Faq } from '@/components/myui/faq'

export type HomeSectionsBlockProps = {
  blockType: 'homeSections'
}

export const HomeSectionsBlock: React.FC<HomeSectionsBlockProps> = () => {
  return (
    <div className="m-auto flex flex-col max-w-8xl items-center lg:px-8 gap-y-12">
      <Banner />
      <Scopes />
      <TabsArts />
      <Feedbacks />
      <Faq />
    </div>
  )
}

import Image from 'next/image'

type CardCon = {
  title: string
  subtitle: string
  desc: string
  image: string
}

function CardElem({ title, subtitle, desc, image }: CardCon) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border border-gray-200 dark:border-gray-700">
      {/* 1. 专门的图片容器，设置 relative 和 aspect-ratio */}
      <div className="relative w-full aspect-16/10">
        {' '}
        {/* 假设图片比例是 16:10，根据实际调整 */}
        <Image
          alt={title}
          src={image}
          fill // 2. 使用 fill 替代 width/height props, 让 fill 和 aspect-ratio 控制尺寸
          className="object-cover object-center hover:scale-115 transition-transform duration-300 ease-in-out" // 3. 添加 hover 效果
          // 4. (可选但推荐) 添加 sizes 属性优化加载
          /* sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // 根据你的 grid 布局调整 */
        />
      </div>
      {/* 文字内容区域 */}
      <div className="grow px-3">
        {' '}
        {/* 使用 grow 填充剩余空间, 添加 padding */}
        <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">{title}</h4>
        <p className="mt-2 text-base font-medium tracking-tight text-gray-950 dark:text-gray-100">
          {subtitle}
        </p>
        <p className="mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-400">{desc}</p>{' '}
        {/* 可用 leading-relaxed 增加行间距 */}
      </div>
    </div>
  )
}

const myContents: CardCon[] = [
  {
    title: '私密心理测评咨询',
    subtitle: '科学评估心理状态，专业定制成长方案',
    desc: '专业心理测评工具，帮助全面了解自我心理状况，提供针对性咨询建议',
    image: '/lixin/zixun.jpg',
  },
  {
    title: '心理沙盘游戏',
    subtitle: '在沙的世界里，遇见本我他我',
    desc: '2000余沙具共您选择，不限年龄，可团体可个人',
    image: '/lixin/shapan.png',
  },
  {
    title: 'OH卡牌治愈',
    subtitle: '打开潜意识之门，照进内心世界',
    desc: '促进自我觉察、协助突破个人困境，获得未来方向启发',
    image: '/lixin/ohcard.jpg',
  },
  {
    title: '青少年家教和心理',
    subtitle: '不只是孩子的成长，更是父母的修行',
    desc: '专业引导青少年心理健康，并提供父母沟通技巧，化解亲子冲突，促进家庭和谐',
    image: '/lixin/young.jpg',
  },
]

export function Scopes() {
  return (
    <div className="m-auto mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {myContents.map((item) => (
        <CardElem {...item} key={item.title} />
      ))}
    </div>
  )
}

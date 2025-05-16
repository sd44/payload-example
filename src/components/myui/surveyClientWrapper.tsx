'use client' // <-- 必须放在文件最顶部，声明为客户端组件

import { Skeleton } from '@/components/ui/skeleton' // 可以用你自己的加载状态组件
import dynamic from 'next/dynamic'

// 在客户端组件内部进行动态导入，并禁用 SSR
const SurveyComponent = dynamic(
  () => import('@/components/myui/survey'), // 确保 survey.tsx 如果需要也标记了 "use client"
  {
    loading: () => <Skeleton className="w-7xl h-full" />, // 可选：添加加载占位符
    ssr: false, // 在客户端组件中使用是允许的！
  },
)

// 这个包装器组件本身是一个客户端组件
export default function SurveyClientWrapper() {
  // 渲染动态加载的 SurveyComponent
  return <SurveyComponent />
}

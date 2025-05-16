import SurveyClientWrapper from '@/components/myui/surveyClientWrapper'

export default function Tmp() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      {/* 渲染客户端组件包装器，它会在内部处理动态加载 */}
      <SurveyClientWrapper />
    </div>
  )
}

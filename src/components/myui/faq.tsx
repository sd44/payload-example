import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type faq = {
  ans: string
  ques: string
}

const faqs: faq[] = [
  {
    ans: '我没有心理问题，但想提升人际关系、探索成长空间，可以预约咨询吗？',
    ques: '当然可以！心理咨询不仅针对“问题解决”，也包含“发展性咨询”。比如改善沟通技巧、增强情绪管理能力、职业规划探索等，都是常见主题。许多来访者正是通过咨询获得了更好的自我认知与成长。',
  },
  {
    ans: '咨询师和普通朋友聊天有什么区别？',
    ques: '咨询师是受过系统训练的专业人士，能通过特定技术帮助您发现行为和、思维模式，提供非评判性支持，并引导您找到解决路径，而非仅仅提供情感安慰。',
  },
  {
    ans: '如何判断自己需要心理咨询？',
    ques: '当情绪/行为问题持续影响工作、社交或生活（如长期失眠、情绪低落、人际关系冲突），或您希望更好地自我成长时，都可以寻求咨询帮助。',
  },
  {
    ans: '我的隐私会得到保护吗？',
    ques: '严格保密是我们的核心原则。您的个人信息及咨询内容未经您书面同意不会泄露（法律规定的例外情况除外，如涉及自伤/伤害他人风险等）。',
  },
]

export function Faq() {
  return (
    <div className="mx-auto w-full px-4 md:px-6 lg:px-8">
      <h2 className="text-center font-semibold tracking-tight text-gray-900 lg:text-5xl">
        常见问题解答
      </h2>
      <Accordion
        type="single"
        collapsible
        className="grid lg:grid-cols-2 lg:gap-x-32 mx-8 lg:mx-16"
      >
        {faqs.map((item, index) => (
          <AccordionItem value={index.toString()} key={index} className="last:border-b">
            <AccordionTrigger className="py-0 pb-2  text-base md:text-lg">
              {item.ans}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg">{item.ques}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

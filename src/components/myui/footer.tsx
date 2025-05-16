import Image from 'next/image'
import Link from 'next/link'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

type SocialIco = {
  name: string
  href: string
  icon: React.ElementType
}

const socials: SocialIco[] = []

export function MyFooter() {
  return (
    <footer id="footer" className="w-full items-center bg-white">
      <div className="mx-auto w-full border-t px-6 pb-4 lg:px-6 ">
        <div className="grid grid-cols-3 lg:gap-x-6 items-center justify-center">
          <div className="lg:grid-row lg:grid lg:gap-2">
            <h5 className="pl-4 font-medium">添加微信好友</h5>
            <Image
              src="/ico/wechat.jpg"
              alt="我的微信二维码"
              width={100}
              height={100}
              style={{
                maxWidth: '100%', // 可选，确保图片不超过容器宽度
                height: 'auto', // 关键：让高度自动调整以保持宽高比
                width: 'auto',
              }}
            />
          </div>

          <div className="xl:grid-row xl:grid xl:gap-2">
            <p>联系人 ： 韩女士 </p>
            <p>电&emsp; 话 ：15266836001</p>
            <p>地&emsp; 址 ：聊城市东阿县位山大道 澳林商贸博览城 A4-1-408</p>
          </div>

          <div className="xl:grid-row xl:grid xl:gap-2">
            <p>
              <strong>友情链接</strong>{' '}
            </p>
            <p>
              <Link href="http://jyty.liaocheng.gov.cn/">聊城市教体局</Link>
            </p>
            <p>
              <Link href="https://www.dongeejiao.com/">东阿阿胶</Link>
            </p>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex gap-x-6 md:order-2">
            {socials.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
            &copy; 2025 东阿县丽心心理咨询中心版权所有
          </p>
        </div>
      </div>
    </footer>
  )
}

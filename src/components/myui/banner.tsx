import Image from 'next/image'

export function Banner() {
  // Image dimensions multiplied by approx 1.2 (120%)
  // Original values for reference:
  // Img1: w-48 (192px), sm:w-56 (224px), lg:w-44 (176px), xl:w-48 (192px)
  // Img3: w-64 (256px), sm:w-80 (320px), lg:w-60 (240px), xl:w-72 (288px)
  // Img2: w-56 (224px), sm:w-72 (288px), lg:w-52 (208px), xl:w-60 (240px)
  // Img4: w-44 (176px), sm:w-52 (208px), lg:w-40 (160px), xl:w-48 (192px)

  return (
    <div className="mx-auto lg:max-w-7xl xl:max-w-8xl px-4 sm:px-6 pb-16 pt-12 lg:px-8 lg:pt-6">
      {/* Main layout grid: 1 column on small, 2 columns on lg+ */}
      {/* Text block will be first, image area second, naturally placing images below text on small screens */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-x-6 xl:gap-x-12">
        {/* --- Left Text Block --- */}
        <div className="w-full text-center mx-auto lg:max-w-xl xl:max-w-2xl">
          <h1 className="bg-gradient-to-r from-rose-400 via-pink-400 to-emerald-500 bg-clip-text text-4xl font-semibold tracking-tight text-pretty text-transparent sm:text-5xl lg:text-6xl xl:text-7xl">
            丽心心理咨询中心
          </h1>
          <div className="mt-8 sm:mt-10 text-lg font-medium leading-relaxed text-pretty text-gray-700 sm:text-xl align-left text-left space-y-8">
            <p className="">
              <strong>承接：</strong>
              心理咨询师报考，家庭教育指导师报考，心理测评，青少年心理辅导、沙盘游戏指导、欧卡牌疗愈、脑AT测评职业规划，家庭教育指导等业务
            </p>
            <div className="grid grid-cols-3 gap-6 lg:gap-12">
              <div className="pt-4 col-span-2">
                <p>
                  <strong>预约热线：</strong>15266836001
                </p>
                <p>
                  <strong>微信：</strong>greatlily12（右侧扫码）
                </p>
                <p>
                  <strong>地址：</strong>澳林生活家居广场以北
                </p>
                <p>&emsp;&emsp;&emsp;澳林公馆 A4 4楼408室</p>
              </div>
              <div className="">
                <p className="text-sm">添加我微信吧</p>
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
            </div>
            {/* <p className="mt-4 sm:mt-6">
              在这里，没有评判，只有理解与陪伴；
              <br />
              没有孤独，只有专业引导与温暖支持。
            </p>
            <p className="mt-4 sm:mt-6">
              让我们携手拨开阴霾，重拾内心力量，
              <br />
              迈向更轻盈、明亮的未来。
            </p> */}
            <p className="mt-6 sm:mt-8 bg-gradient-to-r from-rose-500 via-pink-500 to-emerald-600 bg-clip-text font-semibold text-transparent sm:text-xl lg:text-3xl">
              丽心咨询，与您共赴心灵晴空。
            </p>
          </div>
        </div>
        {/* --- Right Image Area --- */}
        <div
          className="mt-12 flex flex-col items-center gap-y-8 sm:gap-y-10
                        lg:mt-0 lg:flex-row lg:items-start lg:justify-center lg:gap-x-4 xl:gap-x-6
                        lg:max-w-xl xl:max-w-2xl mx-auto"
        >
          {' '}
          {/* Increased max-width slightly for larger images */}
          {/* --- Image Group 1 (On lg+, becomes Column 1) --- */}
          <div className="flex flex-col items-center gap-y-6 sm:gap-y-8 w-full">
            {/* Image 1 (lixin.jpg - Top-left on Lg) - ALWAYS VISIBLE */}
            <div
              className="relative w-76 lg:w-58 xl:w-62 {/* Widths increased by ~20% */}
                            aspect-[3/4] sm:aspect-[2/3]
                            rounded-xl shadow-xl bg-gray-900/5 overflow-hidden
                            transition-transform duration-300 ease-out
                             lg:translate-y-2 lg:rotate-[-2deg] lg:hover:scale-125 lg:hover:rotate-0 lg:z-5"
            >
              <Image
                alt="心理咨询场景3"
                src="/lixin/lixin.jpg"
                fill
                className="object-cover"
                sizes="(max-width: 639px) 224px, (max-width: 1023px) 256px, (min-width: 1024px) and (max-width: 1279px) 208px, 224px"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
          {/* --- Image Group 2 (On lg+, becomes Column 2) --- */}
          <div className="flex flex-col items-center gap-y-6 sm:gap-y-8 w-full lg:mt-10 xl:mt-12">
            {/* Image 4 (resume.png - Bottom-right on Lg) - ALWAYS VISIBLE */}
            <div
              className="relative w-80 lg:w-58 xl:w-68 {/* Widths increased by ~20% */}
                            aspect-[3/4]
                            rounded-xl shadow-xl bg-gray-900/5 overflow-hidden
                            transition-transform duration-300 ease-out
                            lg:translate-x-8 lg:-translate-y-3 lg:rotate-[3deg] lg:hover:scale-135 lg:hover:rotate-0 lg:z-5"
            >
              <Image alt="韩丽个人简历" src="/lixin/resume.png" fill className="object-cover" />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
        </div>{' '}
        {/* End of Right Image Area */}
      </div>{' '}
      {/* End of Main Layout lg:grid */}
    </div> // End of Outermost container
  )
}

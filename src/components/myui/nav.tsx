'use client'

import type { Header } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<null | string>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) {
      setTheme(headerTheme)
    }
  }, [headerTheme])

  return <HeaderNav data={data} />
}

function HeaderNav({ data }: { data: Header }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = data?.navItems || []

  return (
    <header className="sticky top-0 z-10 w-full shadow-sm dark:bg-gray-900 backdrop-blur-md bg-background/50">
      <nav
        aria-label="Global"
        className="m-auto flex w-full items-center justify-between gap-x-6 lg:px-4"
      >
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href="/">
            <span className="sr-only ">丽心心理咨询中心</span>
            <Image alt="" height={64} src="/favicon.jpg" width={64} />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map(({ link }, i) => {
            return (
              <CMSLink
                key={i}
                {...link}
                className="text-base font-semibold text-indigo-600 dark:text-indigo-400"
              />
            )
          })}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Link className="hidden text-sm/6 font-semibold text-gray-900 lg:block" href="/search">
            <span className="sr-only">搜索文章</span>
            <SearchIcon className="w-5 text-primary" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            type="button"
          >
            <span className="sr-only">主菜单</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <Dialog className="lg:hidden" onClose={setMobileMenuOpen} open={mobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <Link className="-m-1.5 p-1.5" href="/">
              <span className="sr-only">丽心心理咨询中心</span>
              <Image
                alt="站点图标"
                className="h-8 w-auto"
                height={10}
                src="/favicon.jpg"
                width={10}
              />
            </Link>
            <button
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
              type="button"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map(({ link }, i) => {
                  return (
                    <CMSLink
                      key={i}
                      {...link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    />
                  )
                })}
              </div>
              <div className="py-6">
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  href="#"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

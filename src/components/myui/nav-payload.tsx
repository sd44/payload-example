import type { Header } from '@/payload-types'
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'

import { HeaderClient } from './nav'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData} />
}

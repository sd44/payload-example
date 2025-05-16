import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'eager' | 'lazy'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className, loading: loadingFromProps, priority: priorityFromProps } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      decoding="async"
      fetchPriority={priority}
      height={34}
      loading={loading}
      src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
      width={193}
    />
  )
}

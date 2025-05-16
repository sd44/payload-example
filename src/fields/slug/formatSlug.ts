import type { FieldHook } from 'payload'

import { pinyin } from 'pinyin-pro'

export const formatSlug = (val: string): string => {
  if (!val) return '' // 处理空输入

  let slug = pinyin(val, { toneType: 'none', nonZh: 'consecutive' })

  // 如果 pinyin 返回的是数组，则需要先 join
  if (Array.isArray(slug)) {
    slug = slug.join(' ')
  }

  slug = slug
    .toString() // 确保是字符串类型
    .trim() // 移除首尾空格
    .toLowerCase() // 转换为小写，尽早处理方便后续正则

  // 1. 将非中文字符串中的常见分隔符（如空格、下划线）统一替换为连字符
  //    同时也处理连续的这类字符，例如多个空格、下划线变成一个连字符
  slug = slug.replace(/[\s_]+/g, '-')

  // 2. 移除所有不是小写字母、数字或连字符的字符
  //    注意这里不再使用 \w，因为它包含大写字母和下划线，而我们已经转为小写并处理了下划线
  slug = slug.replace(/[^a-z0-9-]+/g, '')

  // 3. 合并多个连续的连字符为一个
  //    例如 "a---b" 变成 "a-b"
  slug = slug.replace(/-+/g, '-')

  // 4. 移除可能存在于开头或结尾的连字符
  //    例如 "-slug-" 变成 "slug"
  slug = slug.replace(/^-+|-+$/g, '')

  return slug
}

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string') {
      return formatSlug(value)
    }

    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    return value
  }

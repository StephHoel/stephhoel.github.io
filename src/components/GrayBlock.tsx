import type { PropsWithChildren } from 'react'

export function GrayBlock({ children }: PropsWithChildren) {
  return (
    <div className="my-6 lg:py-8 lg:px-12 sm:py-4 sm:px-8 bg-[#60686cba] rounded-[36px]">
      {children}
    </div>
  )
}

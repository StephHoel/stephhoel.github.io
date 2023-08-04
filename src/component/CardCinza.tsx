import { ChildrenProps } from '../lib/Interfaces'

export default function CardCinza({ children }: ChildrenProps) {
  return (
    <div className="my-6 lg:py-8 lg:px-12 sm:py-4 sm:px-8 bg-[#60686cba] rounded-[36px]">
      {children}
    </div>
  )
}

import { ChildrenProps } from '../lib/Interfaces'

export default function CardCinza({ children }: ChildrenProps) {
  return (
    <div className="my-6 py-8 px-12 bg-[#60686cba] rounded-[36px]">
      {/* grid transition-shop font-bold */}
      {children}
    </div>
  )
}

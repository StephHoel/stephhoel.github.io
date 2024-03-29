interface Props {
  href: string
  image: string
  name: string
}
export default function CardAmigo({ href, image, name }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="grid mt-4 justify-center cursor-pointer items-center lg:hover:opacity-70"
    >
      <img
        className="max-w-[80px] max-h-[80px] rounded-full mx-auto"
        src={image}
        alt={`imagem de ${name}`}
      />
      <div className="max-w-[90px] mt-4 overflow-ellipsis text-center">
        {name}
      </div>
    </a>
  )
}

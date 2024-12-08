import { podcasts } from "../pages/utils/podcasts";
import { GrayBlock } from "./GrayBlock";

export function Recomendations() {
  return (
    <GrayBlock>
      {/* recomendações */}
      <p className="font-bold sm:text-center">Minhas recomendações</p>

      <div className="font-bold text-lg justify-center flex flex-wrap lg:space-x-16 sm:gap-6">
        {podcasts.map(pod => (
          <a
            key={pod.name}
            href={pod.href}
            target="_blank"
            rel="noreferrer"
            className="grid mt-4 justify-center cursor-pointer items-center lg:hover:opacity-70"
          >
            <img
              className="max-w-[80px] max-h-[80px] rounded-full mx-auto"
              src={pod.image}
              alt={`imagem de ${pod.name}`}
            />
            <div className="max-w-[90px] mt-4 overflow-ellipsis text-center">
              {pod.name}
            </div>
          </a>
        ))}
      </div>
    </GrayBlock>
  )
}

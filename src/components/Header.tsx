import { socialMedias } from "../pages/utils/socialMedias";

export function Header() {
  return (
    <div className="grid justify-center ">
      {/* cabeçalho com foto, nome, redes */}
      <img
        className="w-52 h-52 rounded-[100px] mx-auto "
        src="https://avatars.githubusercontent.com/u/53956021?v=4"
        alt="profile foto"
      />

      <div className="text-4xl my-4 text-center">Steph Hoel</div>

      <div className="flex text-center text-6xl space-x-4 items-center justify-center ">
        {socialMedias.map(social => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="lg:hover:text-zinc-500"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
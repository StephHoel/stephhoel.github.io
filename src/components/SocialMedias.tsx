import { socialMedias } from "../utils/socialMedias";

export function SocialMedias() {
  return (
    <div className="flex text-center text-5xl space-x-4 pt-4 items-center justify-center ">
      {socialMedias.map(social => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-6 rounded-full transition-colors duration-200 hover:bg-[var(--highlight-color)]"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
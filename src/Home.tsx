import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  MapPin,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'

import CardAmigo from './component/CardAmigo'
import CardCinza from './component/CardCinza'
import CardLink from './component/CardLink'
import Linha from './component/Linha'
import Link from './component/Link'
import Titulo from './component/Titulo'

export default function Home() {
  return (
    <main className="mx-auto pt-12 lg:w-3/4 lg:grid">
      {/* cabeçalho com foto, nome, redes */}
      <div className="grid justify-center ">
        <img
          className="w-52 h-52 rounded-[100px] mx-auto "
          src="https://avatars.githubusercontent.com/u/53956021?v=4"
          alt="profile foto"
        />

        <div className="text-4xl my-4 text-center">Steph Hoel</div>

        <div className="flex text-center text-6xl space-x-4 items-center justify-center ">
          <Link href={'malito:steph.hoel@gmail.com'}>
            <EnvelopeSimple />
          </Link>

          <Link href="https://www.instagram.com/steph.hoel/">
            <InstagramLogo />
          </Link>

          <Link href="https://www.youtube.com/stephhoe">
            <YoutubeLogo />
          </Link>

          <Link href="https://twitter.com/stephhoel">
            <TwitterLogo />
          </Link>

          <Link href="https://github.com/stephhoel">
            <GithubLogo />
          </Link>
        </div>
      </div>

      {/* descrição, email e localização */}
      <CardCinza>
        <Linha>Desenvolvedora/Programadora Jr</Linha>
        <Linha>
          Sou Tecnóloga em Sistemas para Internet & Técnica em Programação de
          Jogos Digitais
        </Linha>
        <Linha>Sou Gamer de simuladores & Dona de 3 doguinhos</Linha>
        <Linha>Fui Youtuber (em uma época remota)</Linha>
        <Linha>
          <EnvelopeSimple />
          steph.hoel@gmail.com
        </Linha>
        <Linha>
          <MapPin />
          Rio de Janeiro
        </Linha>
      </CardCinza>

      {/* botões de links */}
      <div className="my-4 space-y-4">
        <CardLink href="https://stephhoel.github.io/StephHoel/">Blog</CardLink>
      </div>

      {/* shop */}
      {/* <CardCinza>
          <Titulo>Shop</Titulo>
          <div className="py-8 text-xl ">Mais informações aqui</div>
        </CardCinza> */}

      {/* recomendações */}
      <CardCinza>
        <Titulo>Minhas recomendações</Titulo>
        <div className="font-bold text-lg justify-center flex flex-wrap lg:space-x-16 sm:gap-6">
          <CardAmigo
            image={
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5nOFmDmY-Me6roeOdtpQrJwamlSBGNO35H5As1WD5LTc-CXE'
            }
            name={'Hipsters Ponto Tech'}
            href={
              'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuaGlwc3RlcnMudGVjaC9jYXRlZ29yeS9wb2RjYXN0L2ZlZWQv?sa=X&ved=0CAwQ9sEGahkKEwiYsf7AhsGAAxUAAAAAHQAAAAAQ6IgE'
            }
          />

          <CardAmigo
            image={
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4P-QQj4ypVZw_7Zwd2LuQKnRerASlz6NAzUoG4wtAwtuw44E'
            }
            name={'Bolha DEV'}
            href={
              'https://podcasts.google.com/feed/aHR0cHM6Ly9ib2xoYWRldi50ZWNoL2VwaXNvZGlvcz9mb3JtYXQ9cnNz?sa=X&ved=0CAcQ9sEGahkKEwiYsf7AhsGAAxUAAAAAHQAAAAAQ6IgE'
            }
          />

          <CardAmigo
            image={
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmAaDtYQdyjh9jubHWcYSR0S3r0lN5lrc-r30E0_MWbZpywu70'
            }
            name={'NerdCast'}
            href={
              'https://podcasts.google.com/feed/aHR0cHM6Ly9qb3ZlbW5lcmQuY29tLmJyL2ZlZWQtbmVyZGNhc3Qv?sa=X&ved=0CA0Q9sEGahkKEwiYsf7AhsGAAxUAAAAAHQAAAAAQ6IgE'
            }
          />

          <CardAmigo
            image={
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJXtqnsTEsCTVzhjmClAlJ6H9zvV52F5fRVplm47RzesoOB6YY'
            }
            name={'Mau Acompanhado'}
            href={
              'https://podcasts.google.com/feed/aHR0cHM6Ly9qb3ZlbW5lcmQuY29tLmJyL3F1ZW0tc29tb3MvZmVlZC8?sa=X&ved=0CAkQ9sEGahkKEwiYsf7AhsGAAxUAAAAAHQAAAAAQ6IgE'
            }
          />

          <CardAmigo
            image={
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTxrEgbwdrSozVJUI2oeFJ5Su1ASD-OiNLzfdDx339aU23COE'
            }
            name={'DW Revista'}
            href={
              'https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuZHcuY29tL3htbC9wb2RjYXN0X2JyYV9ub3RpY2lhcw?sa=X&ved=0CAsQ9sEGahkKEwiYsf7AhsGAAxUAAAAAHQAAAAAQ6IgE'
            }
          />
        </div>
      </CardCinza>
    </main>
  )
}

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
import Titulo from './component/Titulo'

export default function Home() {
  return (
    <>
      <main className="w-2/4 mx-auto pt-12 grid flex-row">
        {/* cabeçalho com foto, nome, redes */}
        <div className="grid justify-center">
          <img
            className="w-52 h-52 rounded-[100px] opacity-100 border-none mx-auto "
            src="https://avatars.githubusercontent.com/u/53956021?v=4"
            alt="profile foto"
          />

          <div className="text-4xl my-4 text-center">Steph Hoel</div>

          <div className="flex text-center text-6xl space-x-4 ">
            <a
              href="malito:steph.hoel@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeSimple />
            </a>

            <a
              href="https://www.instagram.com/steph.hoel/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo />
            </a>

            <a
              href="https://www.youtube.com/stephhoe"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeLogo />
            </a>

            <a
              href="https://twitter.com/stephhoel"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLogo />
            </a>

            <a
              href="https://github.com/stephhoel"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo />
            </a>
          </div>
        </div>

        {/* descrição, email e localização */}
        <CardCinza>
          <Linha>Tecnóloga em Sistemas para Internet</Linha>
          <Linha>Técnica em Programação de Jogos Digitais</Linha>
          <Linha>Desenvolvedora</Linha>
          <Linha>Gamer de simuladores</Linha>
          <Linha>Mãe de 3 doguinhos</Linha>
          <Linha>Youtuber (em uma época remota)</Linha>
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
          <CardLink href="https://stephhoel.github.io/StephHoel/">
            Blog
          </CardLink>
        </div>

        {/* shop */}
        {/* <CardCinza>
          <Titulo>Shop</Titulo>
          <div className="py-8 text-xl ">Mais informações aqui</div>
        </CardCinza> */}

        {/* recomendações // até 5 cards */}
        <CardCinza>
          <Titulo>Minhas recomendações</Titulo>
          <div className="font-bold text-lg flex space-x-8 justify-center">
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

      <footer className="flex items-center justify-center text-sm pb-4">
        @ Steph Hoel 2023 (background por&nbsp;
        <a
          href="https://unsplash.com/pt-br/@florianolv"
          target="_blank"
          rel="noreferrer"
        >
          Florian Olivo
        </a>
        )
      </footer>
    </>
  )
}

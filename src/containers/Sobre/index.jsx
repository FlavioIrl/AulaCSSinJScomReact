import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas vitae
      autem ex cupiditate necessitatibus asperiores. Deserunt tempora assumenda
      eum consectetur deleniti tempore sequi facilis. Error possimus nisi sequi
      illum reprehenderit?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=FlavioIrl&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FlavioIrl&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre

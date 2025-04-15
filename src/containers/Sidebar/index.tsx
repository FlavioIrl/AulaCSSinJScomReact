import Titulo from '../../components/Titulo'
import Avatar from '../../components/avatar'
import Paragrafo from '../../components/Paragrafo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Flavio Irala</Titulo>
      <Paragrafo tipo="principal" fontSize={16}>
        FlavioIrl
      </Paragrafo>
      <Descricao fontSize={12}>Engenheiro front-end</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

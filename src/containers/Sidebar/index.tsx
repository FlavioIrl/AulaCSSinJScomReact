import Titulo from '../../components/Titulo'
import Avatar from '../../components/avatar'
import Paragrafo from '../../components/Paragrafo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Flavio Irala</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        FlavioIrl
      </Paragrafo>
      <Descricao fontSize={12}>Engenheiro front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

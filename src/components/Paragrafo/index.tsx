import { Paragrafo as ParagrafoEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Paragrafo = (props: Props) => (
  <ParagrafoEstilo fontSize={props.fontSize}>{props.children}</ParagrafoEstilo>
)

export default Paragrafo

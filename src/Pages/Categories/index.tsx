import ProductList from '../../components/ProductsList'
import Game from '../../models/game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'acao',
    description: 'jogo de zumbi',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'acao',
    description: 'jogo de zumbi',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'acao',
    description: 'jogo de zumbi',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'acao',
    description: 'jogo de zumbi',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'acao',
    description: 'jogo de zumbi',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'acao',
    description: 'jogo de zumbi',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'acao',
    description: 'jogo de zumbi',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 8,
    category: 'acao',
    description: 'jogo de zumbi',
    title: 'resident evil 4',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Açao" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories

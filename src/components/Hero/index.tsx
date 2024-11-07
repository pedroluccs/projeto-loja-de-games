import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Header/Tag'
import { Banner, Infos } from './style'
import { formataPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>
              De {formataPreco(game.prices.old)} <br />
            </span>
          )}
          {game.prices.current && <>por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.discount && (
          <Button
            type="button"
            variant="primary"
            title="Clique aqui para adicionar este jogo ao carrinho"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero

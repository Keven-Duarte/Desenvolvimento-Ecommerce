import './Produtos.css';

import bolsa from '../../assets/bolsa.png';
import note from '../../assets/portaNotebook.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';
import tamanco from '../../assets/tamanco.png';
import tenis from '../../assets/tenis.png';

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>Confira nossos produtos e escolha o que mais lhe agrada
                </p>
            </div>

                            <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt="Sandália marrom" />
                            <span className='badge-venda'>Mais vendidos</span>
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Marrom</h3>
                            <p className='preco'>R$ 120,00</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt="Sandália pink" />
                        </div>
                        <div className='card-info'>
                            <h3>Sandália pink</h3>
                            <p className='preco'>R$ 270,00</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tamanco} alt="Tamanco" />
                        </div>
                        <div className='card-info'>
                            <h3>Tamanco</h3>
                            <p className='preco'>R$ 70,00</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={bolsa} alt="Bolsa" />
                            <span className='badge-venda'>Mais vendidos</span>
                        </div>
                        <div className='card-info'>
                            <h3>Bolsa</h3>
                            <p className='preco'>R$ 190,00</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tenis} alt="Tênis" />
                            <span className='badge-venda'>Lançamento</span>
                        </div>
                        <div className='card-info'>
                            <h3>Tênis</h3>
                            <p className='preco'>R$ 110,00</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={note} alt="Porta Notebook" />
                        </div>
                        <div className='card-info'>
                            <h3>Porta notebook</h3>
                            <p className='preco'>R$ 70,00</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}
import './Topo.css'

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                    <p>Tudo em 10X sem juros!</p>
                </div>
            </div>

            <div className='topo'>
                <picture>
                    <a href="">
                        <img src="./logoLoja.png" alt="" />
                    </a>
                </picture>

                <nav>
                    <a href="#">Nome</a>
                    <a href="#">Produtos</a>
                    <a href="#">Lançamentos</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}
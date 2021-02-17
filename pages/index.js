import { useState } from 'react';
import GlobalStyle from '../styles/global';

import Menu from '../components/Menu/Menu';

function Home() {
    return (
        <div id="root">
            <h1>Simplesmente um contador</h1>
            <p>Clique e conte</p>
            <Contador />
            <GlobalStyle/>

            <Menu />
        </div>
    )
}
function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        return setContador(contador + 1);
    }
    return (
        <div>
            <p className="contador">{contador}</p>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )

}

export default Home;
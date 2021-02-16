import { useState } from 'react';
import GlobalStyle from '../styles/global';

function Home() {
    return (
        <div id="root">
            <h1>Hello,world!</h1>
            <Contador />
            <GlobalStyle/>
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
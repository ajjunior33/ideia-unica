import { useState } from 'react';
function Home() {
    return (
        <>
            <h1>Hello,world!</h1>
            <Contador />
        </>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        return setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )

}

export default Home;
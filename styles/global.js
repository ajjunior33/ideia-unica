import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outiline:0;
    box-sizing: border-box;
}
body{
    background-color:#F0F0F5;
    -webkit-font-smoothing:antialiased;
    -webkit-font-smoothing:antialiased;
}
body, input, button{
    font-size:15px;
    font-family: 'Roboto', sans-serif;
}
#root{
    max-width:960px;
    height:100vh;
    background-color:#F0F0F5;
    margin:0 auto;
    padding: 40px 20px;
}
button{
    cursor:pointer;
}
h1{
    text-align:center;
    margin:15px 0;
}
.contador{
    font-size:1.5em;
}
button{
    border:0;
    background-color:#e67e22;
    border-radius:15px;
    padding:8px 25px;
    font-size:1em;
    color:#FFF;
    font-weight:bold;
    margin:15px 0;

    :hover{
        background-color:#d35400;
    }

    @media (max-width: 640px) {
        width:100%;
    }
}

`;
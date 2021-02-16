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
button{
    border:0;
    background-color:#2ecc71;
    border-radius:15px;
    padding:8px 25px;
    font-size:1em;
    color:#FFF;
    font-weight:bold;
    margin:15px 0;

    :hover{
        background-color:#27ae60;
    }
}

`;
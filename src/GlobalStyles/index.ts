import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif;
    
}
:root{
    --collorPrimary: #27AE60;
    --collorPrimary50:#93D7AF;
    --collorSecundary: #EB5757;
    --collorGray600:#333333;
    --collorGray300:#828282;
    --collorGray100:#E0E0E0;
    --collorGray0:#F5F5F5;
    --collorNegagite:#E60000;
    --collorWarnig:#FFCD07;
    --collorSucess:#168821;
    --collorInformation:#155BCB;
}
button, svg{
    cursor: pointer;
}
`

export default GlobalStyles
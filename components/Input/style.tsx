import styled from "styled-components/native";

type CampoDeTextoProps = {
    erro: boolean
}

export const Campo_Texto = styled.TextInput<CampoDeTextoProps>`
    background-color: #FAF4D3;
    font-size: 16px;
    padding: 20px;
    border-radius: 05px;
    border: 2px
    solid ${({erro} : {erro: boolean}) => erro ? '#D72638' : '#33415C'};
`
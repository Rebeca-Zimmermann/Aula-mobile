/* --------------------AULA 1---------------------- */

/* import {
    View,
    StyleSheet,
    Text,
    Button
} from "react-native";

export default function App(){
    return(

        <View >

            <Text style={Estilo.texto}>Hello World</Text>
            <Button title = "Clique em mim"/>
        </View>       
    )
}

const Estilo = StyleSheet.create({
    texto : {
    color: '#000'
}}) */


/* --------------------AULA 2---------------------- */

import { TextInput, View, Text, Pressable, StyleSheet } from "react-native";

import styled from "styled-components/native"

export default function Login()
{
    return(
        <Tela>
            <View>
                <Titulo>ENTRAR</Titulo>
            </View>
            <ContainerCampoTexto>
                <Campo_Texto
                    placeholder="Digite seu email"
                />
                <Campo_Texto
                    placeholder="Digite sua senha"
                />
            </ContainerCampoTexto>
            
            <ContainerBotoes>
                <Botao>
                    <TextoBotao>ENTRAR</TextoBotao>
                </Botao>

                <Links>Cadastre-se</Links>
                <Links>Esqueci minha senha</Links>
            </ContainerBotoes>
        </Tela>
    )
}

/*USANDO STYLED-COMPONENTS*/

const Tela = styled.View`
    flex: 1;
    background-color: #1A2021;
    padding: 26px;
`
const Titulo = styled.Text`
    font-family: Verdana serif;
    font-size: 55px;
    font-weight: bold;
    color: #FAF4D3;
    margin-top: 240px;
    margin-bottom: 42px;
`
const Campo_Texto = styled.TextInput`
    background-color: #FAF4D3;
    font-size: 16px;
    padding: 20px;
    border-radius: 05px;
`
const ContainerCampoTexto = styled.View`
    gap: 20px;
`
const ContainerBotoes = styled.View`
    margin-top: 45px;
    gap: 10px;
`
const Botao = styled.Pressable`
    background-color: #252f32;
    border: solid 3px;
    border-color: #FAF4D3;
    border-radius: 05px;
    padding: 20px;
    margin-bottom: 30px;
`
const TextoBotao = styled.Text`
    text-align: center;
    font-weight: bold;
    color: #FAF4D3;
    font-size: 26px;
`
const Links = styled.Text`
    text-align: center;
    color: #FAF4D3;
    font-size: 16px;
    font-weight: bold;
`

/*USANDO STYLESHEET*/

/* const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#1A2021',
        padding: 26
    },
    titulo: {
        fontFamily: 'Monolisa',
        fontSize: 45,
        fontWeight: 'bold',
        color: '#FAF4D3', 
        marginTop: 140,
        marginBottom: 55
    },

    container_campos_texto: {
        gap: 20
    },

    camp_texto: {
        backgroundColor: "#FAF4D3",
        fontSize: 16,
        textAlignVertical: 'center',
        paddingHorizontal: 16,
        padding: 20,
    },
    container_botoes: {
       marginTop: 45,
       gap: 10
    },
    botao: {
        backgroundColor: '#FAF4D3',
        padding: 20,
        marginBottom: 30
    },
    texto_botao: {
        textAlign: 'center',
        fontSize: 24,
    },
    links: {
        textAlign: 'center',
        color: '#FAF4D3',
        fontSize: 16
    } 
}) */
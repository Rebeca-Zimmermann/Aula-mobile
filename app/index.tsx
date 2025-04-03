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

import { View } from "react-native";

import styled from "styled-components/native";
import Title from "../components/Titulo/Titulo";
import { useEffect, useState } from "react";
import InputTexto from "@/components/Input/input";
import { Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login()
{

    const [email, setEmail] = useState('exemplo@exemplo.com')
    const [erroEmail, setErroEmail] = useState(false)

    const [senha, setSenha] = useState('@Example123')
    const [erroSenha, setErroSenha] = useState(false)
    const [mostrarSenha, setMostrarSenha] = useState(false);

    useEffect(() => {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
       if(emailRegex.test(email)){
        setErroEmail(false)
       }
       else{
        setErroEmail(true)
       }
    }, [email])

    useEffect(() => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if(passwordRegex.test(senha)){
            setErroSenha(false)
        }
        else{
            setErroSenha(true)
        }
    })

    return(
        <Tela>
            <Title 
                text={"Entrar"}
                flag={true}
            />
            <Title
                text={"Bem vindo ao app!"}
                flag={false}
            />
            <ContainerCampoTexto>
                <View >
                <InputTexto
                    erro={erroEmail}
                    placeholder="Digite seu email"
                    onChangeText={text => setEmail(text)}
                />
                {erroEmail ? <TextErrorHint>Email Inválido</TextErrorHint> : null }
                </View>

                <View>
                <Input
                    placeholder="Digite sua senha"
                    defaultValue="" 
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry={!mostrarSenha}
                    rightIcon={
                      <MaterialIcons
                        name={mostrarSenha ? "visibility" : "visibility-off"}
                        size={24}
                        color="#FAF4D3"
                        onPress={() => setMostrarSenha(!mostrarSenha)}
                      />
                    }
                    inputStyle={{ color: "#FAF4D3" }}
                    containerStyle={{ marginBottom: 10 }}   
                    inputContainerStyle={{
                        borderBottomWidth: 2,
                        borderBottomColor: "#FAF4D3", // Linha de baixo na mesma cor do design
                      }}
                />
                {erroSenha ? <TextErrorHint>Senha Inválida</TextErrorHint> : null }
                </View>

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

const TextErrorHint = styled.Text`
    font-size: 16px;
    color: #E63946;
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
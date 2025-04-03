import { Campo_Texto } from "./style";
import { TextInputProps } from 'react-native';

type InputTextoProps = TextInputProps & {
    erro : boolean
}

export default function InputTexto({erro, ...rest} : InputTextoProps){
    return(
        <Campo_Texto 
            erro={erro}
            placeholderTextColor={'#000'}
            {...rest}
        />
    )
}
// regra 1 - Importar o React
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextoEmBranco = ({ texto = '' }) => {
    return <Text style={estilos.texto}>{`${texto}`}</Text>
}

// regra 2 - Criar e exportar uma função
export default () => {
    // regra 3 - Retornar um elemento JSX
    // regra 4 - Retornar somente um elemento JSX
    // regra 5 - Texto somente dentro da TAG <Text></Text>
    // regra 6 - Não usar TAGs HTML
    return (
        <View style={estilos.principal}>
            <View style={estilos.viewMapa}></View>
            <View style={estilos.viewTexto}>
                <TextoEmBranco texto="testando"></TextoEmBranco>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    principal: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgb(209, 143, 82)'
    },
    texto: {
        fontSize: 50,
        color: 'rgb(40, 44, 52)',
        fontWeight: 'bold'
    },
    viewMapa: {
        flex: 0.5,
        backgroundColor: 'rgb(137, 189, 99)'
    },
    viewTexto: {
        flex: 0.5,
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

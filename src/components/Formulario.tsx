import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente : Cliente
    clienteMudou?: (cliente:Cliente) => void

    // Função void não recebe nenhum parametro nem retorna nada
    cancelado?: () => void


}

export default function Formulario(props:FormularioProps){
    const id= props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                // Importo o componente Entrada
            <Entrada 
                somenteLeitura
                texto="Código"
                valor={id} />
            ) : false}

            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-2"
                />
            
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade} 
                valorMudou={setIdade}
                className="mb-2"/>
            
            <div className="flex justify-end mt-7">
                {/* O mais na idade indica que vai passar um inteiro */}
                <Botao cor="blue" className="mr-2" onclick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                {id ? 'Alterar': 'Salvar'}
                </Botao>
                <Botao onclick={props.cancelado} cor="gray">
                Cancelar
                </Botao>
            </div>
            
            

        </div>
    )
}
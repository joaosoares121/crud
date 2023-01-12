interface EntradaProps {
    //Quando tem ? é opcional
    tipo?: 'text' | 'number'
    texto: string
    // Valor pode ser string ou numero por isso fica definido com any
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void


}

export default function Entrada(props:EntradaProps) {
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input 
            type={props.tipo ?? 'text'}
            value={props.valor} 
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            className={`border border-purple-500 rounded-lg
            focus:outline-none bg-gray-50 px-4 py-2
            // Quando selecionado tem um fundo mais claro
            ${props.somenteLeitura ? '' : 'focus:bg-white'} `}/>
        </div>
    )
}
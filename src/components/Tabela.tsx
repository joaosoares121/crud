import Cliente from "../core/Cliente";
import { IconEdite, IconeEdicao, IconLixo } from "./Icones";

interface TabelaProps{
    clientes: Cliente[]
    //Não obrigo o cliente a passar as funções
    clienteSelecionado?: (Cliente : Cliente) => void 
    clienteExcluido?: (cliente: Cliente ) => void
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    function renderizarCabecalho() {
        return(
            
                <tr>
                    <th className="text-left p-4">Código</th>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Idade</th>
                    {exibirAcoes ? <th className="text-center p-4">Ações</th> : false}
                </tr>
           
        )
    }

    function rendarizarAcoes(cliente: Cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50 roun`}>{IconeEdicao}</button>
                ):false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50 roun`}>{IconLixo}</button>
                ):false}
                
            </td>
        )
    }
    

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-puple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                    {/* Só exibe se tiver passado ações */}
                    {exibirAcoes ? rendarizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800`}>
                {renderizarCabecalho()}
                </thead>
            <tbody>
                {renderizarDados()}
                </tbody>
            
        </table>
    )
    
}
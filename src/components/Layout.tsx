import Titulo from "./Titulo"

// Propriedades que espero receber no componente
interface LayoutProps{
    // titulo?: string    Se quiser que seja opcional
    titulo: string;
    children: any;
}

export default function Layout(props: LayoutProps){
    return (
        <div className={`flex flex-col w-2/3 bg-white text-gray-800 rounded-md`}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}
//Pega todas as exportações do componente
import * as Dialog from '@radix-ui/react-dialog';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { X } from 'lucide-react';


//Forma para criarmos nossas propriedades e deixar esse componente mais genérico
interface noteCardProps {
    note: {
        id: string
        date: Date
        content: string
    }
    onNoteDeleted: (id: string) => void
}

//Isso que fizemos de passar o note como parâmetro se chama desestruturação da função
//Isso é um recurso de JS
export function NoteCard({ note, onNoteDeleted }: noteCardProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className='text-left flex flex-col justify-start items-start rounded-md p-5 bg-slate-800 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
                <span className='text-sm font-medium text-slate-300'>
                    {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                </span>
                <p className='text-sm leading-6 text-slate-400'>
                    {note.content}
                </p>

                <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/50' />
                <Dialog.Content className='overflow-hidden inset-0 md:inset-auto fixed md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] md:h-[60vh] w-full bg-slate-700 md:rounded-md flex flex-col outline-none'>

                    <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
                        <X  className='size-5'/>
                    </Dialog.Close>

                    <div className='flex flex-1 flex-col gap-3 p-5'>
                        <span className='text-sm font-medium text-slate-300'>
                            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                        </span>
                        <p className='text-sm leading-6 text-slate-400'>
                            {note.content}
                        </p>
                    </div>

                    <button
                     type='button'
                     onClick={() => onNoteDeleted(note.id)}
                     className='w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group'
                    >
                      Deseja <span className='text-red-400 group-hover:underline'>apagar essa nota? </span> 
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

//GROUP -> é colocado no elemento PAI, quando eu quero fazer um hover apenas em um dos filhos desse pai
// eu coloco a propriedade group-hover:underline, no elemento desejato para o estilo

//Importante para centralizar um HTML ao centro do elemento
//Precisamos fazer um translate e transform de -50% para esqueda e para cima
//Isso baseado no tamanho do elemento, assim ele vai ficar centralizado da forma correta
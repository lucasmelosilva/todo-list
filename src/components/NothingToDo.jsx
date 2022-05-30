import nothingToDo from '../assets/nothingToDo.svg';

export function NothingToDo() {
  return (
    <div className='flex flex-col items-center'>
      <img src={nothingToDo} alt="Um homem e uma mulher se alongando" />
      <h2 className="text-xl text-zinc-400 font-medium">Você esta livre por hora</h2>
    </div>
  )
}
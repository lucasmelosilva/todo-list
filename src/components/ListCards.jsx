import { Card } from "./Card"

const db = [{
  "id": 1,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
}
  ,
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 2,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 3,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
},
{
  "id": 4,
  "title": "lista de tarefas",
  "content": "fazer o teste",
  "date": "2020 - 12 - 02"
}
]

export function ListCards() {
  return (
    <div className='w-full flex flex-col md:flex-wrap md:flex-row gap-2 p-4'>
      {
        db.map(({ id, title, content }) => <Card key={id} title={title} content={content} />)
      }
    </div>
  )
}
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let taskDB = [];

app.post('/', (request, response) => {
  const {text} = request.body;
  const addTask = {
    id: Date.now(),
    text: text.trim(),
    status: false,
  };

  taskDB.push(addTask);

  console.log('Отримано нове завдання:', addTask);
  response.json({ message: 'Отримано нове завдання' });
});

app.get('/', (request, response) => {
  response.send(JSON.stringify(taskDB));
});

app.delete('/', (request, response) => {
  taskDB = [];

  console.log('Базу завдань очищено');
  response.json({ message: 'Базу завдань очищено' });
});

app.put('/:id', (request, response) => {
  const taskID = Number(request.params.id);
  const index = taskDB.findIndex(item => item.id === taskID);

  taskDB[index].status = !taskDB[index].status;

  console.log(`Завдання "${taskDB[index].text}" виконано!!!`);
  response.json(taskDB[index]);
});

app.listen(port, () => {
  console.log(`Server UP http://localhost:${port}`);
});

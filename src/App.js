import React from 'react';
import './styles/App.css';
import PostItem from './components/PostItem/PostItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import ModalDelete from './components/ModalDelete/ModalDelete';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveDelete, setModalActiveDelete] = useState(false);

  const [idDelete, setIdDelete] = useState();

  const [items, setItems] = useState([
    {title: 'Заголовок 1',
     text: 'Текст 1',
     id: Date.now(),

  },
  {title: 'Заголовок 2',
  text: 'Текст 2',
  id: 2,

  },
  {title: 'Заголовок 3',
  text: 'Текст 3',
  id: 3,

  },
  {title: 'Заголовок 4',
  text: 'Текст 4',
  id:4,

  }
]);

function deleteItem (id){
  const newItems = items.filter((value)=> value.id !== id)
  console.log(id);
  setItems(newItems)
}

function callDelete(id){

// была нажата кнопка удалить в тудушке
  setIdDelete(id)
  setModalActiveDelete(true)
}
  

  return (
    <div className="App">
      <h1 className='header'>Header</h1>
      <main>


        {items.map((item) => {
          return <PostItem item={item} key={item.id} deleteItem={callDelete}/>  
        })   
        }

        
      <Button onClick={() => setModalActive(true)}/>
      <Button onClick={() => setModalActiveDelete(true)}/>
      </main>
      <Modal active={modalActive} setActive={setModalActive} setItems={setItems} items={items} />
      <ModalDelete 
        activeDelete={modalActiveDelete} 
        setActiveDelete={setModalActiveDelete}
        id={idDelete}
        deleteItem={deleteItem}      />
        
    </div>
  );
}

export default App;

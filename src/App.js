import React from 'react';
import './styles/App.css';
import PostItem from './components/PostItem/PostItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [items, setItems] = useState([
    {title: 'Заголовок 1',
     text: 'Текст 1',
     id: Date.now(),

  },
  {title: 'Заголовок 3',
  text: 'Текст 3',
  id: 2,

  },
  {title: 'Заголовок 4',
  text: 'Текст 4',
  id: 3,

  },
  {title: 'Заголовок 7',
  text: 'Текст 7',
  id:4,

  }
]);

function deleteItem (id){
  const newItems = items.filter((value)=> value.id!==id)
  setItems(newItems)
}

  return (
    <div className="App">
      <h1 className='header'>Header</h1>
      <main>


        {items.map((item) => {
          return <PostItem item={item} key={item.id} deleteItem={deleteItem}/>  
        })   
        }

        
        <Button onClick={() => setModalActive(true)}/>
      </main>
      <Modal active={modalActive} setActive={setModalActive} setItems={setItems} items={items} />
        
    </div>
  );
}

export default App;

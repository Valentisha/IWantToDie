import React from 'react';
import './styles/App.css';
import PostItem from './components/PostItem/PostItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import ModalDelete from './components/ModalDelete/ModalDelete';
import PlusIcon from './components/Icons/Plus';
import Search from './components/Search/Search';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveDelete, setModalActiveDelete] = useState(false);
  const [idRename, setIdRename] = useState();

  const [idDelete, setIdDelete] = useState();
  const [search, setSearch] = useState('');

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
  id: 4,

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

function callRename(id){
  setIdRename(id)
  setModalActive(true)
}
  

  return (
    <div className="App">
      <h1 className='header'><Search search={search} setSearch={setSearch}/></h1>
      <main>

        {search ? items.filter((value)=>{ 
          if (value.title.toLowerCase().indexOf(search.toLowerCase()) !== -1){
            return value
          }

        
        } ).map((item) => {
          return <PostItem callRename={callRename} item={item} key={item.id} deleteItem={callDelete}/>  
        })  : items.map((item) => {
          return <PostItem callRename={callRename} item={item} key={item.id} deleteItem={callDelete}/>  
        })   }
        {
        
        }

       
      </main>
      <PlusIcon onClick={() => setModalActive(true)}/> 

      {modalActive && 
        <Modal   setIdRename={setIdRename}
        idRename={idRename} 
        active={modalActive} 
        setActive={setModalActive} 
        setItems={setItems} 
        items={items} 
        // создание и удаление модалки каждый раз конструктором
  />

      }
      
      <ModalDelete 
        onClick={() => setModalActiveDelete(true)}
        activeDelete={modalActiveDelete} 
        setActiveDelete={setModalActiveDelete}
        id={idDelete}
        deleteItem={deleteItem}      
        />
        
    </div>
  );
}

export default App;

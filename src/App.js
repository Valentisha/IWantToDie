import React from 'react';
import './styles/App.css';
import PostItem from './components/PostItem/PostItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [items, setItems] = useState(['Заголовок']);
//item
// {
//  title: '',
//  text: ''
// }


  return (
    <div className="App">
      <h1 className='header'>Header</h1>
      <main>


        {items.map((item) => {
          return <PostItem title={item}/>  
        })   
        }

        
        <Button onClick={() => setModalActive(true)}/>
      </main>
      <Modal wasd="wasd" active={modalActive} setActive={setModalActive} setItems={setItems} items={items} />
        
    </div>
  );
}

export default App;

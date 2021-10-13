import React from 'react';
import '../ModalDelete/modal.css'

const ModalDelete = ({activeDelete, setActiveDelete, id, deleteItem}) => {
    return ( 
        <div className={activeDelete ? "modal__delete active" : "modal__delete"} onClick={() => setActiveDelete(false)}>
            <div className={activeDelete ? "modal__content-delete active" : "modal__delete"} onClick={e => e.stopPropagation()}>
                <p>Вы действительно хотите удалить эту задачу? </p>
                <button onClick={()=> {
                    deleteItem(id);
                    setActiveDelete(false);
                }}>Удалить</button>
                <button onClick={()=>setActiveDelete(false)}>Закрыть</button>
            </div>
            
        </div>

    )
};

export default ModalDelete;
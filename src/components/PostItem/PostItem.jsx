import React from "react";

// [
//   'TODO1',
//   'TODO2',
//   'TODO3',
// ]


//   {
//     TITLE:''
//     TEXT:''
//   },

let a = {
  asdf: 1234
}

const PostItem = ({item, deleteItem}) => {
    return (
    <div className='post__high'>
        <div className='post__content'>
          <div className='post__title'>
            <b>{item.title}</b>
          </div>
          <div className='post__low'>
            <div className='post__action'>{item.text}</div>
            <button onClick={() => deleteItem(item.id)}>Удалить</button>
          </div>
         

          
        </div>

        
    </div>
    )

}

export default PostItem;
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
const PostItem = ({item, deleteItem, callRename}) => {
    return (
    <div onClick={()=> {callRename(item.id)}} className='post__high'>
        <div className='post__content'>
          <div className='post__title'>
            <b>{item.title}</b>
          </div>
          <div className='post__low'>
            <div className='post__action'>{item.text}</div>
            <button onClick={(e) => {e.stopPropagation(); deleteItem(item.id)}}>Удалить</button>
          </div>
         

          
        </div>

        
    </div>
    )

}

export default PostItem;
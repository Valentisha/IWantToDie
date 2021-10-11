import React from "react";

const PostItem = ({title}) => {
    return (
    <div className='post__high'>
        <div className='post__content'>
          <div className='post__title'>
            <strong>{title}</strong>
          </div>
          <div className='post__low'>
            <div className='post__action'>Action (what you need to do?)</div>
            <button>Delete</button>
          </div>

          
        </div>

        
    </div>
    )

}

export default PostItem;
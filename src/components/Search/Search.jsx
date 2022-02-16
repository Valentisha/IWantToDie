import React, { useState } from "react";


export default function Search({search, setSearch}) {
  

    return (
        <div>
            <div className='form'>
                <input value={search} onChange={(e)=> setSearch(e.target.value)}
                type='text'
                placeholder='Поиск...'
                className='search__input'
                />
            </div>
               
        </div>
    )
}

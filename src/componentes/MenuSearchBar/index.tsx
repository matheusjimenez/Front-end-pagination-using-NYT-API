import React from 'react';
import { Get } from '../../infra/axios';
import './style.css';

const MenuSearchBar = () => {
    return (
        <div className='app_menuSearchBar_container'>
            <input
                className='app_menuSearchBar_input'
                type='search'
                placeholder='Pesquise aqui...'
            />
            <button onClick={async ()=>{
                console.log(await Get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?'));
            }}></button>
        </div>
    )
}

export { MenuSearchBar }
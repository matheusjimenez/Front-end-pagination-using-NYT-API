import React from "react";
import './style.css';

interface ListItemProps{
    categoryText: string;
    categoryLastUpdate: string;
    categoryLastPosting: string;
    categoryCreatedOn: string;
    redirectLink:string;
    handleClick: ()=> void;
}

const ListItem = ({
    categoryText = 'Combined Print & E-Book Fiction', 
    categoryLastUpdate = '2000-00-00', 
    categoryLastPosting = '2000-00-00', 
    categoryCreatedOn= '2000-00-00',
    redirectLink = 'google.com',
    handleClick
} : ListItemProps) =>{
    return(
        <tr className='app_listitem_container'>
            <td><a onClick={handleClick}>{categoryText}</a><span> Atualizado em {categoryLastUpdate}</span></td>
            <td><p>Última publicação: {categoryLastPosting}</p></td>
            <td><p>Publicação mais antiga: {categoryCreatedOn}</p></td>
        </tr>
    );
}

export { ListItem }
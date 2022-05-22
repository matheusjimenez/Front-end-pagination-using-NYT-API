import React from "react";
import './style.css';

interface ListItemProps{
    categoryText: string;
    categoryLastUpdate: string;
    categoryLastPosting: string;
    categoryCreatedOn: string;
    redirectLink:string;
}

const ListItem = ({
    categoryText = 'Combined Print & E-Book Fiction', 
    categoryLastUpdate = '2000-00-00', 
    categoryLastPosting = '2000-00-00', 
    categoryCreatedOn= '2000-00-00',
    redirectLink = 'google.com'
} : ListItemProps) =>{
    return(
        <div className='app_listitem_container'>
            <a href={redirectLink}>{categoryText}</a>
            <span>Atualizado em {categoryLastUpdate}</span>
            <p>Última publicação: {categoryLastPosting}</p>
            <p>Publicação mais antiga: {categoryCreatedOn}</p>
        </div>
    );
}

export { ListItem }
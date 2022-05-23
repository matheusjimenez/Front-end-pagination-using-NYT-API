import { HTMLAttributes, MouseEventHandler } from 'react';
import './style.css';

interface PaginationIndexProps {
    displayedNumber: string;
    selectedIndex?: boolean;
}

const PaginationIndex = ({ displayedNumber = '1', selectedIndex = false }: PaginationIndexProps) => {
    return (
        <div
        className={`app_paginationindex_container ${selectedIndex && 'app_paginationindex_selectedIndex'}`}
        >
            <span>{displayedNumber}</span>
        </div>
    );
}

export { PaginationIndex };
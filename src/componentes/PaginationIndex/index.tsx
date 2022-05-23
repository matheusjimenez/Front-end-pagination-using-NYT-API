import './style.css';

interface PaginationIndexProps {
    displayedNumber: string;
    selected: boolean;
}

const PaginationIndex = ({ displayedNumber = '1', selected = false }: PaginationIndexProps) => {
    return (
        <div
            className={`app_paginationindex_container ${selected && 'app_paginationindex_selectedIndex'}`}
        >
            <span>{displayedNumber}</span>
        </div>
    );
}

export { PaginationIndex };
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import './style.css';

interface BookListProps {
    title: string;
    author: string,
    decription: string,
    publisher: string,
    rank: string,
    price: string,
    amazonLink: string,
    frontCover: string,
    customStyle: string
}

const BookListItem = ({
    title,
    author,
    decription,
    publisher,
    rank,
    price,
    amazonLink,
    frontCover,
    customStyle
}: BookListProps) => {
    return (
        <>
            <Card className={`app_booklist_container ${customStyle}`} sx={{ maxWidth: '90%', display: 'flex', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={frontCover}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            by {author}
                        </Typography>
                        <span>{decription}</span>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Editora: {publisher}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Rank {rank}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: 1, pb: 1 }}>
                        <a href={amazonLink} target='_blank'>Comprar por {price}</a>
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export { BookListItem }
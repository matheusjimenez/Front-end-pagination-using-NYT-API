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
    frontCover: string
}

const BookListItem = ({
    title,
    author,
    decription,
    publisher,
    rank,
    price,
    amazonLink,
    frontCover
}: BookListProps) => {
    return (
        <>
            {/* <Card className='app_booklist_container' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://http2.mlstatic.com/D_NQ_NP_617917-MLB32140972589_092019-O.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {decription}
        </Typography>
      </CardContent>
      <CardActions>
        <td><a href={amazonLink} target='_blank'>Comprar por {price}</a></td>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}

            <Card className='app_booklist_container' sx={{ maxWidth: 1040, display: 'flex' }}>
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
            {/* <tr className='app_booklist_container'>
                <td><img src={frontCover} /></td>
                <td><h2>{title}</h2></td>
                <td><span>by {author}</span></td>
                <td><span>{decription}</span></td>
                <td><span>Rank{rank}</span></td>
                <td><a href={amazonLink} target='_blank'>Comprar por {price}</a></td>
            </tr> */}
        </>
    )
}

export { BookListItem }
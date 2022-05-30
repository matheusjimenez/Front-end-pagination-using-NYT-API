import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react'
import './App.css'
import { BookListItem } from './componentes/BookListItem';
import { CategoryHeaderMenu } from './componentes/CategoryHeaderMenu'
import { ListItem } from './componentes/ListItem';
import { NavBar } from './componentes/NavBar'
import { PaginationIndex } from './componentes/PaginationIndex';
import { Get } from './infra/axios';

interface Category {
  display_name: string;
  list_name: string;
  newest_published_date: string;
  oldest_published_date: string;
  list_name_encoded: string;
}
interface ResponseData<T> {
  results: T[];
}

interface BookList {
  list_name: string,
  display_name: string;
  bestsellers_data: Date;
  published_date: Date;
  rank: string;
  amazon_product_url: string;
  author: string;
  description: string;
  book_image: string;
  price: string;
  publisher: string;
  title: string;
}

function App() {
  const listNameEndpoint = 'https://api.nytimes.com/svc/books/v3/lists/names.json?'
  const listBooks = `https://api.nytimes.com/svc/books/v3/lists/${new Date().toISOString().slice(0,10)}/`
  const [category, setCategory] = useState('Gêneros');
  const [categoryListNames, setCategoryListNames] = useState<Category[]>([]);
  const [bookList, setBookList] = useState<BookList[]>([]);
  const [amountDataToDisplay, setAmountDataToDisplay] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesIndex, setPagesIndex] = useState([]);
  const [categoryPaginated, setCategoryPaginated] = useState([]);
  const [loading, setLoader] = useState(true);

  const handlePageReset = () => {
    setAmountDataToDisplay(5);
    setCurrentPage(1);
    setPagesIndex([]);
    setCategoryPaginated([]);
  }

  const handleListClick = (categoryName: string, displayName: string) => {
    setLoader(true);
    setCategory(displayName);
    try {
      Get<any>(`${listBooks + categoryName}.json?`).then(response => {
        setBookList(response.data.results.books);
        console.log(response);
      }).finally(() => {
        setLoader(false);
      })
    } catch (err) {
      alert(err);//todo create method to throw erros
    }
  }

  const handleSelectChange = (value) => {
    setAmountDataToDisplay(value);
  }

  useEffect(() => {
    setLoader(true);
    try {
      Get<ResponseData<Category>>(listNameEndpoint).then(response => {
        setCategoryListNames(response.data.results);
      }).finally(() => {
        setLoader(false);
      })
    } catch (err) {
      alert(err);
    }
  }, []);

  useEffect(() => {
    let responseLength = categoryListNames.length;
    if (responseLength) {
      let referenceArray = []
      for (let index = 1; index <= Math.ceil(responseLength / amountDataToDisplay); index++) {
        referenceArray.push(index)
      }
      setPagesIndex(referenceArray);
      setCategoryPaginated(categoryListNames.slice(0, amountDataToDisplay));
    }
  }, [amountDataToDisplay, categoryListNames]);

  useEffect(() => {
    let indexOfLastPage = currentPage * amountDataToDisplay;
    let indexOfFirstPage = indexOfLastPage - amountDataToDisplay;
    setCategoryPaginated(categoryListNames.slice(indexOfFirstPage, indexOfLastPage))
  }, [currentPage])

  return (
    <>
      <NavBar />
      <CategoryHeaderMenu
        mainText={category}
        onSelectChange={handleSelectChange}
      />
      {loading && <LinearProgress />}
      <table>
        <tbody>
        {bookList.length > 0 &&
          bookList.map((item, index)=>{
            return <BookListItem 
            amazonLink={item.amazon_product_url}
            author={item.author}
            decription ={item.description}
            frontCover={item.book_image}
            price={item.price}
            publisher={item.publisher}
            rank={item.rank}
            title={item.title}
            key={'bookId'+index}
            />
          })
        }
          {
            categoryPaginated.map((item, index) => {
              return <ListItem
                categoryCreatedOn={item.oldest_published_date}
                categoryLastPosting={item.newest_published_date}
                categoryLastUpdate={item.newest_published_date}
                categoryText={item.display_name}
                redirectLink=''
                key={`itemNumber${index}`}
                handleClick={() => { handleListClick(item.list_name_encoded, item.display_name) }}
              />
            }
            )
          }
        </tbody>
      </table>
      <div className='app_main_paginationBody'>
        {pagesIndex.map((element, index) => {
          return (
            <div
              key={`paginationIndexKey${index}`}
              onClick={() => { setCurrentPage(element) }}>
              <PaginationIndex
                displayedNumber={element}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

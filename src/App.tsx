import { useEffect, useState } from 'react'
import './App.css'
import { CategoryHeaderMenu } from './componentes/CategoryHeaderMenu'
import { ListItem } from './componentes/ListItem';
import { NavBar } from './componentes/NavBar'
import { PaginationIndex } from './componentes/PaginationIndex';
import { Get } from './infra/axios';

interface CategoryProps {
  display_name: string;
  list_name: string;
  newest_published_date: string;
  oldest_published_date: string;
}
interface ResponseData {
  results: CategoryProps[]
}

function App() {
  const listNameEndpoint = 'https://api.nytimes.com/svc/books/v3/lists/names.json?'
  const [category, setCategory] = useState('Gêneros');
  const [categoryListNames, setCategoryListNames] = useState<CategoryProps[]>([]);
  const [amountDataToDisplay, setAmountDataToDisplay] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesIndex, setPagesIndex] = useState([]);


  const handleSelectChange = (value) => {
    setAmountDataToDisplay(value);
  }

  useEffect(() => {
    try {
      Get<ResponseData>(listNameEndpoint).then(response => {
        setCategoryListNames(response.data.results);
      })
    } catch (err) {
      alert(err);
    } finally {
    }
  }, []);

  useEffect(()=>{
    let responseLength = categoryListNames.length;
    if (responseLength) {
      let referenceArray = []
      for (let index = 1; index <= Math.ceil(responseLength / amountDataToDisplay); index++) {
        referenceArray.push(index)
      }
      setPagesIndex(referenceArray);
    }
  }, [amountDataToDisplay])

  return (
    <>
      <NavBar />
      <CategoryHeaderMenu
        mainText={category}
        onSelectChange={handleSelectChange}
      />
      <table>
        <tbody>
          {
            categoryListNames.slice(0, amountDataToDisplay).map((item, index) => {
              return <ListItem
                categoryCreatedOn={item.oldest_published_date}
                categoryLastPosting={item.newest_published_date}
                categoryLastUpdate={item.newest_published_date}
                categoryText={item.display_name}
                redirectLink=''
                key={`itemNumber${index}`}
              />
            }
            )
          }
        </tbody>
      </table>
      <div className='app_main_paginationBody'>
        {pagesIndex.map((element, index) => {
          return (
            <PaginationIndex
              key={`paginationIndexKey${index}`}
              displayedNumber={element}
              selected={false}
            />
          )
        })}
      </div>
    </>
  )
}

export default App

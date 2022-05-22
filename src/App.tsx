import { useEffect, useState } from 'react'
import './App.css'
import { CategoryHeaderMenu } from './componentes/CategoryHeaderMenu'
import { ListItem } from './componentes/ListItem';
import { NavBar } from './componentes/NavBar'
import { Get } from './infra/axios';

interface CategoryProps{
  display_name: string;
  list_name: string;
  newest_published_date: string;
  oldest_published_date: string;
}
interface ResponseData{
  results: CategoryProps[]
}

function App() {
  const listNameEndpoint = 'https://api.nytimes.com/svc/books/v3/lists/names.json?'
  const [category, setCategory] = useState('Gêneros');
  const [categoryListNames, setCategoryListNames] = useState<CategoryProps[]>([]);

  useEffect(() => {
    try {
      Get<ResponseData>(listNameEndpoint).then(response => {
        setCategoryListNames(response.data.results);
      })
    } catch (err) {
      alert(err);
    } finally {
      console.log(categoryListNames);
    }
  }, []);

  return (
    <>
      <NavBar />
      <CategoryHeaderMenu mainText={category} />
      <table>
        <tbody>
          {
            categoryListNames.map((item, index) => {
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
    </>
  )
}

export default App

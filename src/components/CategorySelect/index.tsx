import './styles'
import { ScrollCont } from './styles'
import { categories } from '../../Utils/categories'
import Category from '../Category'

type Props = {
  categorySelected: string;
  setCategory: (categoryId : string) => void;
  hasCheckBox?: boolean;
}

export default function CategorySelect({ categorySelected, setCategory, hasCheckBox = false, } : Props) {
  return (
  <ScrollCont
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{paddingRight:40}}
  >
    {
      categories.map(category =>(
        <Category
        key={category.id}
        title={category.title}
        icon={category.icon}
        checked={category.id === categorySelected}
        onPress={()=>{setCategory(category.id)}}
        hasCheckBox={hasCheckBox}
        />
      ))
    }

  </ScrollCont>
  )
}
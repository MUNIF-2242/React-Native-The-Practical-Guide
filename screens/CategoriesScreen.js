import { FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'

function CategoriesScreen({ navigation }) {
  function onPressHandler() {
    navigation.navigate('Meals Overview')
  }

  function renderCategoryItem(itemData) {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    )
  }
  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </>
  )
}

export default CategoriesScreen

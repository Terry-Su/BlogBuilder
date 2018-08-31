import { cloneDeep } from "../../shared/utils/lodash";

export const combineLocalCategoryAndIncomingCategory= (localCategory, category) => {
  try {
    let clonedCategory = cloneDeep(category)

    recurToCombine( clonedCategory, localCategory )
    return clonedCategory
  } catch(e) {
    console.log(e)

    return category
  }

  function recurToCombine( clonedCategory, localCategory ) {
      if ( clonedCategory && localCategory ) {
        const { shouldExpand, name } = clonedCategory
        const { shouldExpand: shouldExpandLocal, name: nameLocal } = localCategory

        if ( name === nameLocal ) {
          if (shouldExpand !== shouldExpandLocal ) {
            clonedCategory.shouldExpand = shouldExpandLocal
          }
          const { categories } = clonedCategory
          const { categories: categoriesLocal } = localCategory
          categories.map( ( category, index ) => recurToCombine( category, categoriesLocal[index] ) )
        }
      }
  }
}
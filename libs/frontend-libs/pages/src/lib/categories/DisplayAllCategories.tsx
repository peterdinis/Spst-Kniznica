import { Header } from '@spst-kniznica-project/frontend-libs/shared'
import AllCategories from "libs/frontend-libs/categories/src/lib/AllCategories"

function DisplayAllCategories() {
  return (
    <>
      <Header name="Všetky Kategórie" />
      <AllCategories />
    </>
  )
}

export default DisplayAllCategories
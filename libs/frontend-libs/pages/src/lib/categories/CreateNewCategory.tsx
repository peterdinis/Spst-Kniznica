import { CreateNewCategoryForm } from '@spst-kniznica-project/frontend-libs/categories'
import { Header } from '@spst-kniznica-project/frontend-libs/shared'

function CreateNewCategory() {
  return (
    <>
      <Header name="Tvorba novej kategórie" />
      <CreateNewCategoryForm />
    </>
  )
}

export default CreateNewCategory
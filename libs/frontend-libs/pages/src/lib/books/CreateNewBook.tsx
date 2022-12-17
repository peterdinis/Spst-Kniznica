import { CreateNewBookForm } from '@spst-kniznica-project/frontend-libs/books'
import { Header } from '@spst-kniznica-project/frontend-libs/shared'

function CreateNewBook() {
  return (
    <>
      <Header name="Vytvorenie novej knihy" />
      <CreateNewBookForm />
    </>
  )
}

export default CreateNewBook
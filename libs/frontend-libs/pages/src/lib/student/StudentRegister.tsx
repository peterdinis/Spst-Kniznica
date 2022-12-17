import { Header } from '@spst-kniznica-project/frontend-libs/shared'
import { StudentRegisterForm } from '@spst-kniznica-project/frontend-libs/student'


function StudentRegister() {
  return (
    <>
      <Header name="Registrácia žiak" />
      <StudentRegisterForm />
    </>
  )
}

export default StudentRegister
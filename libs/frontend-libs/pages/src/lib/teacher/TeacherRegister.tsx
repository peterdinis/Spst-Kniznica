import { Header } from '@spst-kniznica-project/frontend-libs/shared'
import { TeacherRegisterForm } from '@spst-kniznica-project/frontend-libs/teacher'


function TeacherRegister() {
  return (
    <>
      <Header name="Registrácia učiteľ"/> 
      <TeacherRegisterForm />
    </>
  )
}

export default TeacherRegister
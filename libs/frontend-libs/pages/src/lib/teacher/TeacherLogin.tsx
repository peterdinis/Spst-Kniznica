import { Header } from '@spst-kniznica-project/frontend-libs/shared'
import { TeacherLoginForm } from '@spst-kniznica-project/frontend-libs/teacher'

function TeacherLogin() {
  return (
    <>
      <Header name="Prihlásenie učiteľ"/> 
      <TeacherLoginForm />
    </>
  )
}

export default TeacherLogin
import React from 'react'

function TeacherProfile() {
  return (
    <>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex mt-1 flex-wrap">
          <img
            alt="me"
            className="lg:w-1/2 w-full object-cover object-center rounded-3xl border border-gray-500"
            src="https://picsum.photos/200/300"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-red-900 text-3xl title-font font-medium mb-1">
              uuuu
            </h1>
            <p className="leading-relaxed text-2xl m-3 text-gray-700">
              <a href="/student/profile/update">Upraviť Profil</a>
            </p>
            <hr />
            <p className="leading-relaxed text-2xl m-3 text-gray-700">
              Moje požičané knihy: iiiii
            </p>
            <hr />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TeacherProfile
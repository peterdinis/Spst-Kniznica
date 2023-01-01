import { Header } from "@spst-kniznica-project/frontend-libs/shared"

function RegisterTeacherForm() {
  return (
    <>
    <Header name="Prihlásenie žiak" />
    <form
       /*  onSubmit={handleSubmit((params: RegisterUserI) => {
          queryClient.setQueryData(["studentEmail"], params.email);
          queryClient.setQueriesData(["params"], params);

          mutation.mutate(params);
        })} */
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Meno
              </label>
              <input
                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Meno"
                type="text"
                autoFocus
                placeholder="Meno"
               /*  {...register("name", {
                  required: true,
                  minLength: 5,
                  min: 5
                })} */
              />

             {/*  <p className="text-red-800">
                {errors.name && errors.name.message}
              </p> */}
            </div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              autoFocus
              type="email"
              placeholder="Email"
              /* {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })} */
            />

           {/*  <p className="text-red-800">
              {errors.email && errors.email.message}
            </p> */}
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Heslo
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="password"
           /*    type={passwordShown ? "text" : "password"} */
              placeholder="******************"
              autoFocus
             /*  {...register("password", {
                required: true,
                minLength:5,
                min: 5
              })} */
            />
          {/*   <p className="text-red-800">
              {errors.password && errors.password.message}
            </p> */}
            {/* <button onClick={togglePassword}>Zobraziť heslo</button> */}
          </div>

          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Potvrdenie hesla
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Potvrdenie hesla"
              autoFocus
             /*  type={passwordShown ? "text" : "password"}
              placeholder="******************"
              {...register("confirm", {
                required: true,
                validate: (val: string) => {
                  if(watch("password") != val) {
                    return "Heslá sa nezhodujú..."
                  }
                }
              })} */
            />
          {/*   <p className="text-red-800">
              {errors.confirm && errors.confirm.message}
            </p> */}
            {/* <button onClick={togglePassword}>Zobraziť heslo</button> */}
          </div>

          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Študentské Id
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Potvrdenie hesla"
              /* placeholder={data}
              {...register("studentProfileId", {
                required: true,
              })} */
            />
           {/*  <button onClick={togglePassword}>Zobraziť heslo</button> */}
          </div>
          <div>
            <button className="reg registerButton" type="submit">
              Registrácia
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/login"
              >
                Prihlásenie tu
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default RegisterTeacherForm
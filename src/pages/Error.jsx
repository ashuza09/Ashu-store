import { useRouteError, Link } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error.status);
  if(error.status === 404){
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <p className="text-center font-semibold text-primary text-9xl">{error.status}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-lg leading-7">Sorry we couldn't find you page</p>
        <div><Link to={'/'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</Link></div>
      </main>
    )
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">There was an error</h4>
    </main>
  )
}
export default Error
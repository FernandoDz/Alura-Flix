import AddButton from './AddButton'
export default function Menu() {

  const  HandleClick=()=>{
  console.log('hola')
  }
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    
    <img className="font-semibold text-xl tracking-tight" src="src\assets\image 1.png"/>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      
    </div>
    <div>
      <><AddButton label='Agregar' onClick={HandleClick}/></>
    </div>
  </div>
</nav>
    </>
  );
}



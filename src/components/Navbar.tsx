import { Link } from 'react-router'

function Navbar() {
   return (
      <section className='bg-neutral-700 text-white py-4'>
         <nav className='container mx-auto flex items-center justify-between'>
            <Link to={'/'} className='text-xl font-bold tracking-widest'>
               ELN.
            </Link>
            <div>11</div>
         </nav>
      </section>
   )
}

export default Navbar

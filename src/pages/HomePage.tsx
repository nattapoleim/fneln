import axios from 'axios'
import { useEffect, useState } from 'react'

interface CourseType {
   category: string
   description: string
   id: number
   image: string
   lectures: [
      {
         duration: string
         id: number
         title: string
      },
   ]
   name: string
}

const HomePage = () => {
   const url = import.meta.env.VITE_API_URL
   const [courses, setCourses] = useState<CourseType[]>([])

   useEffect(() => {
      axios
         .get(url + 'courses')
         .then((res) => {
            setCourses(res.data)
         })
         .catch((err) => console.error('error cannot fectch :', err))
   }, [url])

   return (
      <div>
         {courses.map((c) => (
            <h2 key={c.id} className="font-bold text-blue-600">
               {c.name}
            </h2>
         ))}
      </div>
   )
}

export default HomePage

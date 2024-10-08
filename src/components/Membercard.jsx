import { FaChevronRight } from 'react-icons/fa'
import image from '../../public/image/images.jpg'
import image1 from '../../public/image/image1.png'
import image2 from '../../public/image/image2.png'


const Mambercard = ({job, total_members}) => {
  return (
    <div className='p-6 bg-white rounded-xl space-y-4'>
       <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold text-gray-700'>{total_members}</h1>
        <FaChevronRight/>
       </div>
       <div>
        <p className=' test-sm text-gray'>{job}</p>
        <div className='relative flex w-fit'>
            <img src={image}alt="" className='w-8 h-8 rounded-full' />
            <img src={image1}alt="" className='w-8 h-8 rounded-full absolute -right-5' />
            <img src={image2}alt="" className='w-8 h-8 rounded-full absolute -right-10' />
           </div>
        </div>
        <div className='flex gap-2 text-gray-400 font-semibold space-x-4'>
          <div className='text-xl font-bold text-gray-400'>
            <h1>Olatunde</h1>
            <h1>Ibrahim</h1>
            <h1>Olayinka</h1>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis ipsam adipisci iste, deserunt laborum repudiandae nostrum quis ipsum in voluptatum quidem culpa iusto a sequi at libero earum hic.</div>
        </div>
    </div>
  )
}

export default Mambercard
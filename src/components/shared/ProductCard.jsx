import { Link } from 'react-router-dom'
import Button from './Button'
import Img from '../shared/Img'

const ProductCard = ({ item }) => {


  return (
    <div className="w-[350px] rounded-lg shadow-box p-5 group">
      <Link
        to='/product/'
        className='flex flex-col items-center '
      >
        <p className="font-semibold text-lg">
          {item?.title.split(' ').slice(0, 3).join(' ')}
          {item?.title.split(' ').length > 3 ? ' ...' : ''}
        </p>

        <p>
          <span className='text-red-400 '>Price $ </span>
          {item?.price}
        </p>

        <Img
          src={item?.image}
          className="object-contain w-[300px] h-[300px] my-10 group-hover:scale-105 duration-300 transition-all"
        />

        <Button
          btnType={'button'}
          btnTitle={"Add to cart"}
          btnLink={"/product/"}

        />
      </Link>
    </div>
  )
}

export default ProductCard

import { FullScreenIcon } from './Icons'
import { type ProductImagenType } from '../types.d'

export const PreviewProduct = ({ image }: { image: ProductImagenType }) => {
  return (
    <>
      <div className='flex items-center align-middle justify-center'>
        <div className="flex justify-center items-center relative w-auto">
          <div className="bg-black w-[50px] h-[40px] rounded-full flex justify-center items-center text-center text-white absolute right-0 top-0">
            <span className=" text-ellipsis text-sm">Sold out</span>
          </div>
          <img alt="" className="h-max w-[300px]" src={image} />
          <div className="bg-black w-[30px] h-[30px] rounded-full flex justify-center items-center text-center text-white absolute bottom-0 left-0 hover:scale-125 transition-all">
            <FullScreenIcon />
          </div>
        </div>
      </div>
    </>
  )
}

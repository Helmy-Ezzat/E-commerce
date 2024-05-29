import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product?.id}`}>
      <div className="border shadow-md p-4 rounded-md mb-5">
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={product?.image || '/assets/image.png'}
            alt="Product Image"
            width={202}
            height={172}
          />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-green-600 font-sans">فلاش سيل</div>
          <div className="flex items-center gap-1">
            <span className="text-orange-500">★ ★ ★ ★ ★</span>
            <span className="text-gray-500 text-sm">
              {product?.rating.rate}
            </span>
          </div>
        </div>
        <p className="text-gray-700 font-sans text-sm mt-2 line-clamp-2">
          {product?.description}
        </p>
        <div className="flex justify-between mt-2">
          <span className="text-cerulean font-sans">{product?.price} ر.س</span>
          <span className="font-sans">424.50 ر.س</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

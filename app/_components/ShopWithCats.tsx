import Image from 'next/image'
import React from 'react'

interface ShopWithCatsProps {}

const ShopWithCats: React.FC<ShopWithCatsProps> = () => {
  return (
    <section className="bg-blue_gray py-10 md:py-20 flex flex-col items-center justify-center">
      <h2 className="font-sans text-4xl font-semibold leading-10 text-center text-[#191C1F] mb-6">
        تسوق من أقسامنا
      </h2>
      <div className="max-w-[1300px]  mx-auto gap-5 flex flex-wrap justify-around">
        <ShopCategoryCard
          imageSrc="/assets/shopWith/image-1.png"
          title="التليفزيونات والصوتيات"
        />
        <ShopCategoryCard
          imageSrc="/assets/shopWith/image-2.png"
          title="التليفزيونات والصوتيات"
        />
        <ShopCategoryCard
          imageSrc="/assets/shopWith/image-3.png"
          title="التليفزيونات والصوتيات"
        />
        <ShopCategoryCard
          imageSrc="/assets/shopWith/image-5.png"
          title="التليفزيونات والصوتيات"
        />
        <ShopCategoryCard
          imageSrc="/assets/shopWith/image-5.png"
          title="التليفزيونات والصوتيات"
        />
        <ShopCategoryCard
          imageSrc="/assets/shopWith/image-2.png"
          title="التليفزيونات والصوتيات"
        />
      </div>
    </section>
  )
}

interface ShopCategoryCardProps {
  imageSrc: string
  title: string
}

const ShopCategoryCard: React.FC<ShopCategoryCardProps> = ({
  imageSrc,
  title,
}) => {
  return (
    <div className="bg-white py-6 px-3 mb-4 mx-2 md:mx-0">
      <Image src={imageSrc} width={148} height={148} alt="Category Image" />
      <p className="font-sans text-center mt-3">{title}</p>
    </div>
  )
}

export default ShopWithCats

import React from 'react'
import Image from 'next/image'

const Banners: React.FC = () => {
  return (
    <section className="max-w-screen-1xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row gap-6 md:gap-12">
      <Image
        src="/assets/banners/gradient-background-cyber-monday-sales_52683-142802 1.png"
        width={800}
        height={587}
        alt="Fast Cart"
      />
      <div className="flex flex-col gap-8">
        <Image
          src="/assets/banners/pngtree-ecommerce-banner-planning-segmentation-selection-image_1316202 1.png"
          width={665}
          height={290}
          alt="Fast Cart"
        />
        <Image
          src="/assets/banners/banner-e-commerce1.png"
          width={665}
          height={257}
          alt="Fast Cart"
        />
      </div>
    </section>
  )
}

export default Banners

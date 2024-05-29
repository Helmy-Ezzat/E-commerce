import React from 'react'
import {
  CreditCardIcon,
  HeadphonesIcon,
  PackageIcon,
  TrophyIcon,
} from './Icons/Icons'

// Define the props type for FeatureItem component
interface FeatureProps {
  icon: JSX.Element
  title: string
  description: string
}

const Features: React.FC = () => {
  return (
    <section className="bg-blue_gray py-3 flex justify-center items-center">
      <div className="flex flex-col gap-10 justify-center md:flex-row md:py-10">
        <FeatureItem
          icon={<CreditCardIcon />}
          title="توصيل سريع"
          description="توصيل في ٢٤ ساعة"
        />
        <FeatureItem
          icon={<HeadphonesIcon />}
          title="خدمة عملاء ممتازة"
          description="دعم على مدار الساعة"
        />
        <FeatureItem
          icon={<PackageIcon />}
          title="منتجات عالية الجودة"
          description="ضمان جودة المنتجات"
        />
        <FeatureItem
          icon={<TrophyIcon />}
          title="ضمان الرضا"
          description="ضمان استرجاع الأموال"
        />
      </div>
    </section>
  )
}

export default Features

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white w-[18rem] flex gap-3 p-4">
      {icon}
      <div className="flex flex-col">
        <span className="font-sans">{title}</span>
        <span className="text-gray-600 text-sm font-sans">{description}</span>
      </div>
    </div>
  )
}

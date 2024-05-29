import Banners from './_components/Banners'
import Deals from './_components/Deals '
import Featured from './_components/SuggestedProducts'
import Features from './_components/Features'
import ShopNow from './_components/ShopNow'
import ShopWithCats from './_components/ShopWithCats'

export default function Home() {
  return (
    <div className="mt-8 flex flex-col gap-8">
      <Banners />
      <Features />
      <Deals />
      <ShopWithCats />
      <Featured />
      <ShopNow />
    </div>
  )
}

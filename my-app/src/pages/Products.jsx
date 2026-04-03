import { ProdCard } from "../components/product/ProdCard";
import Rating from "../components/product/Rating";
import ArrowRightBtn from "../assets/buttons/arrowRightBtn.svg";
import ArrowLeftBtn from "../assets/buttons/arrowLeftBtn.svg";
export default function Products() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full px-4 space-y-4">
        <div className="h-[70px] w-full flex items-center">
        <h1 className="text-white text-[32px] font-nunito font-bold">Products</h1>
      </div>

        <div className="h-[340px] w-full bg-[#4880FF] rounded-[14px] border-[0.5px] border-gray-300/10 bg-[url('/images/background/Pattern.png')] flex items-center justify-between">
          <div className="h-full w-[100px] flex items-center justify-center">
            <div className="h-[41px] w-[41px] bg-[#F4F4F4]/[0.73] rounded-full flex items-center justify-center cursor-pointer">
              <img src={ArrowLeftBtn} alt="" />
            </div>
          </div>
          
          <div className="w-full h-full bg-[url('/images/bg-lines.png')] bg-cover bg-no-repeat bg-center rounded-2xl flex flex-col px-12 py-12 font-nunito text-white">
            <p className="text-[16px] font-semibold">September 12-22</p>

            <h1 className="text-[42px] font-extrabold leading-tight mt-3">
              Enjoy free home
            </h1>
            <h1 className="text-[42px] font-extrabold leading-tight -mt-1">
              delivery in this summer
            </h1>

            <p className="text-[16px] mt-5 opacity-90">
              Designer Dresses - Pick from trendy Designer Dress.
            </p>

            <div className="h-[70px] w-full items-center flex">
              <button className="bg-[#FF8E4E] mt-8 w-[170px] h-[50px] rounded-[11px] font-semibold text-white">
              Get Started
            </button>
            </div>
          </div>


          <div className="h-full w-[100px] flex items-center justify-center">
            <div className="h-[41px] w-[41px] bg-[#F4F4F4]/[0.73] rounded-full flex items-center justify-center cursor-pointer">
              <img src={ArrowRightBtn} alt="" />
            </div>
          </div>
        </div>

          <div className="h-[400px] w-full flex items-center gap-8">
            <ProdCard imageSrc="/images/appleWatchCard.png" label="Apple Watch Series 4" cost="$120.00" id="1" number="131" rating="4"></ProdCard>
            <ProdCard imageSrc="/images/appleWatchCard.png" label="Apple Watch Series 4" cost="$120.00" id="2" number="34" rating="4"></ProdCard>
            <ProdCard imageSrc="/images/appleWatchCard.png" label="Apple Watch Series 4" cost="$120.00" id="3" number="52" rating="4"></ProdCard>
          </div> 
          
      </div>
    </div>
  );
}

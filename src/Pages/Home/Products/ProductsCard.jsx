import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'
import Rating from 'react-rating';
const ProductsCard = ()=>{
    return(
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
    <div className="shadow-xl px-10 py-10">
        <div className="py-8 rounded-lg flex bg-gray-100 justify-center">
            <img src={img1} className="w-[156px] h-[153px]" />
        </div>
     <div className="">
        <div className="flex justify-center items-center mt-4">
      <Rating
        emptySymbol={<span className="text-gray-400">☆</span>}
        fullSymbol={<span className="text-yellow-500">★</span>}
        fractions={2} // For half stars
        initialRating={3.5}
        onChange={(rate) => console.log(`New Rating: ${rate}`)}
      />
     </div>
           <div className="text-center">
           <h3 className="font-bold text-[17px]">Car Engine Plus</h3>
           <p className="text-[#FF3811] font-semibold">Price : $20.00</p>
           </div>
        </div>
    </div>
    <div className="shadow-xl px-10 py-10">
        <div className="py-8 rounded-lg flex bg-gray-100 justify-center">
            <img src={img2} className="w-[156px] h-[153px]" />
        </div>
     <div className="">
        <div className="flex justify-center items-center mt-4">
      <Rating
        emptySymbol={<span className="text-gray-400">☆</span>}
        fullSymbol={<span className="text-yellow-500">★</span>}
        fractions={2} // For half stars
        initialRating={3.5}
        onChange={(rate) => console.log(`New Rating: ${rate}`)}
      />
     </div>
           <div className="text-center">
           <h3 className="font-bold text-[17px]">Car Air Filter</h3>
           <p className="text-[#FF3811] font-semibold">Price : $20.00</p>
           </div>
        </div>
    </div>
    <div className="shadow-xl px-10 py-10">
        <div className="py-8 rounded-lg flex bg-gray-100 justify-center">
            <img src={img3} className="w-[156px] h-[153px]" />
        </div>
     <div className="">
        <div className="flex justify-center items-center mt-4">
      <Rating
        emptySymbol={<span className="text-gray-400">☆</span>}
        fullSymbol={<span className="text-yellow-500">★</span>}
        fractions={2} // For half stars
        initialRating={3.5}
        onChange={(rate) => console.log(`New Rating: ${rate}`)}
      />
     </div>
           <div className="text-center">
           <h3 className="font-bold text-[17px]">Cools Led Light</h3>
           <p className="text-[#FF3811] font-semibold">Price : $20.00</p>
           </div>
        </div>
    </div>
    <div className="shadow-xl px-10 py-10">
        <div className="py-8 rounded-lg flex bg-gray-100 justify-center">
            <img src={img4} className="w-[156px] h-[153px]" />
        </div>
     <div className="">
        <div className="flex justify-center items-center mt-4">
      <Rating
        emptySymbol={<span className="text-gray-400">☆</span>}
        fullSymbol={<span className="text-yellow-500">★</span>}
        fractions={2} // For half stars
        initialRating={3.5}
        onChange={(rate) => console.log(`New Rating: ${rate}`)}
      />
     </div>
           <div className="text-center">
           <h3 className="font-bold text-[17px]">Cools Led Light</h3>
           <p className="text-[#FF3811] font-semibold">Price : $20.00</p>
           </div>
        </div>
    </div>
    <div className="shadow-xl px-10 py-10">
        <div className="py-8 rounded-lg flex bg-gray-100 justify-center">
            <img src={img5} className="w-[156px] h-[153px]" />
        </div>
     <div className="">
        <div className="flex justify-center items-center mt-4">
      <Rating
        emptySymbol={<span className="text-gray-400">☆</span>}
        fullSymbol={<span className="text-yellow-500">★</span>}
        fractions={2} // For half stars
        initialRating={3.5}
        onChange={(rate) => console.log(`New Rating: ${rate}`)}
      />
     </div>
           <div className="text-center">
           <h3 className="font-bold text-[17px]">Cools Led Light</h3>
           <p className="text-[#FF3811] font-semibold">Price : $20.00</p>
           </div>
        </div>
    </div>
    <div className="shadow-xl px-10 py-10">
        <div className="py-8 rounded-lg flex bg-gray-100 justify-center">
            <img src={img6} className="w-[156px] h-[153px]" />
        </div>
     <div className="">
        <div className="flex justify-center items-center mt-4">
      <Rating
        emptySymbol={<span className="text-gray-400">☆</span>}
        fullSymbol={<span className="text-yellow-500">★</span>}
        fractions={2} // For half stars
        initialRating={3.5}
        onChange={(rate) => console.log(`New Rating: ${rate}`)}
      />
     </div>
           <div className="text-center">
           <h3 className="font-bold text-[17px]">Cools Led Light</h3>
           <p className="text-[#FF3811] font-semibold">Price : $20.00</p>
           </div>
        </div>
    </div>
 

  


</div>
    )
}
export default ProductsCard;
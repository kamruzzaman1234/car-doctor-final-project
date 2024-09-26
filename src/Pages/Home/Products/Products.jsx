import ProductsCard from "./ProductsCard";


const Products = ()=>{
    return(
        <div className="my-10">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Popular Product</h3>
                <h2 className="text-5xl font-semibold mb-3">Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which don't look even slightly believable. </p>
            </div>
            <div className="">
                <ProductsCard></ProductsCard>
                <div className="flex justify-center my-6">
                <button className="btn text-[#FF3811] border-2 rounded-lg
                 border-[#FF3811]">More Product</button>
                </div>
            </div>
        </div>
    )
}
export default Products;
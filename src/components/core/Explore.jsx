import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

import ProductCard from '../shared/ProductCard'


// Loading Skeleton
const SklItem = () => {
    return (
        <div className="w-[350px] flex flex-col gap-4 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] p-5 bg-white">
            <div className="skeleton rounded-xl w-20 h-5"></div>
            <div className="skeleton rounded-xl w-48 h-5"></div>

            <div className="skeleton w-full rounded-xl aspect-square "></div>

            <div className="skeleton rounded-xl w-24 h-5"></div>
        </div>
    )
}



const Explore = () => {

    const { categoryName, searchQuery } = useSelector(state => state.searchSlice);
    // console.log(`Values from store are , categoryName = ${categoryName} , searchQuery = ${searchQuery} `)

    // if category available then fetch data byu category 
    // similar for search query
    const URL = `/products${categoryName ? `/category/${categoryName}` : searchQuery ? `?q=${searchQuery}` : ''}`;


    const { data, loading } = useFetch(URL);
    // console.log("data ==== ", data)

    return (
        <div className='bg-white w-full h-full py-5 px-24 relative'>
            <h3 className='text-4xl font-bold text-center'>
                Man & Woman Fashion
            </h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-8">
                {!loading ? (
                    data && data?.map((item) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                        />
                    ))
                ) : (
                    // show loading skeleton if data not loaded

                    // <>
                    //     <SklItem />
                    //     <SklItem />
                    //     <SklItem />
                    //     <SklItem />
                    //     <SklItem />
                    //     <SklItem />
                    // </>
                    Array.from({ length: 6 }, (_, index) => <SklItem key={index} />)
                )}
            </div>
        </div>
    )
}

export default Explore

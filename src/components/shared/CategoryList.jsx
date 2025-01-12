import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux"

import { setCategoryName } from '../../slices/searchSlice'

const CategoryList = () => {

    const dispatch = useDispatch()
    const { data, loading } = useFetch('/products/categories')


    const handleCategoryChange = (event) => {
        console.log("category changed ==> ", event.target.value)
        if (event.target.value === "All category") {
            dispatch(setCategoryName(""))
        }
        else {
            dispatch(setCategoryName(event.target.value))
        }
    }

    return (
        <form>

            <select
                className="border  rounded-md py-2 px-4 bg-black text-white"
                onChange={handleCategoryChange}
            >
                <option value={"All category"} >
                    {"All category"}
                </option>

                {
                    !loading ?
                        (data?.map((category) => (
                            <option
                                value={category}
                                key={category}
                                className="hover:bg-red-600"
                            >
                                {category}
                            </option>
                        )))
                        :

                        <option disabled>
                            Loading...
                        </option>
                }
            </select>
        </form>
    );
};

export default CategoryList;

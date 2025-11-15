import { useFetch } from "../CustomeHooks/useFetch";
import Loading from "./Loading";

export default function Products() {
    // calling the custom hook
    const fetchResult = useFetch("https://fakestoreapi.com/products");
    const data = fetchResult.data;
    const loading = fetchResult.loading;
    const error = fetchResult.error;

    // checking if loading is true
    if (loading) {
        return <Loading />;
    }

    // checking if error exists
    if (error) {
        return (
            <p className="text-center mt-8 text-red-600">
            {error}
            </p>
        );
    }

    // when data is available
    return (
        <div className="mt-20 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {data && data.length > 0 ? (
                data.map(function (item) {
                    return (
                    <div
                        key={item.id}
                        className="border p-4 rounded-md shadow-sm"
                    >
                        <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover mb-3 rounded-md"
                        />
                        <h2 className="font-bold text-base">{item.title}</h2>
                        <p className="text-gray-700 mt-1">${item.price}</p>
                    </div>
                    );
                })
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}
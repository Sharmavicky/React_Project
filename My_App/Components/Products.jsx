import { useFetch } from "../CustomeHooks/useFetch";
import Loading from "./Loading";

function Products() {
    // used my custom hook to fetch products data
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products");

    // Handle loading and error states
    if (loading) return <Loading />;
    if (error) return <p className="text-center mt-8 text-red-600">{error}</p>;

    // render product list
    return (
        <div className="px-6 py-4 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data && data.map((item) => (
                <div
                    key={item.id}
                    className="border rounded-lg p-4 shadow hover:shadow-lg hover:scale-105 transition cursor-pointer"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-gray-600 mt-2">${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;
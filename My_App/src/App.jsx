import Products from "../Components/Products";

function App() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 px-6 py-4 text-3xl font-bold flex justify-center items-center bg-gray-500 z-10">
        Product List
      </header>
      <Products />
    </>
  );
}

export default App;

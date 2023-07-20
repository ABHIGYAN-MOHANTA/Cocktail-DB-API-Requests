import DrinkList from "../src/features/Drinks/DrinkList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="bg-gray-900 dark:bg-gray-800 mb-5">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white pb-4 pt-4">
          Cocktail DB
        </h1>
      </div>

      <DrinkList />
    </div>
  );
}

export default App;

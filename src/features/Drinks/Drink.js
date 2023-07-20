import { useGetDrinksQuery } from "../../app/api/apiSlice";
import { memo } from "react";

const Drink = ({ drinkId }) => {
  const { data } = useGetDrinksQuery("drinkList");
  const drink = data?.find((drink) => drink.idDrink === drinkId);

  if (drink) {
    return (
      <div className="max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden mb-4">
        <div className="p-4">
          <div className="relative">
            <h2 className="text-2xl font-bold mb-2 ml-12 text-black dark:text-white">
              {drink.strDrink}
            </h2>
            <div className="flex justify-center items-center mt-4">
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-100 h-100 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

const memoizedDrink = memo(Drink);
export default memoizedDrink;

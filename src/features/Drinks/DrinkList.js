import { useGetDrinksQuery } from "../../app/api/apiSlice";
import Drink from "./Drink";
import { PulseLoader } from "react-spinners";

const DrinkList = () => {
  const {
    data: drinks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDrinksQuery("drinkList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <PulseLoader color={"#1f2937"} />;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }
  if (isSuccess) {
    const tableContent = drinks?.length
      ? drinks.map((drink) => {
          return <Drink key={drink.idDrink} drinkId={drink.idDrink} />;
        })
      : null;

    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white dark:bg-gray-900">
        {tableContent}
      </div>
    );
  }

  return content;
};

export default DrinkList;

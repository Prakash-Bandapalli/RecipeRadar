/* eslint-disable react/prop-types */
import ReceipeContainer from "./ReceipeContainer";

function ReceipeListContianer({ recipes }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((obj, i) => {
          return (
            <ReceipeContainer
              image={obj.recipe.image}
              name={obj.recipe.label}
              list={obj.recipe.ingredients}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReceipeListContianer;

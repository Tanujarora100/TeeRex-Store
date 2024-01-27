import Checkbox from "./CheckBox";

const Filter = () => {
  return (
    <div className="py-4 px-6 bg-gray-200 mt-12 ">
      <div className="color-filter mb-4">
        <h2 className="text-lg font-bold mb-2">Color</h2>
        <ul className="font-bold">
          <li className="mb-2">
            <Checkbox
              label="Red"
              className="filter-red-checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
          <li className="mb-2">
            <Checkbox
              label="Green"
              className="filter-green-checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
          <li>
            <Checkbox
              label="Blue"
              className="filter-blue-checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
        </ul>
      </div>

      <div className="gender-filter mb-4">
        <h2 className="text-lg font-bold mb-2">Gender</h2>
        <ul className="font-bold">
          <li className="mb-2">
            <Checkbox
              label="Male"
              className="filter-male-checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
          <li>
            <Checkbox
              label="Female"
              className="filter-female-checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
        </ul>
      </div>

      <div className="price-filter">
        <h2 className="text-lg font-bold mb-2">Price</h2>
        <ul className="font-bold">
          <li className="mb-2">
            <Checkbox
              label="0-250Rs"
              className="filter-250Rs-checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
          <li className="mb-2">
            <Checkbox
              label="250-450Rs"
              className="filter-250Above-checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
          <li>
            <Checkbox
              label="450Rs-Above"
              className="filter-450Above-checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;

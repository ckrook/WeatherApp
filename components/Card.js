import { ChevronRightIcon, LocationMarkerIcon } from "@heroicons/react/solid";

function Card() {
  return (
    <div className="card">
      <div>
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 bg-red-500 rounded-full" />
          <h3>Stockholm</h3>
        </div>
        <ol className="flex space-x-12">
          <li>
            <span className="sm-h">Sky</span>
            <p>Clear</p>
          </li>
          <li>
            <span className="sm-h">Temp</span>
            <p>2</p>
          </li>
          <li>
            <span className="sm-h">Wind</span>
            <p>Test</p>
          </li>
        </ol>
      </div>
      <div className="flex justify-end items-center">
        <div>
          <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Card;

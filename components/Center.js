import { useRecoilState } from "recoil";
import { selectedIdState } from "../atoms/weatherAtoms";
import { useEffect } from "react";
import { api } from "../lib/api";

function Center() {
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  if (selectedId) {
    console.log(selectedId);
    return (
      <div className="flex flex-grow p-5">
        <p>{selectedId}</p>
      </div>
    );
  }
}

export default Center;

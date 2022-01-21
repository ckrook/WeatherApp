import { ChevronRightIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { weatherIdState } from "../atoms/weatherAtoms";

import { motion } from "framer-motion";
import Card from "./Card";
import { useEffect, useState } from "react";

function Cards() {
  // Lagra array med alla städer
  // Ta emot fetch och printa ut en card component
  const [weatherId, setWeatherId] = useRecoilState(weatherIdState);
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(color);
  }, [weatherId]);

  return (
    <div>
      {weatherId.map((w) => {
        return (
          <motion.div
            initial={{ y: -40, scale: 0.2 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Card key={w.id} weather={w} color={color} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default Cards;

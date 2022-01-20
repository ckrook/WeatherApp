import {
  WiDirectionUpRight,
  WiDirectionUpLeft,
  WiDirectionDownLeft,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionRight,
  WiDirectionUp,
} from "react-icons/wi";

export function windDirection(wind) {
  if (wind > 337.5 || wind < 22.5) return <WiDirectionUp className="w-6 h-6" />; // 337.5 - 22.5
  if (wind > 22.5 && wind < 67.5)
    return <WiDirectionUpRight className="w-7 h-7" />; // 22.5 - 67.5
  if (wind > 67.5 && wind < 112.5)
    return <WiDirectionRight className="w-7 h-7" />; // 67.5 - 112.5
  if (wind > 112.5 && wind < 157.5)
    return <WiDirectionDownRight className="w-7 h-7" />; // 112.5 - 157.5
  if (wind > 157.5 && wind < 202.5)
    return <WiDirectionDown className="w-9 h-9" />; // 157.5 - 202.5
  if (wind > 202.5 && wind < 247.5)
    return <WiDirectionDownLeft className="w-7 h-7" />; // 202.5 - 247.5
  if (wind > 247.5 && wind < 292.5)
    return <WiDirectionLeft className="w-7 h-7" />; // 247.5 - 292.5
  if (wind > 292.5 && wind < 337.5)
    return <WiDirectionUpLeft className="w-7 h-7" />; // 292.5 - 337.5
}

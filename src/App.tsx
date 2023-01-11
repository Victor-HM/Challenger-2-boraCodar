import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./style/global.css";
import ImagePng from "./assets/sofa.png";
import ImageGif from "./assets/sofa-gif.gif";
import Svg from "./assets/Vector.svg";
import Exit from "./assets/Exit.svg";

function App() {
  const [typeImage, setTypeImage] = useState(false);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-60">
      <div className="w-full flex items-center">
        <div className="w-full">
          <div className="w-full h-[23px] flex justify-end pr-10">
            <img className="cursor-pointer" src={typeImage ? Exit : Svg} alt="" onClick={() => setTypeImage(!typeImage)} />
          </div>
          <img className="h-52 w-96" src={typeImage ? ImageGif : ImagePng} alt="" />
        </div>

        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-light text-xs text-slate-500">CÓDIGO: 42404</p>
            <span className="font-crimson font-semibold text-3xl">Sofá Margot II - Rosé</span>
            <p className="text-base text-slate-500">R$ 4.000</p>
          </div>
          <div>
            <button className="text-xs border-[0.5px] border-purple-800 rounded-full p-3 hover:underline underline-offset-2">ADICIONAR À CESTA</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

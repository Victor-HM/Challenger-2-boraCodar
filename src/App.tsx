import { useState } from "react";
import "./style/global.css";
import ImagePng from "./assets/sofa.png";
import Svg from "./assets/Vector.svg";
import Exit from "./assets/Exit.svg";

function App() {
  const [typeImage, setTypeImage] = useState(false);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center p-10 sm:p-20 md:px-40 lg:px-60">
      <div className="w-full flex items-center flex-col lg:flex-row">
        <div className="w-full">
          <div className="w-full h-[23px] flex justify-end pr-10">
            <img
              className="cursor-pointer"
              src={typeImage ? Exit : Svg}
              alt=""
              onClick={() => setTypeImage(!typeImage)}
            />
          </div>

          <div className="w-full h-auto flex justify-center">
            {typeImage ? (
              <iframe
                title="Margot 2 Seater Sofa, Old Rose Velvet"
                height={250}
                width={400}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/b3d693a003c94f4e989c08fe08c3af8c/embed?autostart=1&camera=0&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"
              />
            ) : (
              <img className="h-52 w-96" src={ImagePng} alt="" />
            )}

          </div>

        </div>

        <div className="w-full flex flex-col gap-5">
          <div className="flex text-center lg:text-left flex-col gap-3">
            <p className="font-light text-xs text-slate-500">CÓDIGO: 42404</p>
            <span className="font-crimson font-semibold text-3xl">
              Sofá Margot II - Rosé
            </span>
            <p className="text-base text-slate-500">R$ 4.000</p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="text-xs border-[0.5px] border-purple-800 rounded-full p-3 hover:underline underline-offset-2">
              ADICIONAR À CESTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

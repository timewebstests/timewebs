import Link from "next/link";

export default function Abilities() {
  return (
    <div className="w-full flex justify-center flex-wrap bg-gradient-to-r from-[#95faff] to-[#415dff] p-24 max-[600px]:px-5">
      <div className="w-[60%] max-[700px]:w-[100%] flex justify-center text-6xl mb-5 max-[400px]:text-3xl text-center font-bold text-white">
        Abilità
      </div>
      <div className="w-[60%] max-[700px]:w-[100%] flex justify-center text-2xl mb-20 max-[400px]:text-xl text-center font-semibold text-white">
        Il risultato del nostro processo di brending azindale è una linea guida
        completa del marchio che può essere utilizzata per progettare una e
        altre risorse di progettazione come le illustazioni del marchio che
        riflettono il nuovo marchio.
      </div>
      <div className="w-[70%] flex justify-center bg-white p-16 flex-nowrap max-[1650px]:w-full max-[1650px]:flex-wrap rounded-2xl gap-20 max-[970px]:space-y-10">
        <div className="w-[400px] max-[400px]:w-full flex justify-center text-center flex-wrap">
          <div className="w-full text-3xl font-bold text-[#1db4f3] my-10 max-[400]:">
            Strategia del Brand
          </div>
          <div className="w-full min-w-[250px] text-black text-2xl flex flex-wrap space-y-5">
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
          </div>
        </div>
        <div className="w-[400px] max-[400px]:w-full flex justify-center text-center flex-wrap">
          <div className="w-full text-3xl font-bold text-[#1db4f3] my-10">
            Strategia del Brand
          </div>
          <div className="w-full min-w-[250px] text-black text-2xl flex flex-wrap space-y-5">
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
          </div>
        </div>
        <div className="w-[400px] max-[400px]:w-full flex justify-center text-center flex-wrap">
          <div className="w-full text-3xl font-bold text-[#1db4f3] my-10">
            Strategia del Brand
          </div>
          <div className="w-full min-w-[250px] text-black text-2xl flex flex-wrap space-y-5">
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
            <p className="w-full">- Brand equity audit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Clients() {
  return (
    <div
      className="w-[75%] max-[1620px]:w-[100%] flex justify-center flex-wrap bg-white p-24 max-[600px]:px-5"
      id="aboutus"
    >
      <div className="w-[35%] max-[1620px]:w-[100%] flex justify-center flex-wrap mt-16">
        <div className="w-full max-[700px]:w-[100%] flex justify-left text-4xl mb-5 max-[400px]:text-3xl text-center font-bold text-[#1db3f4]">
          Chi siamo
        </div>
        <div className="w-full max-[700px]:w-[100%] flex justify-center text-2xl mb-20 max-[400px]:text-xl text-justify font-semibold text-gray-300">
          Il risultato del nostro processo di brending azindale è una linea
          guida completa del marchio che può essere utilizzata per progettare
          una e altre risorse di progettazione come le illustazioni del marchio
          che riflettono il nuovo marchio.
        </div>
      </div>

      <div className="w-[65%] flex justify-center bg-white px-10 max-[460px]:px-0 flex-nowrap max-[1650px]:w-full max-[1650px]:flex-wrap rounded-2xl gap-20 max-[970px]:space-y-10">
        <div className="w-[500px] max-[460px]:w-full max-h-[250px] h-auto flex justify-center text-center p-5 flex-wrap rounded-3xl bg-gradient-to-b from-[#95faff] to-[#415dff]">
          <div className="w-full text-2xl font-bold text-white my-5">
            Processo di pagamento
          </div>
          <div className="w-full min-w-[250px] text-white text-lg flex flex-wrap space-y-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </div>
        </div>
        <div className="w-[500px] max-[460px]:w-full max-h-[250px] h-auto flex justify-center text-center p-5 mt-20 flex-wrap rounded-3xl bg-gradient-to-b from-[#95faff] to-[#415dff]">
          <div className="w-full text-2xl font-bold text-white my-5">
            Disponibile anche sul cellulare
          </div>
          <div className="w-full min-w-[250px] text-white text-lg flex flex-wrap space-y-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </div>
        </div>
      </div>
    </div>
  );
}

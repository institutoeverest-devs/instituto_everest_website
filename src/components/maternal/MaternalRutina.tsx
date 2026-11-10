import Image from "next/image";

export function MaternalRutina() {
  const routine = [
    {
      time: "8:00 AM",
      title: "Recepción & Filtro de Salud",
      desc: "Bienvenida cálida a cada familia, filtro médico preventivo matutino y círculo de canciones de buenos días.",
      timeColor: "text-amber-700",
      timeBg: "bg-amber-100/80 border-amber-200/80",
      stagger: false,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2NYkrk25gtGb1OBiiu45_4xKQOU1Xo0ddzjUIATrDja6JwQTJ8OZ1aUYmmLj8Kl2mpDZqCZuiC0CtzATfzCqYYmX4JzEtQnVzrQCETd8irkNxw_LHpWKByVs9zLdnpnmp7fkXX1JNW8mimVqxy6moRjp8bvB56zrCGEfxBYM9WMnKASl4_StpyPVcwp_mcT4I1abc_W9UXEYv78m56eLzyzV8JUHNfd5XVxsrN_MbcBl06MoBAGYs",
    },
    {
      time: "9:00 AM",
      title: "Psicomotricidad Guiada",
      desc: "Desplazamiento en rampas y túneles acolchados, equilibrio motriz, tonicidad postural y fortalecimiento del agarre.",
      timeColor: "text-[#345f9c]",
      timeBg: "bg-blue-100/80 border-blue-200/80",
      stagger: true,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBBHV2O2ErEGQMhL_Qea0nzgOMek4cH28X2xFVtqDP__Qrf5P3dVBwdw_r7VVo_xvbjsIzQPt8OMhEW74a3QjTh_kECkoy8N-oO4yiubaxvMDllniAJtaCU88gN-uxXgqCYDApE9-GraVpks8mIKyHP_KejxQjPlI4Z74NXvcyWI2zqTt5s_PV20jpRN-FVYKUD5FPfEQG0p_jOjpsxL4ZGfldPOFFxf7A66-zskECqirqaL2lLvqB2",
    },
    {
      time: "10:15 AM",
      title: "Snack Saludable Supervisado",
      desc: "Menú avalado por especialistas con frutas frescas, agua purificada y fomento cariñoso de autonomía y buenos modales.",
      timeColor: "text-amber-700",
      timeBg: "bg-amber-100/80 border-amber-200/80",
      stagger: false,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6bR31FScB4seYQAvfL_oPnd_MyXWXPbwTlLH7DsQ6MMJdmEx2IwOHkz6ECq0puteTac3mwR-zZWwiefEE995yarkFYwkmVG22Maud-pVzwUFQyvOne4-YroCjO5lD97vPAg6C5ST_mdbxoiHve3zvoRkzB0OjTiG29f9cFcu2SLKgi1JbAhspDjWjdNFZXQQRtGO0liar9z2E_COg3qoPkhuI0YR5STBbLbW3DKhY4TbP3YIVC4Z",
    },
    {
      time: "11:00 AM",
      title: "Música Curricular Diaria",
      desc: "Clase formal con campanas afinadas, xilófonos de madera, ritmo corporal y apreciación tímbrica activa.",
      timeColor: "text-[#2DB362]",
      timeBg: "bg-emerald-100/80 border-emerald-200/80",
      stagger: true,
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1UpLLOfVZwJcc-fQrsMgrnLTlsEmUMlU6ExBT1lWc8FPMcavLFIbbdVB7vyUIS9ftb9XcB4FuKpagfTe_l8C9-vCoqjEFKaDzG51We4UjHJAX-AWbrxw5oMDRfruMqXUFhg0fhSpQ899A7peKRx4eFYwIAmDwlqRlpqk565a7f9Eov9l4jkpAS9G0SbsGiD6ohHGuRDBDPENQ4efk41gwVDKAGDQCWNgqPOgP0iIu99HGs96jMtXtBAGr4",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:pt-24 lg:pb-36">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16 space-y-2.5 sm:space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full text-slate-900 bg-[#F2B23E]">
            Rutina Diaria de Calidez
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight">
            Un Día en Maternal Everest
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Estructura predecible, amorosa y estimulante que brinda calma y confianza a los pequeños para explorar su entorno con plenitud.
          </p>
        </div>

        {/* 4 Cards Grid with Staggered layout on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-start">
          {routine.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between group ${
                item.stagger ? "md:translate-y-6 lg:translate-y-8" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-52 xs:h-56 sm:h-60 lg:h-64 rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="px-2 pt-3.5 sm:pt-4 pb-2 flex flex-col flex-1 space-y-2.5">
                {/* Time Badge */}
                <div>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold text-slate-900 border inline-flex items-center gap-1 whitespace-nowrap w-fit ${item.timeBg}`}
                  >
                    <span className={`material-symbols-outlined text-[15px] ${item.timeColor}`}>
                      schedule
                    </span>
                    <span>{item.time}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-[18px] sm:text-[19px] lg:text-[20px] font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

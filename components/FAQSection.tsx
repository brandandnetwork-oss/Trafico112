import React, { useState } from 'react';

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "¿Qué plazo tengo para dar el parte de accidente a mi aseguradora?",
            answer: "Después de un accidente es conveniente que en un plazo máximo de 7 días te comuniques con tu compañía aseguradora facilitando todos los datos de los que dispongas. A partir de este momento la compañía iniciará sus trámites con el fin de resolver de la mejor manera posible para sus intereses –no los tuyos- el expediente, sin que tenga una especial preocupación por la indemnización final que tú puedas tener, derivada de las lesiones y daños que hayas podido sufrir."
        },
        {
            question: "¿Puedo elegir el centro médico?",
            answer: "Sí, tienes derecho a la libre elección de centro médico para tu recuperación. No estás obligado a acudir a los centros concertados por las aseguradoras, que a menudo buscan minimizar costes. En Tráfico112 te ayudamos a encontrar los mejores especialistas."
        },
        {
            question: "¿En caso de accidente in itinere, puedo elegir no ir a la mutua?",
            answer: "Absolutamente. Aunque sea un accidente laboral in itinere, tienes derecho a reclamar y a elegir tu asistencia sanitaria. Las mutuas a menudo dan altas prematuras. Nosotros defendemos tu completa recuperación."
        },
        {
            question: "¿Qué plazo tengo para reclamar la indemnización por accidente de tráfico?",
            answer: "El plazo general es de un año desde la estabilización de las lesiones. Sin embargo, es crucial iniciar los trámites y el seguimiento médico cuanto antes para documentar adecuadamente el caso y garantizar el éxito de la reclamación."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-6 bg-[#f6f7f8]">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                    <span className="text-[#1392ec] font-black tracking-wider uppercase text-sm">Ayuda</span>
                    <h2 className="text-[#111518] text-3xl md:text-5xl font-black mt-3">Preguntas más frecuentes</h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-[#111518] font-bold text-lg pr-4">
                                    <span className="text-[#1392ec] mr-3">0{index + 1}.</span>
                                    {faq.question}
                                </span>
                                <span className={`material-symbols-outlined text-[#1392ec] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    keyboard_arrow_down
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out px-6 text-[#617989] leading-relaxed overflow-hidden ${openIndex === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="pl-10">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="text-[#1392ec] font-bold hover:underline">Ver todas</button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

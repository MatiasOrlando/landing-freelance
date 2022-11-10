import React from "react";
import SectionCont from "./SectionCont";

const ServicesContainer = () => {
  return (
    <div className="">
      <SectionCont
        img="/assets/foto3.jpg"
        title="Tarot"
        text="Mediante una lectura de cartas, podremos en conjunto dilucidar aspectos de tu mente 
inconsciente que te están generando bloqueos, y así no pudiendo llegar a tus objetivos. Estos
mismos pueden ser metas personales como relaciones y conexiones, aspectos económicos, o
mas bien evolutivos del ser."
        icon={true}
      />
      <SectionCont
        img="/assets/foto1.jpg"
        title="Focusing"
        text="Con este proceso psicoterapéutico meditativo se apunta a enfocar sensaciones físicas y emocionales, que impiden el bienestar de la persona, 
        y realizar los virajes que se necesiten. Con este tratamiento no apuntamos encontrar una respuesta en el afuera, sino, más bien, en la propia consciencia y sabiduría individual. Una vez que los cambios internos se produzcan, el afuera será 
        innegablemente cambiado."
        icon={false}
        reverse={true}
      />
      <SectionCont
        img="/assets/foto2.jpg"
        title="Barras Access Consciousness"
        text="¡Barras Access es algo totalmente diferente! Para descontracturar un poco, aquí se aplican 
        risas, y limpieza a los juicios de la mente, que son los que crean los problemas en el mundo. Mediante esta técnica, aplico mis dedos en puntos energéticos y así poder acceder a más consciencia, a más preguntas que 
        abran caminos, a más posibilidades y a mas vida."
        icon={false}
      />
    </div>
  );
};

export default ServicesContainer;

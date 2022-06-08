import { FunctionComponent } from "react";
import ParticlesJS from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

interface ParticlesProps {
  configUrl: string;
};

const Particles: FunctionComponent<ParticlesProps> = ({ configUrl }) => {
  return <ParticlesJS 
    init={async (engine: Engine) => await loadFull(engine)} 
    url={configUrl} style={{ "position": "absolute" }} 
  />;
};

export default Particles;
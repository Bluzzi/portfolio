import { ReactElement } from "react";
import ParticlesJS from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

interface ParticlesProps {
  configUrl: string;
}

export default function Particles({ configUrl }: ParticlesProps) : ReactElement {
  return <ParticlesJS
    init={async(engine: Engine) => await loadFull(engine)}
    url={configUrl} style={{ "position": "absolute" }}
  />;
}
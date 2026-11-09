import type { ReactElement } from "react";
import { Container } from "#/components/container";
import { strengths } from "#/configs/strengths";

export const StrengthSection = (): ReactElement => {
  return (
    <section id="savoir-faire" className="pt-34">
      <Container>
        <h2 className="mb-10 font-jersey text-[64px] leading-none tracking-[1px] max-sm:text-[40px]">Ce que je sais faire</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {strengths.map((strength) => (
            <div key={strength.title} className="flex flex-col gap-3 bg-card p-7">
              <img src={strength.icon} alt="" width={strength.iconSize} />
              <h3 className="text-[19px] font-bold leading-[1.2]">{strength.title}</h3>
              <p className="text-[15px] leading-[1.6] text-lavender">{strength.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

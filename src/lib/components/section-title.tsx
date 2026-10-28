import type { ReactElement } from "react";
import { Text } from "#/lib/components/text";

export type SectionTitleProps = {
  title: string;
  accent?: string;
  subtitle?: string;
};

// Section heading: gradient-accented word plus optional subtitle.
export const SectionTitle = ({ title, accent, subtitle }: SectionTitleProps): ReactElement => {
  return (
    <div className="space-y-1.5">
      <Text type="h2" size="3xl" font="display" className="tracking-tight">
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-volt">{accent}</span>
          </>
        )}
      </Text>

      {subtitle && <Text color="gray">{subtitle}</Text>}
    </div>
  );
};

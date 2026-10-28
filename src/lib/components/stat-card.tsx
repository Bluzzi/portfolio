import type { ReactElement } from "react";
import { Text } from "#/lib/components/text";

export type StatCardProps = {
  value: string;
  label: string;
};

export const StatCard = ({ value, label }: StatCardProps): ReactElement => {
  return (
    <div className="rounded-2xl border border-white/10 bg-night-900 px-5 py-4 text-center transition-colors hover:border-white/20">
      <Text size="3xl" font="display">{value}</Text>

      <Text size="small" color="gray">{label}</Text>
    </div>
  );
};

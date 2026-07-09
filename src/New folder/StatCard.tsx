import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  color: string;
  icon: ReactNode;
};

export default function StatCard({
  title,
  value,
  color,
  icon,
}: Props) {
  return (
    <div
      className={`rounded-3xl p-6 ${color}
      shadow-xl hover:scale-105 transition duration-300`}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm opacity-80">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div className="text-5xl opacity-80">
          {icon}
        </div>

      </div>
    </div>
  );
}
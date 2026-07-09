type Props = {
  title?: string;
};

export default function DocumentCard({ title = "Document" }: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-300">
      {title}
    </div>
  );
}

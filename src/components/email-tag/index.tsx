import { X } from "lucide-react";

interface EmailTagProps {
  email: string;
  onDelete: () => void;
}

export function EmailTag({ email, onDelete }: EmailTagProps) {
  return (
    <div className="items-center justify-center bg-zinc-800 px-1.5 gap-225 py-1 w-min rounded-md inline-flex">
      <span className="text-zinc-300 text-base font-normal leading-snug">{email}</span>
      <span
        onClick={onDelete}
        className="text-zinc-400 cursor-pointer hover:bg-zinc-700 rounded-lg"
      >
        <X className="size-5" />
      </span>
    </div>
  );
}

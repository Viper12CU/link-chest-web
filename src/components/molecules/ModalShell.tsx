import { Eyebrow } from "@/components/atoms/Eyebrow";
import { IconButton } from "@/components/atoms/IconButton";

export function ModalShell({
  eyebrow,
  title,
  onClose,
  small = false,
  children,
}: {
  eyebrow: string;
  title: string;
  onClose: () => void;
  small?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[rgba(18,26,20,.35)] p-5 backdrop-blur-[4px]">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`w-full rounded-[20px] bg-white p-[25px] text-text shadow-[0_30px_80px_rgba(10,20,12,.2)] ${
          small ? "max-w-[400px]" : "max-w-[510px]"
        }`}
      >
        <div className="mb-[22px] flex items-start justify-between">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h3 className="font-display text-[21px] text-text">{title}</h3>
          </div>
          <IconButton type="button" aria-label="Cerrar" onClick={onClose}>
            ×
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
}

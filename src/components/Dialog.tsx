import { useEffect, useRef, type ReactNode } from 'react';

interface Props {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  /** Modal that cannot be dismissed with Escape or a backdrop click (the first-visit consent). */
  persistent?: boolean;
}

export function Dialog({ open, title, onClose, children, persistent }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      // Start on the heading, so no option looks pre-selected.
      d.querySelector<HTMLElement>('h2')?.focus();
    }
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onCancel={(e) => {
        e.preventDefault();
        if (!persistent) onClose();
      }}
      onClick={(e) => {
        if (!persistent && e.target === ref.current) onClose();
      }}
    >
      {open && (
        <div className="dialog-body">
          <h2 id="dialog-title" tabIndex={-1}>{title}</h2>
          {children}
        </div>
      )}
    </dialog>
  );
}

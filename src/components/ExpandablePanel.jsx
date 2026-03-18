import { useState } from "react";

export default function ExpandablePanel({
  title,
  children,
  onOpen,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  async function handleToggle() {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    if (onOpen && !hasLoaded) {
      setIsLoading(true);
      await onOpen();
      setIsLoading(false);
      setHasLoaded(true);
    }

    setIsOpen(true);
  }

  return (
    <section className="rounded-xl border bg-stone-50">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-white"
      >
        <div className="flex items-center gap-2">
          {isLoading && (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-stone-300 border-t-stone-700" />
          )}
          <h2 className="font-semibold">{title}</h2>
        </div>

        <span className={`transition ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      {isOpen && <div className="border-t bg-white p-4">{children}</div>}
    </section>
  );
}

export default function ParkEvents({ events }) {
  if (!events.length) {
    return <p className="text-sm text-stone-500">No upcoming events.</p>;
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <article
          key={event.id}
          className="rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-[#2F4F3A]">
              {event.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-600">
                {event.isfree ? "Free" : "Paid"}
              </span>
              {event.isregresrequired && (
                <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-600">
                  Registration required
                </span>
              )}
            </div>
          </div>

          <p className="mt-2 text-sm text-stone-600">
            {[event.date || event.datestart, event.times?.[0]?.timestart]
              .filter(Boolean)
              .join(" • ")}
          </p>

          {event.location && (
            <p className="mt-1 text-sm text-stone-500">{event.location}</p>
          )}

          <p className="mt-3 text-sm leading-6 text-stone-700">
            {formatSummary(event.description, 180) ||
              "Additional event details are not available."}
          </p>

          {(event.regresinfo || event.regresurl) && (
            <div className="mt-3 text-sm">
              {event.regresinfo && (
                <p className="leading-6 text-stone-600">{event.regresinfo}</p>
              )}

              {event.regresurl && (
                <a
                  href={event.regresurl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-medium text-[#2F4F3A] underline underline-offset-2"
                >
                  Register here
                </a>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function formatSummary(text, maxLength) {
  if (!text) {
    return "";
  }

  const cleanText = text.replace(/<[^>]+>/g, "").trim();

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  return `${cleanText.slice(0, maxLength).trim()}...`;
}

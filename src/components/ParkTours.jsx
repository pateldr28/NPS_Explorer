export default function ParkTours({ tours }) {
  if (!tours.length) {
    return <p className="text-sm text-stone-500">No tours listed.</p>;
  }

  return (
    <div className="space-y-4">
      {tours.map((tour) => (
        <article
          key={tour.id}
          className="rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-[#2F4F3A]">
              {tour.title}
            </h3>

            {tour.type && (
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-600">
                {tour.type}
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-stone-600">
            {tour.durationMin && tour.durationMax
              ? `${tour.durationMin}–${tour.durationMax} min`
              : "Duration not listed"}
          </p>

          <p className="mt-3 text-sm leading-6 text-stone-700">
            {formatTourDescription(tour.description) ||
              "Additional tour details are not available."}
          </p>

          {tour.activities?.length > 0 && (
            <p className="mt-3 text-xs leading-5 text-stone-500">
              Activities:{" "}
              {tour.activities.map((activity) => activity.name).join(", ")}
            </p>
          )}

          {tour.stops?.length > 0 && (
            <p className="mt-1 text-xs text-stone-500">
              Stops: {tour.stops.length}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

function formatTourDescription(description) {
  if (!description) {
    return "";
  }

  if (description.length <= 200) {
    return description;
  }

  return `${description.slice(0, 200).trim()}...`;
}

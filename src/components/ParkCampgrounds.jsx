export default function ParkCampgrounds({ campgrounds }) {
  if (!campgrounds.length) {
    return <p className="text-sm text-stone-500">No campgrounds listed.</p>;
  }

  return (
    <div className="space-y-4">
      {campgrounds.map((campground) => (
        <div
          key={campground.id}
          className="rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-[#2F4F3A]">
              {campground.name}
            </h3>

            {campground.reservationUrl && (
              <span className="rounded-full bg-[#2F4F3A]/10 px-3 py-1 text-xs font-medium text-[#2F4F3A]">
                Reservations available
              </span>
            )}
          </div>

          <p className="mt-3 text-sm leading-6 text-stone-700">
            {campground.description ||
              "Additional campground details are not available."}
          </p>

          <div className="mt-3">
            <a
              href={campground.reservationUrl || campground.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2F4F3A] underline underline-offset-2"
            >
              View campground details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

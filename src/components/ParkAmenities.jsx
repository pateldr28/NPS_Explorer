export default function ParkAmenities({ amenities }) {
  if (!amenities.length) {
    return <p className="text-sm text-stone-500">No amenities listed.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2.5">
      {amenities.map((amenity) => (
        <div
          key={amenity.id}
          className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm font-medium text-stone-700 shadow-sm"
        >
          {amenity.name}
        </div>
      ))}
    </div>
  );
}

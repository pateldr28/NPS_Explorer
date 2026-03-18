import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import parkService from "../api/parkService";
import ParkAlerts from "../components/ParkAlerts";
import ExpandablePanel from "../components/ExpandablePanel";
import ParkPlaces from "../components/ParkPlaces";
import ParkEvents from "../components/ParkEvents";
import ParkAmenities from "../components/ParkAmenities";
import ParkCampgrounds from "../components/ParkCampgrounds";
import ParkTours from "../components/ParkTours";
import { useDispatch, useSelector } from "react-redux";
import { addParkToPlanner, selectPlannedParks } from "../redux/plannerSlice";
import { useNavigate } from "react-router";

const styles = {
  PAGE: "space-y-8",
  CARD: "overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm",
  HERO: "relative",
  HERO_IMAGE: "h-80 w-full object-cover md:h-[26rem]",
  HERO_FALLBACK:
    "h-80 w-full bg-gradient-to-br from-[#2F4F3A] via-[#5D7A62] to-[#A9B88E] md:h-[26rem]",
  HERO_OVERLAY:
    "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent",
  HERO_CONTENT: "absolute inset-x-0 bottom-0 p-6 md:p-8",
  HERO_BADGES: "flex flex-wrap gap-2",
  HERO_BADGE:
    "rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm",
  HERO_TITLE: "mt-4 max-w-4xl text-3xl font-semibold text-white md:text-4xl",
  HERO_CAPTION: "mt-3 max-w-3xl text-sm leading-6 text-stone-200",

  CONTENT: "space-y-8 p-6 md:p-8",

  OVERVIEW_GRID: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_18rem]",
  OVERVIEW_TEXT_WRAP: "space-y-4",
  OVERVIEW_TEXT: "text-lg leading-8 text-stone-700",
  TOPICS_WRAP: "flex flex-wrap gap-2",
  TOPIC_BADGE:
    "rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-stone-600",

  SIDEBAR: "rounded-2xl border border-stone-200 bg-stone-50 p-5 shadow-sm",
  SIDEBAR_LABEL:
    "text-xs font-semibold uppercase tracking-[0.2em] text-stone-500",
  SIDEBAR_ACTIONS: "mt-5 space-y-3",
  PRIMARY_LINK:
    "inline-flex w-full items-center justify-center rounded-full bg-[#2F4F3A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#26412f]",
  SECONDARY_LINK:
    "inline-flex w-full items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-100",

  INFO_CARD: "rounded-2xl border border-stone-200 bg-stone-50 p-5 shadow-sm",
  INFO_ROW: "flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between",
  INFO_TEXT_WRAP: "max-w-3xl",
  SECTION_TITLE: "mb-3 text-lg font-semibold text-[#2F4F3A]",
  BODY_TEXT: "leading-7 text-stone-700",

  ADDRESS_CARD:
    "min-w-0 rounded-2xl border border-stone-200 bg-white p-4 lg:max-w-sm",
  ADDRESS: "mt-3 space-y-1 text-sm not-italic leading-6 text-stone-700",
};

export default function ParkDetails() {
  const { details, alerts, places } = useLoaderData();
  const dispatch = useDispatch()
  const plannedParks = useSelector(selectPlannedParks)
  const isSelected = plannedParks[details.id] !== undefined;
  const navigate = useNavigate()

  // ---- Location ----

  const parkCoordinates = [Number(details.latitude), Number(details.longitude)];

  const primaryAddress =
    details.addresses?.find((address) => address.type === "Physical") ||
    details.addresses?.[0];

  const cityStateZip = [
    primaryAddress?.city,
    primaryAddress?.stateCode,
    primaryAddress?.postalCode,
  ]
    .filter(Boolean)
    .join(", ")
    .replace(/, ([^,]+)$/, " $1");

  // ---- Entrance Fee ----

  const entranceFee = details.entranceFees?.[0]?.cost;
  const entranceFeeLabel =
    entranceFee && entranceFee !== "0.00"
      ? `Entry from $${entranceFee}`
      : entranceFee === "0.00"
        ? "Free entry"
        : null;

  const topics = details.topics?.slice(0, 4) || [];

  // ---- State Management ----

  const [events, setEvents] = useState([]);
  const [tours, setTours] = useState([]);
  const [campgrounds, setCampgrounds] = useState([]);
  const [amenities, setAmenities] = useState([]);

  async function loadEvents() {
    try {
      const data = await parkService.getParkEvents(details.parkCode);
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadTours() {
    try {
      const data = await parkService.getParkTours(details.parkCode);
      setTours(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadCampgrounds() {
    try {
      const data = await parkService.getParkCampgrounds(details.parkCode);
      setCampgrounds(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadAmenities() {
    try {
      const data = await parkService.getParkAmenities(details.parkCode);
      setAmenities(data);
    } catch (error) {
      console.error(error);
    }
  }

  // ---- UI ----

  return (
    <section className={styles.PAGE}>
      <div className={styles.CARD}>
        <div className={styles.HERO}>
          {details.images?.[0]?.url ? (
            <img
              src={details.images[0].url}
              alt={details.images[0].altText || details.fullName}
              className={styles.HERO_IMAGE}
            />
          ) : (
            <div className={styles.HERO_FALLBACK} />
          )}

          <div className={styles.HERO_OVERLAY} />

          <div className={styles.HERO_CONTENT}>
            <div className={styles.HERO_BADGES}>
              <span className={styles.HERO_BADGE}>{details.designation}</span>
              <span className={styles.HERO_BADGE}>{details.states}</span>
              {entranceFeeLabel && (
                <span className={styles.HERO_BADGE}>{entranceFeeLabel}</span>
              )}
            </div>

            <h1 className={styles.HERO_TITLE}>{details.fullName}</h1>

            {details.images?.[0]?.caption && (
              <p className={styles.HERO_CAPTION}>{details.images[0].caption}</p>
            )}
          </div>
        </div>

        <div className={styles.CONTENT}>
          <ExpandablePanel title="Alerts" defaultOpen>
            <ParkAlerts alerts={alerts} />
          </ExpandablePanel>

          <div className={styles.OVERVIEW_GRID}>
            <div className={styles.OVERVIEW_TEXT_WRAP}>
              <p className={styles.OVERVIEW_TEXT}>{details.description}</p>

              {topics.length > 0 && (
                <div className={styles.TOPICS_WRAP}>
                  {topics.map((topic) => (
                    <span key={topic.id} className={styles.TOPIC_BADGE}>
                      {topic.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <aside className={styles.SIDEBAR}>
              <p className={styles.SIDEBAR_LABEL}>Plan Your Visit</p>

              <div className={styles.SIDEBAR_ACTIONS}>
              
              <button
                className={styles.PRIMARY_LINK}
                onClick={() => {
                  console.log(details)
                  dispatch(addParkToPlanner({ park:details }))
                  navigate("../planner")
                }}
                  disabled={isSelected}>
                  {isSelected ? "Added to planner" : "Add to planner"}
              </button>

                <button
                className={styles.SECONDARY_LINK}
                onClick={() => {
                  console.log(details)
                  //dispatch(addParkToPlanner({ park:details }))
                }}>
                  Mark on Tracker
              </button>

                {details.url && (
                  <a
                    href={details.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.SECONDARY_LINK}
                  >
                    Visit official park page
                  </a>
                )}

                {details.directionsUrl && (
                  <a
                    href={details.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.SECONDARY_LINK}
                  >
                    Open directions
                  </a>
                )}
              </div>
            </aside>
          </div>

          <div className={styles.INFO_CARD}>
            <div className={styles.INFO_ROW}>
              <div className={styles.INFO_TEXT_WRAP}>
                <h2 className={styles.SECTION_TITLE}>Directions</h2>
                <p className={styles.BODY_TEXT}>
                  {details.directionsInfo ||
                    "Directions information is not available for this park."}
                </p>
              </div>

              {primaryAddress && (
                <div className={styles.ADDRESS_CARD}>
                  <p className={styles.SIDEBAR_LABEL}>Primary Address</p>
                  <address className={styles.ADDRESS}>
                    {primaryAddress.line1 && <p>{primaryAddress.line1}</p>}
                    {primaryAddress.line2 && <p>{primaryAddress.line2}</p>}
                    {cityStateZip && <p>{cityStateZip}</p>}
                  </address>
                </div>
              )}
            </div>
          </div>

          <ExpandablePanel title="Map and Landmarks" defaultOpen>
            <ParkPlaces parkCoordinates={parkCoordinates} places={places} />
          </ExpandablePanel>

          <ExpandablePanel title="Upcoming Events" onOpen={loadEvents}>
            <ParkEvents events={events} />
          </ExpandablePanel>

          <ExpandablePanel title="Tours" onOpen={loadTours}>
            <ParkTours tours={tours} />
          </ExpandablePanel>

          <ExpandablePanel title="Campgrounds" onOpen={loadCampgrounds}>
            <ParkCampgrounds campgrounds={campgrounds} />
          </ExpandablePanel>

          <ExpandablePanel title="Climate">
            <div className={styles.INFO_CARD}>
              <p className={styles.BODY_TEXT}>
                {details.weatherInfo ||
                  "Climate information is not available for this park."}
              </p>
            </div>
          </ExpandablePanel>

          <ExpandablePanel title="Amenities" onOpen={loadAmenities}>
            <ParkAmenities amenities={amenities} />
          </ExpandablePanel>
        </div>
      </div>
    </section>
  );
}

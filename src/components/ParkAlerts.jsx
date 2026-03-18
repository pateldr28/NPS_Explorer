const styles = {
  SECTION: "bg-stone-50 rounded border border-stone-200 shadow-sm p-5",
  HEADER_ROW: "flex items-center justify-between gap-3 mb-4",
  HEADER: "text-lg font-semibold text-[#2F4F3A]",
  COUNT: "text-sm text-stone-500",
  EMPTY: "text-sm text-stone-500 leading-6",
  LIST: "space-y-3",
  ALERT_CARD:
    "rounded-xl border border-stone-200 border-l-4 bg-white p-4 shadow-sm transition hover:shadow-md",
  ALERT_LAYOUT: "flex items-start gap-4",
  ALERT_ICON_WRAP:
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white/80",
  ALERT_CONTENT: "min-w-0 flex-1",
  ALERT_HEADER: "mb-2",
  ALERT_TITLE: "font-semibold text-stone-900",
  ALERT_DESCRIPTION: "text-sm leading-6 text-stone-700",
  ALERT_CATEGORY: "mb-1 text-xs font-medium uppercase tracking-wide text-stone-500",
  ALERT_LINK:
    "mt-3 inline-block text-sm font-medium text-[#2F4F3A] underline underline-offset-2"
}

const alertCategoryStyles = {
  Danger: {
    card: "border-l-red-400 bg-red-50/50 shadow-red-100",
    iconWrap: "border-red-200 text-red-600"
  },
  Caution: {
    card: "border-l-amber-400 bg-amber-50/50 shadow-amber-100",
    iconWrap: "border-amber-200 text-amber-600"
  },
  Information: {
    card: "border-l-sky-400 bg-sky-50/50 shadow-sky-100",
    iconWrap: "border-sky-200 text-sky-600"
  },
  ParkClosure: {
    card: "border-l-orange-400 bg-orange-50/50 shadow-orange-100",
    iconWrap: "border-orange-200 text-orange-600"
  }
}

export default function ParkAlerts({ alerts }) {
  return (
    <section>
      <div className={styles.HEADER_ROW}>
        <p className={styles.COUNT}>
          {alerts.length === 0 ? "No current alerts" : `${alerts.length} current`}
        </p>
      </div>

      {alerts.length === 0 ? (
        <p className={styles.EMPTY}>No alerts for this park.</p>
      ) : (
        <div className={styles.LIST}>
          {alerts.map(alert => (
            <ParkAlert key={alert.id} alert={alert} />
          ))}
        </div>
      )}
    </section>
  )
}

function ParkAlert({ alert }) {
  const categoryStyle =
    alertCategoryStyles[alert.category] ||
    { card: "border-l-stone-300 bg-white shadow-stone-200", iconWrap: "border-stone-200 text-stone-500" }

  return (
    <article className={`${styles.ALERT_CARD} ${categoryStyle.card}`}>
      <div className={styles.ALERT_LAYOUT}>
        <div className={`${styles.ALERT_ICON_WRAP} ${categoryStyle.iconWrap}`}>
          <AlertIcon category={alert.category} />
        </div>

        <div className={styles.ALERT_CONTENT}>
          <div className={styles.ALERT_HEADER}>
            <p className={styles.ALERT_CATEGORY}>{alert.category}</p>
            <h3 className={styles.ALERT_TITLE}>{alert.title}</h3>
          </div>

          <p className={styles.ALERT_DESCRIPTION}>{alert.description}</p>

          {alert.url && (
            <a
              href={alert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ALERT_LINK}
            >
              More info
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function AlertIcon({ category }) {
  if (category === "Information") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="8" r="1.1" fill="currentColor" />
        <path
          d="M12 11v5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  if (category === "Caution") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 4.5 20 18.5H4L12 4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12 9v4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16.5" r="1" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 4.5 20 18.5H4L12 4.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.5v5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="11" y="16.5" width="2" height="2" rx="0.5" fill="currentColor" />
    </svg>
  )
}

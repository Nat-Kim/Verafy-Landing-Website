export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const mark = inverted ? "#14110e" : "#ffffff";
  const bg = inverted ? "#ffffff" : "#14110e";

  return (
    <div className="flex items-center gap-2">
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full"
        style={{ backgroundColor: bg }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 0C7 2.5 7 4.5 7 7C7 4.5 7 2.5 7 0Z"
            fill={mark}
          />
          <g fill={mark}>
            <ellipse cx="7" cy="2.6" rx="1.4" ry="2.6" />
            <ellipse
              cx="7"
              cy="2.6"
              rx="1.4"
              ry="2.6"
              transform="rotate(90 7 7)"
            />
            <ellipse
              cx="7"
              cy="2.6"
              rx="1.1"
              ry="2.2"
              transform="rotate(45 7 7)"
            />
            <ellipse
              cx="7"
              cy="2.6"
              rx="1.1"
              ry="2.2"
              transform="rotate(135 7 7)"
            />
          </g>
        </svg>
      </span>
      <span
        className={`text-base font-semibold tracking-tight ${
          inverted ? "text-white" : "text-text-dark"
        }`}
      >
        Verafy
      </span>
    </div>
  );
}

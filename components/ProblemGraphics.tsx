export function ManualReviewGraphic() {
  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24">
      <circle
        cx="50"
        cy="50"
        r="34"
        stroke="#c9c2b4"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="42" cy="38" r="3.5" fill="#4a9d5f" />
      <circle cx="60" cy="48" r="3.5" fill="#4a9d5f" />
      <circle cx="44" cy="58" r="3.5" fill="#4a9d5f" />
    </svg>
  );
}

export function MultiFormErrorsGraphic() {
  const green = "#4a9d5f";
  const red = "#d1483a";
  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24">
      <line x1="34" y1="66" x2="66" y2="34" stroke={red} strokeWidth="1" />
      <circle cx="34" cy="34" r="3.5" fill={green} />
      <circle cx="50" cy="34" r="3.5" fill={green} />
      <circle cx="66" cy="34" r="3.5" fill={green} />
      <circle cx="34" cy="50" r="3.5" fill={red} />
      <circle cx="50" cy="50" r="3.5" fill={green} />
      <circle cx="34" cy="66" r="3.5" fill={green} />
      <circle cx="50" cy="66" r="3.5" fill={red} />
      <circle cx="66" cy="66" r="3.5" fill={red} />
    </svg>
  );
}

export function RealConsequencesGraphic() {
  const green = "#4a9d5f";
  const orange = "#e15b28";
  const red = "#d1483a";
  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24">
      <line x1="30" y1="50" x2="70" y2="50" stroke={orange} strokeWidth="1" />
      <circle cx="30" cy="50" r="3.5" fill={green} />
      <circle cx="50" cy="50" r="3.5" fill={orange} />
      <circle cx="70" cy="50" r="3.5" fill={red} />
    </svg>
  );
}

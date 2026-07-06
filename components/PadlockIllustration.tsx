export default function PadlockIllustration() {
  return (
    <svg viewBox="0 0 200 220" className="h-full w-full">
      {/* shackle - white arc */}
      <path
        d="M55 100V70C55 42.3858 77.3858 20 105 20C132.614 20 155 42.3858 155 70V100"
        stroke="#ffffff"
        strokeWidth="26"
        fill="none"
      />
      {/* body - blue square */}
      <rect x="35" y="95" width="140" height="115" fill="#1c2b8a" />
      {/* keyhole - orange circle + triangle */}
      <circle cx="105" cy="140" r="16" fill="#e15b28" />
      <path d="M92 165L105 195L118 165H92Z" fill="#e15b28" />
    </svg>
  );
}

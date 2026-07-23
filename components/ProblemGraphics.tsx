export function ManualReviewGraphic() {
  return (
    <svg viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle cx="105" cy="41.6667" r="8" fill="#1F9D6B" />
      <circle cx="105" cy="105" r="8" fill="#1F9D6B" />
      <circle cx="105" cy="105" r="91.5" stroke="#8C8178" />
      <circle cx="168.333" cy="105" r="8" fill="#1F9D6B">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 105 105"
          to="360 105 105"
          dur="1.47s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function MultiFormErrorsGraphic() {
  const green = "#4a9d5f";
  const red = "#d1483a";
  const lenLeft = 75;
  const lenRight = 47;
  return (
    <svg viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle cx="41.667" cy="41.6667" r="8" fill="#1F9D6B" />
      <circle cx="105" cy="41.6667" r="8" fill="#1F9D6B" />
      <circle cx="168.333" cy="41.6667" r="8" fill="#1F9D6B" />
      <circle cx="41.667" cy="105" r="8" fill="#D6453F" />
      <circle cx="105" cy="105" r="8" fill="#1F9D6B" />
      <circle cx="168.333" cy="105" r="8" fill="#1F9D6B" />
      <circle cx="41.667" cy="168.333" r="8" fill="#1F9D6B" />
      <circle cx="105" cy="168.333" r="8" fill="#D6453F" opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.01s"
          begin="mfeL1Draw.end"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.01s"
          begin="mfeL1Reset.end"
          fill="freeze"
        />
      </circle>
      <circle cx="168.333" cy="168.333" r="8" fill="#D6453F" opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.01s"
          begin="mfeL2Draw.end"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.01s"
          begin="mfeL2Reset.end"
          fill="freeze"
        />
      </circle>
      <line
        x1="47.367"
        y1="110.16"
        x2="98.367"
        y2="165.16"
        stroke="#8C8178"
        strokeDasharray={lenLeft}
        strokeDashoffset={lenLeft}
      >
        <animate
          id="mfeL1Draw"
          attributeName="stroke-dashoffset"
          from={lenLeft}
          to="0"
          dur="0.45s"
          begin="0s;mfeL2Reset.end"
          fill="freeze"
        />
        <animate
          id="mfeL1Reset"
          attributeName="stroke-dashoffset"
          from="0"
          to={lenLeft}
          dur="0.01s"
          begin="mfeL2Draw.end+0.7s"
          fill="freeze"
        />
      </line>
      <line
        x1="113"
        y1="168"
        x2="160"
        y2="168"
        stroke="#8C8178"
        strokeDasharray={lenRight}
        strokeDashoffset={lenRight}
      >
        <animate
          id="mfeL2Draw"
          attributeName="stroke-dashoffset"
          from={lenRight}
          to="0"
          dur="0.3s"
          begin="mfeL1Draw.end"
          fill="freeze"
        />
        <animate
          id="mfeL2Reset"
          attributeName="stroke-dashoffset"
          from="0"
          to={lenRight}
          dur="0.01s"
          begin="mfeL1Reset.end"
          fill="freeze"
        />
      </line>
    </svg>
  );
}

export function RealConsequencesGraphic() {
  const green = "#4a9d5f";
  const orange = "#e15b28";
  const red = "#d1483a";
  return (
    <svg viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <clipPath id="rcClipLeft">
          <rect x="47" y="98" height="14" width="0">
            <animate
              id="rcP1Draw"
              attributeName="width"
              from="0"
              to="53"
              dur="0.45s"
              begin="0s;rcP2Reset.end"
              fill="freeze"
            />
            <animate
              id="rcP1Reset"
              attributeName="width"
              from="53"
              to="0"
              dur="0.01s"
              begin="rcP2Draw.end+0.7s"
              fill="freeze"
            />
          </rect>
        </clipPath>
        <clipPath id="rcClipRight">
          <rect x="110" y="98" height="14" width="0">
            <animate
              id="rcP2Draw"
              attributeName="width"
              from="0"
              to="53"
              dur="0.3s"
              begin="rcP1Draw.end"
              fill="freeze"
            />
            <animate
              id="rcP2Reset"
              attributeName="width"
              from="53"
              to="0"
              dur="0.01s"
              begin="rcP1Reset.end"
              fill="freeze"
            />
          </rect>
        </clipPath>
      </defs>
      <circle cx="41.667" cy="105" r="8" fill="#1F9D6B" />
      <circle cx="105" cy="105" r="8" fill="#EB712F" opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.01s"
          begin="rcP1Draw.end"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.01s"
          begin="rcP1Reset.end"
          fill="freeze"
        />
      </circle>
      <circle cx="168.333" cy="105" r="8" fill="#D6453F" opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.01s"
          begin="rcP2Draw.end"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="1"
          to="0"
          dur="0.01s"
          begin="rcP2Reset.end"
          fill="freeze"
        />
      </circle>
      <path
        d="M160.354 104.854C160.549 104.658 160.549 104.342 160.354 104.146L157.172 100.964C156.976 100.769 156.66 100.769 156.464 100.964C156.269 101.16 156.269 101.476 156.464 101.672L159.293 104.5L156.464 107.328C156.269 107.524 156.269 107.84 156.464 108.036C156.66 108.231 156.976 108.231 157.172 108.036L160.354 104.854ZM113 104.5V105H160V104.5V104H113V104.5Z"
        fill="#8C8178"
        clipPath="url(#rcClipRight)"
      />
      <path
        d="M97.354 104.854C97.549 104.658 97.549 104.342 97.354 104.146L94.172 100.964C93.976 100.769 93.66 100.769 93.464 100.964C93.269 101.16 93.269 101.476 93.464 101.672L96.293 104.5L93.464 107.328C93.269 107.524 93.269 107.84 93.464 108.036C93.66 108.231 93.976 108.231 94.172 108.036L97.354 104.854ZM50 104.5V105H97V104.5V104H50V104.5Z"
        fill="#8C8178"
        clipPath="url(#rcClipLeft)"
      />
    </svg>
  );
}

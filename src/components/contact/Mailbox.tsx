interface MailboxProps {
  flagUp?: boolean;
}

export default function Mailbox({ flagUp }: MailboxProps) {
  return (
    <svg width="140" height="150" viewBox="0 0 140 150" aria-hidden="true">
      <ellipse cx="70" cy="140" rx="55" ry="8" fill="#6B4A3E" opacity="0.12" />
      <rect x="60" y="80" width="12" height="55" rx="3" fill="#C9A27C" stroke="#6B4A3E" strokeWidth="3" />
      <rect x="30" y="35" width="80" height="55" rx="22" fill="#F5A9BC" stroke="#6B4A3E" strokeWidth="3" />
      <rect x="30" y="60" width="80" height="30" rx="0" fill="#F5A9BC" stroke="#6B4A3E" strokeWidth="0" />
      <path d="M 30 60 H 110" stroke="#6B4A3E" strokeWidth="2.5" opacity="0.5" />
      <rect x="92" y="46" width="20" height="16" rx="3" fill="#FBEBB5" stroke="#6B4A3E" strokeWidth="2.5" />
      <circle cx="40" cy="62" r="4" fill="#E88AA3" stroke="#6B4A3E" strokeWidth="2" />
      <g transform={`translate(96,58) rotate(${flagUp ? -60 : 0})`} style={{ transition: "transform 0.4s ease" }}>
        <rect x="-3" y="-26" width="6" height="26" fill="#8B6F8E" stroke="#6B4A3E" strokeWidth="2" />
        <rect x="-3" y="-26" width="16" height="12" fill="#DCD6F7" stroke="#6B4A3E" strokeWidth="2" />
      </g>
    </svg>
  );
}

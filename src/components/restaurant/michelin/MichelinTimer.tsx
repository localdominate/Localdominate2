interface MichelinTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const MichelinTimer = ({ hours, minutes, seconds }: MichelinTimerProps) => {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="rest-timer-box">
        <span className="text-lg font-medium">{String(hours).padStart(2, '0')}</span>
        <p className="rest-timer-label">Std</p>
      </div>
      <span className="text-[hsl(var(--rest-text-muted))]">:</span>
      <div className="rest-timer-box">
        <span className="text-lg font-medium">{String(minutes).padStart(2, '0')}</span>
        <p className="rest-timer-label">Min</p>
      </div>
      <span className="text-[hsl(var(--rest-text-muted))]">:</span>
      <div className="rest-timer-box">
        <span className="text-lg font-medium">{String(seconds).padStart(2, '0')}</span>
        <p className="rest-timer-label">Sek</p>
      </div>
    </div>
  );
};

export default MichelinTimer;

import { DEFAULT_GRADIENT } from './gradients';

interface FeedProps {
  title: string;
  gradient?: string;
}

function FeedCard(props: FeedProps): JSX.Element {
  const gradient = props.gradient || DEFAULT_GRADIENT;

  return (
    <div
      style={{
        background: gradient,
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
        height: '384px',
        padding: '6px',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          height: '100%',
          padding: '16px',
        }}
      >
        <h2
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#ffffff',
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
          }}
        >
          {props.title}
        </h2>
        <p
          style={{
            marginTop: '8px',
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.6',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default FeedCard;
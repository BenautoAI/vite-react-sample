interface FeedProps {
  title: string;
  gradient?: string;
}

const GRADIENTS = [
  'linear-gradient(135deg, #6EE7B7 0%, #3B82F6 50%, #9333EA 100%)',
  'linear-gradient(135deg, #FCA5A5 0%, #F97316 50%, #FBBF24 100%)',
  'linear-gradient(135deg, #93C5FD 0%, #6366F1 50%, #8B5CF6 100%)',
  'linear-gradient(135deg, #6EE7B7 0%, #10B981 50%, #059669 100%)',
  'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #EF4444 100%)',
  'linear-gradient(135deg, #FBCFE8 0%, #EC4899 50%, #8B5CF6 100%)',
];

function FeedCard(props: FeedProps) {
  const gradient = props.gradient;
  return (
    <div
      style={{
        background: gradient || GRADIENTS[0],
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
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>{props.title}</h2>
        <p style={{ marginTop: '8px', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export { GRADIENTS };
export default FeedCard;
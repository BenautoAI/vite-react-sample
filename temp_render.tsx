import Avatar from './src/components/Avatar/index';
import FeedGrid from './src/components/Grids/Index';

export default function TempRender() {
  return (
    <div style={{ padding: '2rem' }}>
      <div>
        <Avatar
          realname="Felipe Aguiar"
          nickname="@Felipao__DIO🚀"
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </div>
  );
}

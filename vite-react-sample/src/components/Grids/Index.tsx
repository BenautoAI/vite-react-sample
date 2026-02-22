import FeedCard from "../FeedCard";
import { Grid } from "../Grid";

function FeedGrid() {
  return (
    <Grid cols={3} gap={4}>
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />

      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />

      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
    </Grid>
  );
}

export default FeedGrid;
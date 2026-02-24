import Grid from "../Grid";
import FeedCard from "../FeedCard";

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

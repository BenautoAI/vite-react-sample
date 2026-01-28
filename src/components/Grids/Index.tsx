import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard campaignTitle="Foto Casa" country="Spain" capAmount="$30,000" status="active" />
      <FeedCard campaignTitle="Foto Casa" country="Mexico" capAmount="$25,000" status="paused" />
      <FeedCard campaignTitle="Foto Casa" country="Argentina" capAmount="$20,000" status="completed" />

      <FeedCard campaignTitle="Foto Casa" country="Colombia" capAmount="$35,000" status="draft" />
      <FeedCard campaignTitle="Foto Casa" country="Chile" capAmount="$28,000" status="active" />
      <FeedCard campaignTitle="Foto Casa" country="Peru" capAmount="$22,000" status="paused" />

      <FeedCard campaignTitle="Foto Casa" country="Uruguay" capAmount="$18,000" status="completed" />
      <FeedCard campaignTitle="Foto Casa" country="Venezuela" capAmount="$15,000" status="draft" />
      <FeedCard campaignTitle="Foto Casa" country="Ecuador" capAmount="$20,000" status="active" />
    </div>

  );
}

export default FeedGrid;
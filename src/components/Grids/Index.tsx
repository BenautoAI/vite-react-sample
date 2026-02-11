import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard 
        title="Beautiful Sunset at the Beach" 
        description="Captured this amazing moment during my evening walk. Nature never fails to amaze me!"
        authorName="Sarah Johnson"
        timestamp="2h ago"
        likes={234}
        comments={18}
      />
      <FeedCard 
        title="Mountain Adventure" 
        description="Hiking through the mountains this weekend. The view from the top was absolutely worth it!"
        authorName="Mike Chen"
        timestamp="5h ago"
        likes={156}
        comments={12}
      />
      <FeedCard 
        title="Coffee & Code" 
        description="Perfect way to start my Monday morning. Building something amazing today!"
        authorName="Alex Rivera"
        timestamp="1d ago"
        likes={89}
        comments={7}
      />

      <FeedCard 
        title="City Lights" 
        description="The skyline looks incredible at night. Love this vibrant city!"
        authorName="Emily Watson"
        timestamp="2d ago"
        likes={421}
        comments={34}
      />
      <FeedCard 
        title="Homemade Pasta" 
        description="First time making pasta from scratch. Pretty proud of how it turned out!"
        authorName="David Kim"
        timestamp="3d ago"
        likes={178}
        comments={23}
      />
      <FeedCard 
        title="Weekend Vibes" 
        description="Spending quality time with friends and family. These moments matter most."
        authorName="Lisa Brown"
        timestamp="4d ago"
        likes={267}
        comments={15}
      />

      <FeedCard 
        title="New Project Launch" 
        description="Excited to share what we've been working on. Check it out and let me know what you think!"
        authorName="James Wilson"
        timestamp="1w ago"
        likes={512}
        comments={45}
      />
      <FeedCard 
        title="Garden Progress" 
        description="My tomatoes are finally starting to grow! Can't wait for the harvest."
        authorName="Maria Garcia"
        timestamp="1w ago"
        likes={134}
        comments={9}
      />
      <FeedCard 
        title="Fitness Journey" 
        description="Week 8 of my fitness journey. Feeling stronger and more confident every day!"
        authorName="Tom Anderson"
        timestamp="2w ago"
        likes={298}
        comments={27}
      />
    </div>

  );
}

export default FeedGrid;
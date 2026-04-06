import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

function FeedPage() {
  const sampleCards = [
    {
      id: '1',
      title: 'Mountain Adventure',
      description: 'Explore the breathtaking peaks and valleys of the mountain range.'
    },
    {
      id: '2',
      title: 'Beach Sunset',
      description: 'Watch the sun set over the ocean with golden hues painting the sky.'
    },
    {
      id: '3',
      title: 'City Lights',
      description: 'Experience the vibrant nightlife and illuminated skyline of the city.'
    },
    {
      id: '4',
      title: 'Forest Trail',
      description: 'Wander through lush green forests and discover hidden paths.'
    },
    {
      id: '5',
      title: 'Desert Dunes',
      description: 'Journey across vast golden sands under the endless blue sky.'
    },
    {
      id: '6',
      title: 'Northern Lights',
      description: 'Witness the magical dance of auroras in the Arctic night.'
    },
    {
      id: '7',
      title: 'Tropical Paradise',
      description: 'Relax in a tropical getaway with crystal-clear waters and palm trees.'
    },
    {
      id: '8',
      title: 'Ancient Ruins',
      description: 'Step back in time and explore historical architectural wonders.'
    },
    {
      id: '9',
      title: 'Snowy Peaks',
      description: 'Adventure through snow-covered mountains and pristine winter landscapes.'
    }
  ];

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid cards={sampleCards} />
      </div>
    </>
  );
}

export default FeedPage;
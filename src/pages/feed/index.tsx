import { useState } from 'react';
import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import CardList, { CardListItem } from "../../components/CardList"

function FeedPage() {
  const initialItems: CardListItem[] = [
    {
      title: "Foto Casa",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Foto Casa",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Foto Casa",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      title: "Foto Casa",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Foto Casa",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    }
  ];

  const [items, setItems] = useState<CardListItem[]>(initialItems);

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Grid Layout</h3>
        <FeedGrid />
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-medium text-gray-900 mb-4">List Layout</h3>
        <CardList items={items} onItemsChange={setItems} />
      </div>
    </>
  );
}

export default FeedPage;
interface Card {
  id: number;
  nickname: string;
  realname: string;
  description: string;
}

interface CardsListProps {
  cards?: Card[];
}

function CardsList(props: CardsListProps) {
  const defaultCards: Card[] = [
    {
      id: 1,
      nickname: "@Felipao__DIO🚀",
      realname: "Felipe Aguiar",
      description: "Software developer passionate about building amazing applications"
    },
    {
      id: 2,
      nickname: "@JohnDev",
      realname: "John Developer",
      description: "Full-stack engineer with expertise in React and Node.js"
    },
    {
      id: 3,
      nickname: "@SarahCode",
      realname: "Sarah Coder",
      description: "Frontend specialist creating beautiful user experiences"
    },
    {
      id: 4,
      nickname: "@MikeJS",
      realname: "Mike JavaScript",
      description: "JavaScript enthusiast and open source contributor"
    },
    {
      id: 5,
      nickname: "@EmilyUI",
      realname: "Emily Design",
      description: "UI/UX designer focused on accessible and inclusive design"
    },
    {
      id: 6,
      nickname: "@AlexWeb",
      realname: "Alex Webster",
      description: "Web developer exploring cutting-edge technologies"
    }
  ];

  const cardsToDisplay = props.cards || defaultCards;

  return (
    <div className="
      w-full
      p-4
    ">
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">
        {cardsToDisplay.map((card) => (
          <div
            key={card.id}
            className="
              bg-white
              rounded-lg
              shadow-md
              p-6
              hover:shadow-lg
              transition-shadow
              duration-300
            "
          >
            <div className="
              flex
              items-center
              mb-4
            ">
              <div className="
                w-16
                h-16
                rounded-full
                bg-gradient-to-r
                from-[#6EE7B7]
                via-[#3B82F6]
                to-[#9333EA]
                p-[2px]
                flex
                items-center
                justify-center
              ">
                <div className="
                  w-full
                  h-full
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                  bg-gradient-to-r
                  from-[#6EE7B7]
                  via-[#3B82F6]
                  to-[#9333EA]
                  bg-clip-text
                  text-transparent
                ">
                  {card.nickname.charAt(1)}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="
                  text-lg
                  font-medium
                  text-gray-900
                ">
                  {card.nickname}
                </h3>
                <p className="
                  text-sm
                  text-gray-500
                  mt-1
                ">
                  {card.realname}
                </p>
              </div>
            </div>

            <p className="
              text-sm
              text-gray-600
              mb-4
              line-clamp-2
            ">
              {card.description}
            </p>

            <button className="
              w-full
              bg-gradient-to-r
              from-[#6EE7B7]
              via-[#3B82F6]
              to-[#9333EA]
              text-white
              font-medium
              py-2
              px-4
              rounded-lg
              hover:opacity-90
              transition-opacity
              duration-300
            ">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsList;

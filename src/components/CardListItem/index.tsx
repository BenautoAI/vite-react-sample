interface CardData {
  id: string | number;
  image: string;
  nickname: string;
  realname: string;
  followUrl?: string;
}

function CardListItem(props: CardData) {
  return (
    <div className="
      card__container
      flex
      flex-col
      items-center
      justify-center
      bg-white
      rounded-lg
      shadow-md
      p-8
      hover:shadow-lg
      hover:scale-105
      transition-all
      duration-300
      ">

      <div className="card__image mb-6">
        <div className="
          rounded-full
          bg-gradient-to-r
          from-[#6EE7B7]
          via-[#3B82F6]
          to-[#9333EA]
          p-[6px]
          ">
          <img
            className="
            w-32
            h-32
            rounded-full
            object-cover
            "
            src={props.image}
            alt={props.nickname}
          />
        </div>
      </div>

      <div className="card__content text-center">
        <div className="card__nickname mb-2">
          <h3 className="text-lg font-medium text-gray-900">
            {props.nickname}
          </h3>
        </div>

        <div className="card__realname mb-4">
          <p className="text-sm text-gray-600">
            {props.realname}
          </p>
        </div>

        {props.followUrl && (
          <div className="card__action">
            <a
              href={props.followUrl}
              className="
              inline-block
              px-6
              py-2
              bg-blue-500
              text-white
              rounded-lg
              hover:bg-blue-600
              transition-colors
              duration-200
              "
            >
              Follow
            </a>
          </div>
        )}
      </div>

    </div>
  );
}

export default CardListItem;

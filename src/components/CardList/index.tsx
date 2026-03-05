import Avatar from "../Avatar"

interface User {
  id?: string
  nickname: string
  realname: string
}

interface CardListProps {
  users: User[]
}

function CardList(props: CardListProps) {
  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      p-4
    ">
      {props.users.map((user) => (
        <div key={user.id || user.nickname} className="
          bg-white
          rounded-lg
          p-6
          shadow-md
          hover:shadow-lg
          transition-shadow
        ">
          <Avatar 
            nickname={user.nickname}
            realname={user.realname}
          />
        </div>
      ))}
    </div>
  )
}

export default CardList

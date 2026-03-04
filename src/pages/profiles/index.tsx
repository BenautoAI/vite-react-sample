import ProfileCard from '../../components/ProfileCard';
import ProfileCardList from '../../components/ProfileCard/ProfileCardList';

interface ProfileData {
  id: string;
  nickname: string;
  realname: string;
  imageUrl: string;
  isFollowing?: boolean;
}

function ProfilesPage() {
  // Sample profiles data
  const profiles: ProfileData[] = [
    {
      id: '1',
      nickname: '@João_Dev',
      realname: 'João Silva',
      imageUrl: './src/assets/photo.png',
      isFollowing: false,
    },
    {
      id: '2',
      nickname: '@Maria_Design',
      realname: 'Maria Santos',
      imageUrl: './src/assets/photo.png',
      isFollowing: false,
    },
    {
      id: '3',
      nickname: '@Pedro_Tech',
      realname: 'Pedro Costa',
      imageUrl: './src/assets/photo.png',
      isFollowing: true,
    },
    {
      id: '4',
      nickname: '@Ana_Code',
      realname: 'Ana Oliveira',
      imageUrl: './src/assets/photo.png',
      isFollowing: false,
    },
    {
      id: '5',
      nickname: '@Carlos_Web',
      realname: 'Carlos Mendes',
      imageUrl: './src/assets/photo.png',
      isFollowing: false,
    },
    {
      id: '6',
      nickname: '@Laura_Front',
      realname: 'Laura Ferreira',
      imageUrl: './src/assets/photo.png',
      isFollowing: false,
    },
  ];

  const handleFollow = (profileId: string) => {
    console.log(`Following profile ${profileId}`);
  };

  return (
    <div className='w-full p-8'>
      <div className='mb-12'>
        <h1 className='text-3xl font-bold mb-4'>Single Profile Card</h1>
        <p className='text-gray-600 mb-6'>Individual ProfileCard component:</p>
        <div className='max-w-sm'>
          <ProfileCard
            nickname='@Felipao__DIO🚀'
            realname='Felipe Aguiar'
            imageUrl='./src/assets/photo.png'
          />
        </div>
      </div>

      <div>
        <h1 className='text-3xl font-bold mb-4'>Profile List</h1>
        <p className='text-gray-600 mb-6'>Multiple profiles in a grid layout:</p>
        <ProfileCardList
          profiles={profiles}
          columns={3}
          onFollow={handleFollow}
        />
      </div>
    </div>
  );
}

export default ProfilesPage;

import WizardAvatar from '../../components/WizardAvatar'
import FeedGrid from '../../components/Grids/Index'

function FeedPage() {
  return (
    <>
      <div>
        <WizardAvatar
          realname='Felipe Aguiar' nickname='@Felipao__DIO🚀' />
      </div>
      <div className='mt-10'>
        <FeedGrid />
      </div>
    </>
  )
}

export default FeedPage
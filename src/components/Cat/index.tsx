interface CatProps {
  imageUrl?: string;
  altText?: string;
  backgroundColor?: string;
}

function Cat(props: CatProps) {
  return (
    <div 
      className='
        cat__container 
        flex 
        items-center 
        justify-center 
        w-full 
        h-96
        rounded-lg
        overflow-hidden
      '
      style={{ 
        backgroundColor: props.backgroundColor || '#00BFFF' 
      }}
    >
      <div className='cat__image-wrapper'>
        <img
          className='
            cat__image
            max-w-full
            max-h-full
            object-contain
            hover:scale-110
            transition-transform
            duration-300
          '
          src={props.imageUrl || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23FFB6C1" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em"%3E🐱%3C/text%3E%3C/svg%3E'}
          alt={props.altText || 'A playful cat waving its paw'}
        />
      </div>
    </div>
  );
}

export default Cat;

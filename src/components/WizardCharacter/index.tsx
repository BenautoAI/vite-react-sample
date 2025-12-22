interface WizardCharacterProps {
  className?: string;
}

function WizardCharacter(props: WizardCharacterProps) {
  return (
    <div 
      className={`
        wizard-character__container 
        flex 
        items-center 
        justify-center 
        ${props.className || ''}
      `}
    >
      <div className="
        wizard-character__frame
        relative 
        w-full 
        max-w-2xl 
        aspect-square
      ">
        {/* Outer circle background */}
        <div className="
          wizard-character__background
          absolute 
          inset-0 
          rounded-full 
          border-4 
          border-[#8B6F47] 
          bg-[#E8DCC4]
        "></div>
        
        {/* Inner rectangle frame */}
        <div className="
          absolute 
          inset-0 
          flex 
          items-center 
          justify-center
        ">
          <div className="
            wizard-character__inner-border
            w-[85%] 
            h-[70%] 
            border-2 
            border-[#8B6F47]
          "></div>
        </div>

        {/* Main character content */}
        <div className="
          absolute 
          inset-0 
          flex 
          items-center 
          justify-center
        ">
          <div className="
            wizard-character__body
            relative 
            flex 
            flex-col 
            items-center
          ">
            
            {/* Wizard Hat */}
            <div className="
              wizard-character__hat
              relative 
              mb-[-20px] 
              z-10
            ">
              {/* Hat cone/tip */}
              <div className="
                hat__cone
                relative 
                w-32 
                h-48
              ">
                {/* Main cone shape */}
                <div 
                  className="
                    absolute 
                    left-1/2 
                    -translate-x-1/2 
                    w-0 
                    h-0
                  "
                  style={{
                    borderLeft: '64px solid transparent',
                    borderRight: '64px solid transparent',
                    borderBottom: '192px solid #4A5F7F',
                  }}
                >
                  {/* Stars and moons decorations on cone */}
                  <div className="
                    absolute 
                    top-8 
                    left-[-50px] 
                    text-3xl
                  ">⭐</div>
                  <div className="
                    absolute 
                    top-24 
                    left-[-55px] 
                    text-2xl
                  ">🌙</div>
                  <div className="
                    absolute 
                    top-36 
                    left-[-45px] 
                    text-xl
                  ">⭐</div>
                </div>
              </div>
              
              {/* Hat brim */}
              <div className="
                hat__brim
                relative 
                w-64 
                h-16 
                -mt-2
              ">
                <div 
                  className="
                    absolute 
                    w-full 
                    h-full 
                    rounded-[50%] 
                    bg-[#4A5F7F] 
                    border-4 
                    border-[#2C3E50]
                  "
                  style={{
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Decorations on brim */}
                  <div className="
                    absolute 
                    top-2 
                    left-8 
                    text-2xl
                  ">🌙</div>
                  <div className="
                    absolute 
                    top-2 
                    left-1/2 
                    -translate-x-1/2 
                    text-xl
                  ">⭐</div>
                  <div className="
                    absolute 
                    top-2 
                    right-8 
                    text-2xl
                  ">🌙</div>
                </div>
              </div>
            </div>

            {/* TV Monitor Body */}
            <div className="
              wizard-character__monitor
              relative 
              z-0
            ">
              {/* Monitor frame */}
              <div className="
                monitor__frame
                w-64 
                h-56 
                bg-[#8B6F47] 
                rounded-2xl 
                border-8 
                border-[#6B5335] 
                shadow-2xl
              ">
                
                {/* Screen */}
                <div className="
                  monitor__screen
                  absolute 
                  top-6 
                  left-6 
                  right-6 
                  bottom-16 
                  bg-gradient-to-br 
                  from-[#A8D08D] 
                  via-[#7FB347] 
                  to-[#6B9E3E] 
                  rounded-lg 
                  border-4 
                  border-[#5C4033] 
                  overflow-hidden
                ">
                  {/* Screen glare effect */}
                  <div className="
                    screen__glare-top
                    absolute 
                    top-2 
                    left-4 
                    w-16 
                    h-12 
                    bg-white 
                    opacity-30 
                    rounded-full 
                    blur-xl
                  "></div>
                  <div className="
                    screen__glare-bottom
                    absolute 
                    bottom-4 
                    right-6 
                    w-20 
                    h-16 
                    bg-white 
                    opacity-20 
                    rounded-full 
                    blur-2xl
                  "></div>
                </div>

                {/* Control button */}
                <div className="
                  monitor__button
                  absolute 
                  bottom-4 
                  left-1/2 
                  -translate-x-1/2 
                  w-8 
                  h-8 
                  bg-[#D4A574] 
                  rounded-full 
                  border-4 
                  border-[#8B6F47] 
                  shadow-inner
                "></div>
              </div>

              {/* Arms */}
              <div className="
                wizard-character__arms-left
                absolute 
                top-16 
                -left-20 
                flex 
                flex-col 
                gap-1
              ">
                {/* Left arm pair */}
                <div className="
                  flex 
                  items-center 
                  gap-1
                ">
                  {/* Arm segment */}
                  <div className="
                    arm__segment
                    w-16 
                    h-4 
                    bg-[#3A3A3A] 
                    rounded-full 
                    border-2 
                    border-[#2A2A2A]
                  "></div>
                  {/* Hand */}
                  <div className="
                    arm__hand
                    relative
                  ">
                    <div className="
                      hand__palm
                      w-8 
                      h-10 
                      bg-white 
                      rounded-lg 
                      border-2 
                      border-[#2A2A2A]
                    "></div>
                    {/* Fingers */}
                    <div className="
                      hand__finger
                      absolute 
                      -top-2 
                      left-1 
                      w-1.5 
                      h-4 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                    <div className="
                      hand__finger
                      absolute 
                      -top-3 
                      left-3 
                      w-1.5 
                      h-5 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                    <div className="
                      hand__finger
                      absolute 
                      -top-2 
                      right-2 
                      w-1.5 
                      h-4 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                  </div>
                </div>
                <div className="
                  flex 
                  items-center 
                  gap-1 
                  mt-2
                ">
                  {/* Arm segment */}
                  <div className="
                    arm__segment
                    w-16 
                    h-4 
                    bg-[#3A3A3A] 
                    rounded-full 
                    border-2 
                    border-[#2A2A2A]
                  "></div>
                  {/* Hand */}
                  <div className="
                    arm__hand
                    relative
                  ">
                    <div className="
                      hand__palm
                      w-8 
                      h-10 
                      bg-white 
                      rounded-lg 
                      border-2 
                      border-[#2A2A2A]
                    "></div>
                    {/* Fingers */}
                    <div className="
                      hand__finger
                      absolute 
                      -top-2 
                      left-1 
                      w-1.5 
                      h-4 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                    <div className="
                      hand__finger
                      absolute 
                      -top-3 
                      left-3 
                      w-1.5 
                      h-5 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                    <div className="
                      hand__finger
                      absolute 
                      -top-2 
                      right-2 
                      w-1.5 
                      h-4 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                  </div>
                </div>
              </div>

              {/* Right arms */}
              <div className="
                wizard-character__arms-right
                absolute 
                top-16 
                -right-20 
                flex 
                flex-col 
                gap-1
              ">
                {/* Right arm pair */}
                <div className="
                  flex 
                  items-center 
                  gap-1
                ">
                  {/* Hand */}
                  <div className="
                    arm__hand
                    relative
                  ">
                    <div className="
                      hand__palm
                      w-8 
                      h-10 
                      bg-white 
                      rounded-lg 
                      border-2 
                      border-[#2A2A2A]
                    "></div>
                    {/* Fingers */}
                    <div className="
                      hand__finger
                      absolute 
                      -top-2 
                      left-1 
                      w-1.5 
                      h-4 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                    <div className="
                      hand__finger
                      absolute 
                      -top-3 
                      left-3 
                      w-1.5 
                      h-5 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                    <div className="
                      hand__finger
                      absolute 
                      -top-2 
                      right-2 
                      w-1.5 
                      h-4 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                  </div>
                  {/* Arm segment */}
                  <div className="
                    arm__segment
                    w-16 
                    h-4 
                    bg-[#3A3A3A] 
                    rounded-full 
                    border-2 
                    border-[#2A2A2A]
                  "></div>
                </div>
                <div className="
                  flex 
                  items-center 
                  gap-1 
                  mt-2
                ">
                  {/* Hand */}
                  <div className="
                    arm__hand
                    relative
                  ">
                    <div className="
                      hand__palm
                      w-8 
                      h-10 
                      bg-white 
                      rounded-lg 
                      border-2 
                      border-[#2A2A2A]
                    "></div>
                    {/* Fingers */}
                    <div className="
                      hand__finger
                      absolute 
                      -top-2 
                      left-1 
                      w-1.5 
                      h-4 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                    <div className="
                      hand__finger
                      absolute 
                      -top-3 
                      left-3 
                      w-1.5 
                      h-5 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                    <div className="
                      hand__finger
                      absolute 
                      -top-2 
                      right-2 
                      w-1.5 
                      h-4 
                      bg-white 
                      border 
                      border-[#2A2A2A] 
                      rounded-sm
                    "></div>
                  </div>
                  {/* Arm segment */}
                  <div className="
                    arm__segment
                    w-16 
                    h-4 
                    bg-[#3A3A3A] 
                    rounded-full 
                    border-2 
                    border-[#2A2A2A]
                  "></div>
                </div>
              </div>

              {/* Legs */}
              <div className="
                wizard-character__legs
                absolute 
                -bottom-12 
                left-1/2 
                -translate-x-1/2 
                flex 
                gap-4
              ">
                {/* Left leg */}
                <div className="
                  leg__container
                  flex 
                  flex-col 
                  items-center
                ">
                  <div className="
                    leg__segment
                    w-4 
                    h-12 
                    bg-[#3A3A3A] 
                    border-2 
                    border-[#2A2A2A] 
                    rounded-full
                  "></div>
                  {/* Foot */}
                  <div className="
                    leg__foot
                    w-8 
                    h-6 
                    bg-[#6B5335] 
                    rounded-md 
                    border-2 
                    border-[#4A3525] 
                    mt-1
                  "></div>
                </div>
                {/* Right leg */}
                <div className="
                  leg__container
                  flex 
                  flex-col 
                  items-center
                ">
                  <div className="
                    leg__segment
                    w-4 
                    h-12 
                    bg-[#3A3A3A] 
                    border-2 
                    border-[#2A2A2A] 
                    rounded-full
                  "></div>
                  {/* Foot */}
                  <div className="
                    leg__foot
                    w-8 
                    h-6 
                    bg-[#6B5335] 
                    rounded-md 
                    border-2 
                    border-[#4A3525] 
                    mt-1
                  "></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WizardCharacter;

import Avatar from '../components/Avatar/index';
import AvatarGroup from '../components/Avatar/AvatarGroup';

/**
 * AvatarShowcase - Demonstrates all avatar component variants and usage patterns
 */
function AvatarShowcase() {
  const sampleUsers = [
    { name: 'John Doe', src: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Jane Smith', src: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Bob Johnson', src: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Alice Williams', src: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Charlie Brown', src: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Diana Prince', src: 'https://i.pravatar.cc/150?img=6' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Avatar Component Showcase
          </h1>
          <p className="text-gray-400 text-lg">
            Flexible avatar components with image support and initials fallback
          </p>
        </div>

        {/* Size Variants with Images */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Size Variants (with Images)</h2>
          <div className="flex items-end gap-6 flex-wrap bg-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?img=10" name="John Doe" size="xs" />
              <span className="text-xs text-gray-400">xs</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?img=11" name="Jane Smith" size="sm" />
              <span className="text-xs text-gray-400">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?img=12" name="Bob Johnson" size="md" />
              <span className="text-xs text-gray-400">md (default)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?img=13" name="Alice Williams" size="lg" />
              <span className="text-xs text-gray-400">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?img=14" name="Charlie Brown" size="xl" />
              <span className="text-xs text-gray-400">xl</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar src="https://i.pravatar.cc/150?img=15" name="Diana Prince" size="2xl" />
              <span className="text-xs text-gray-400">2xl</span>
            </div>
          </div>
        </section>

        {/* Initials Fallback */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Initials Fallback (No Image)</h2>
          <div className="flex items-center gap-6 flex-wrap bg-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Avatar name="John Doe" size="md" />
              <span className="text-xs text-gray-400">John Doe</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Sarah Johnson" size="md" />
              <span className="text-xs text-gray-400">Sarah Johnson</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Mike" size="md" />
              <span className="text-xs text-gray-400">Mike</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Emily Rodriguez" size="md" />
              <span className="text-xs text-gray-400">Emily Rodriguez</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="" size="md" />
              <span className="text-xs text-gray-400">No Name</span>
            </div>
          </div>
        </section>

        {/* Gradient Border Variant */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Gradient Border Variant</h2>
          <div className="flex items-center gap-6 flex-wrap bg-gray-800 p-6 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Avatar 
                src="https://i.pravatar.cc/150?img=20" 
                name="Premium User" 
                size="lg" 
                withGradientBorder 
              />
              <span className="text-xs text-gray-400">With Image</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar 
                name="VIP Member" 
                size="lg" 
                withGradientBorder 
              />
              <span className="text-xs text-gray-400">With Initials</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar 
                src="https://i.pravatar.cc/150?img=21" 
                name="Elite User" 
                size="xl" 
                withGradientBorder 
              />
              <span className="text-xs text-gray-400">Extra Large</span>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Avatar Groups</h2>
          
          <div className="space-y-6 bg-gray-800 p-6 rounded-lg">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-300">Small Group (3 members)</h3>
              <AvatarGroup 
                avatars={sampleUsers.slice(0, 3)} 
                size="md"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-300">Full Group (max 4, showing +2)</h3>
              <AvatarGroup 
                avatars={sampleUsers} 
                max={4}
                size="md"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-300">Large Size Group</h3>
              <AvatarGroup 
                avatars={sampleUsers.slice(0, 4)} 
                size="lg"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-300">With Gradient Borders</h3>
              <AvatarGroup 
                avatars={sampleUsers.slice(0, 5)} 
                max={4}
                size="md"
                withGradientBorder
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-300">Small Size Group</h3>
              <AvatarGroup 
                avatars={sampleUsers} 
                max={5}
                size="sm"
              />
            </div>
          </div>
        </section>

        {/* User Profile Card Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">User Profile Card Example</h2>
          <div className="bg-gray-800 p-8 rounded-lg max-w-md">
            <div className="flex items-center gap-4">
              <Avatar 
                src="https://i.pravatar.cc/150?img=30" 
                name="Sarah Johnson" 
                size="xl" 
                withGradientBorder
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-gray-400">@sarahj</p>
                <div className="mt-2 flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                    Follow
                  </button>
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mixed States */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Mixed States (Images & Initials)</h2>
          <div className="flex items-center gap-6 flex-wrap bg-gray-800 p-6 rounded-lg">
            <Avatar src="https://i.pravatar.cc/150?img=40" name="User 1" size="lg" />
            <Avatar name="User 2" size="lg" />
            <Avatar src="https://i.pravatar.cc/150?img=41" name="User 3" size="lg" />
            <Avatar name="User 4" size="lg" />
            <Avatar src="https://i.pravatar.cc/150?img=42" name="User 5" size="lg" />
          </div>
        </section>

        {/* Custom Styling Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Custom Styling</h2>
          <div className="flex items-center gap-6 flex-wrap bg-gray-800 p-6 rounded-lg">
            <Avatar 
              name="Custom 1" 
              size="lg" 
              className="ring-4 ring-green-500 ring-offset-2 ring-offset-gray-800"
            />
            <Avatar 
              src="https://i.pravatar.cc/150?img=50" 
              name="Custom 2" 
              size="lg" 
              className="ring-4 ring-pink-500 ring-offset-2 ring-offset-gray-800"
            />
            <Avatar 
              name="Custom 3" 
              size="lg" 
              className="ring-4 ring-yellow-500 ring-offset-2 ring-offset-gray-800 hover:scale-110 transition-transform"
            />
          </div>
        </section>

        {/* Code Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Usage Examples</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Basic Avatar with Image</h3>
              <pre className="text-xs text-green-400 overflow-x-auto">
{`<Avatar 
  src="https://example.com/avatar.jpg" 
  name="John Doe" 
  size="md" 
/>`}
              </pre>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Avatar with Initials Fallback</h3>
              <pre className="text-xs text-green-400 overflow-x-auto">
{`<Avatar 
  name="Jane Smith" 
  size="lg" 
/>`}
              </pre>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Avatar with Gradient Border</h3>
              <pre className="text-xs text-green-400 overflow-x-auto">
{`<Avatar 
  src="https://example.com/avatar.jpg" 
  name="VIP User" 
  size="xl" 
  withGradientBorder 
/>`}
              </pre>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Avatar Group</h3>
              <pre className="text-xs text-green-400 overflow-x-auto">
{`<AvatarGroup 
  avatars={[
    { name: 'John Doe', src: 'url1' },
    { name: 'Jane Smith', src: 'url2' },
    { name: 'Bob Johnson' }
  ]} 
  max={4}
  size="md"
/>`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AvatarShowcase;

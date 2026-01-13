# FeiViteLogo Component

A custom React component that combines the Vite logo with a whimsical wizard character avatar named Fei. The character features a retro monitor/TV screen body with the Vite brand colors, wearing a magical blue wizard hat decorated with stars and moons.

## Features

- 🎨 **Retro Monitor Design**: Features a vintage TV/monitor as the character's "head" with a green gradient screen
- 🧙 **Wizard Theme**: Blue wizard hat decorated with yellow stars and crescent moons
- 🤖 **Robot-Style Body**: Mechanical appearance with four cartoon arms and boot-wearing legs
- 📏 **Customizable Size**: Adjustable width and height props
- 🎯 **Flexible Styling**: Optional className prop for additional CSS customization
- ♿ **Accessible**: Includes proper ARIA labels for screen readers

## Usage

```tsx
import FeiViteLogo from './components/FeiViteLogo';

// Default size (150x180)
<FeiViteLogo />

// Custom size
<FeiViteLogo width={200} height={240} />

// With custom styling
<FeiViteLogo className="hover:scale-110 transition-transform" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Optional CSS class names for additional styling |
| `width` | `number` | `150` | Width of the logo in pixels |
| `height` | `number` | `180` | Height of the logo in pixels |

## Visual Description

The component renders an inline SVG that includes:

1. **Original Vite Logo**: The iconic lightning bolt design with blue-to-purple and yellow-to-orange gradients
2. **Fei Character Elements**:
   - **Wizard Hat**: Curved pointed hat in dark blue with celestial decorations
   - **Monitor Head**: Brown-framed retro screen with green gradient display
   - **Four Arms**: Black-sleeved arms with white cartoon gloves
   - **Two Legs**: Mechanical legs with brown boots

## Design Inspiration

This component was designed based on a vintage-style mascot illustration that combines:
- Technology/retro-computing aesthetics (CRT monitor)
- Fantasy/magical elements (wizard hat with stars and moons)
- Friendly, approachable character design (cartoon hands, welcoming pose)

## Examples

See `src/pages/FeiViteLogoDemo/index.tsx` for a comprehensive demonstration page showcasing the component in various contexts and sizes.

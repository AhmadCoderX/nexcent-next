# Website Gradients - Color Guide for Figma/Design

## Primary Gradient Colors (Hex)

### Light Mode
- **Purple Light**: `#A724FF` (HSL: 276, 100%, 57%)
- **Purple**: `#7729FF` (HSL: 262, 100%, 58%)
- **Purple Dark**: `#4D29FF` (HSL: 250, 100%, 58%)

### Dark Mode
- **Purple Light**: `#B366FF` (HSL: 276, 100%, 65%)
- **Purple**: `#8B66FF` (HSL: 262, 100%, 65%)
- **Purple Dark**: `#6666FF` (HSL: 250, 100%, 65%)

## Main Gradients

### 1. Primary Gradient (Most Common)
**Direction**: 135° (diagonal from top-left to bottom-right)
**Type**: Linear Gradient
**Color Stops**:
- 0%: `#A724FF` (Purple Light)
- 50%: `#7729FF` (Purple)
- 100%: `#4D29FF` (Purple Dark)

**Figma Settings**:
- Type: Linear
- Angle: 135°
- Stops:
  - Position: 0% → Color: `#A724FF`
  - Position: 50% → Color: `#7729FF`
  - Position: 100% → Color: `#4D29FF`

**CSS Equivalent**:
```css
linear-gradient(135deg, #A724FF 0%, #7729FF 50%, #4D29FF 100%)
```

### 2. Primary Gradient Reverse
**Direction**: 315° (diagonal from bottom-left to top-right)
**Type**: Linear Gradient
**Color Stops**:
- 0%: `#A724FF` (Purple Light)
- 50%: `#7729FF` (Purple)
- 100%: `#4D29FF` (Purple Dark)

**Figma Settings**:
- Type: Linear
- Angle: 315°
- Stops:
  - Position: 0% → Color: `#A724FF`
  - Position: 50% → Color: `#7729FF`
  - Position: 100% → Color: `#4D29FF`

**CSS Equivalent**:
```css
linear-gradient(315deg, #A724FF 0%, #7729FF 50%, #4D29FF 100%)
```

### 3. Gradient Glow (Radial)
**Direction**: Radial (circular from center)
**Type**: Radial Gradient
**Color Stops**:
- 0%: `#A724FF` at 15% opacity (rgba(167, 36, 255, 0.15))
- 70%: Transparent

**Figma Settings**:
- Type: Radial
- Position: Center
- Stops:
  - Position: 0% → Color: `#A724FF` at 15% opacity
  - Position: 70% → Color: Transparent

**CSS Equivalent**:
```css
radial-gradient(circle, rgba(167, 36, 255, 0.15) 0%, transparent 70%)
```

### 4. Card Hover Gradient
**Direction**: 135° (diagonal from top-left to bottom-right)
**Type**: Linear Gradient
**Color Stops**:
- 0%: `#A724FF` at 10% opacity (rgba(167, 36, 255, 0.1))
- 100%: `#4D29FF` at 10% opacity (rgba(77, 41, 255, 0.1))

**Figma Settings**:
- Type: Linear
- Angle: 135°
- Stops:
  - Position: 0% → Color: `#A724FF` at 10% opacity
  - Position: 100% → Color: `#4D29FF` at 10% opacity

**CSS Equivalent**:
```css
linear-gradient(135deg, rgba(167, 36, 255, 0.1) 0%, rgba(77, 41, 255, 0.1) 100%)
```

## Usage in Website

### Where Each Gradient is Used:

1. **Primary Gradient (135deg)**: 
   - `.gradient-bg` class (buttons, badges, icons)
   - `.gradient-text` class (text with gradient effect)
   - `.gradient-border` hover effect

2. **Primary Gradient Reverse (315deg)**:
   - Alternative gradient direction (currently defined but may be used for variations)

3. **Gradient Glow (Radial)**:
   - Background blur circles
   - Glow effects

4. **Card Hover Gradient**:
   - Subtle hover effects on cards
   - Background overlays

## Quick Reference for Figma

### Main Brand Gradient
```
Type: Linear
Angle: 135°
Stops:
  0% → #A724FF
  50% → #7729FF
  100% → #4D29FF
```

### Simplified 2-Color Gradient (Alternative)
If you need a simpler 2-color gradient:
```
Type: Linear
Angle: 135°
Stops:
  0% → #A724FF
  100% → #4D29FF
```

## Color Palette Summary

| Color Name | Hex Code | HSL | Usage |
|------------|----------|-----|-------|
| Purple Light | `#A724FF` | 276, 100%, 57% | Gradient start, primary accent |
| Purple | `#7729FF` | 262, 100%, 58% | Gradient middle, brand color |
| Purple Dark | `#4D29FF` | 250, 100%, 58% | Gradient end, deep accent |

## Notes

- All gradients use the same three colors in different combinations
- The 135° angle creates a diagonal gradient from top-left to bottom-right
- The 50% stop at the middle color (`#7729FF`) creates a smooth transition
- For logos, you can use either the full 3-color gradient or simplify to 2 colors
- The gradient works well on both light and dark backgrounds


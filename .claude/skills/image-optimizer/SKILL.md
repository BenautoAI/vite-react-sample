---
name: image-optimizer
description: Resize, compress, and convert images (PNG/JPEG/WebP/etc.) for web or storage use. Use when the user wants images made smaller, converted to another format, resized to specific dimensions, or optimized for web performance.
---
# Image Optimization

Resize, compress, and convert images without visibly degrading quality unless the user asks for aggressive compression.

## Steps

1. Identify the input images (file path(s) or directory) and the goal: smaller file size, specific dimensions, format conversion, or all three.
2. Check what's available locally via `Bash` (`which sips magick convert cwebp pngquant`, etc.) — macOS ships `sips` by default; ImageMagick/`cwebp`/`pngquant` may or may not be installed.
3. Pick the right tool for the job:
   - Resize: `sips -Z <maxDimension> input.png --out output.png` or ImageMagick `convert input.png -resize <W>x<H> output.png`.
   - Format conversion: `sips -s format webp input.png --out output.webp` or `convert`/`cwebp`.
   - Lossy compression: `cwebp -q <quality>` for WebP, `pngquant` for PNG, `convert -quality <n>` for JPEG.
4. Process files into a new output location (don't overwrite originals unless the user says so).
5. Report before/after file size and dimensions for each image so the user can see the actual savings.

## Notes

- Default to preserving aspect ratio unless told otherwise.
- For batches, loop over files with a shell command rather than doing them one by one.
- If no image tool is installed, tell the user what's missing and suggest the simplest install (`brew install imagemagick` / `webp`) rather than silently failing.

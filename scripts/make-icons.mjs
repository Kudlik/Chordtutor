// Generates PNG app icons (no dependencies): a brown tile with a fretboard motif.
import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';

function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(size, pixel) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    for (let x = 0; x < size; x++) {
      const [r, g, b] = pixel(x / size, y / size);
      const o = y * (size * 4 + 1) + 1 + x * 4;
      raw[o] = r; raw[o + 1] = g; raw[o + 2] = b; raw[o + 3] = 255;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0)),
  ]);
}
const BG = [0x84, 0x54, 0x16], FG = [0xff, 0xf8, 0xf4];
const dots = [[0.3, 0.38], [0.5, 0.62], [0.7, 0.38]];
const pixel = (u, v) => {
  for (const [cx, cy] of dots) if ((u - cx) ** 2 + (v - cy) ** 2 < 0.075 ** 2) return FG;
  for (let i = 0; i < 4; i++) if (Math.abs(v - (0.26 + i * 0.16)) < 0.008 && u > 0.18 && u < 0.82) return FG;
  return BG;
};
writeFileSync('public/icon-192.png', png(192, pixel));
writeFileSync('public/icon-512.png', png(512, pixel));
writeFileSync('public/apple-touch-icon.png', png(180, pixel));
writeFileSync('public/favicon.svg',
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#845416"/><g stroke="#fff8f4" stroke-width="1.5"><path d="M18 26h64M18 42h64M18 58h64M18 74h64"/></g><g fill="#fff8f4"><circle cx="30" cy="38" r="7.5"/><circle cx="50" cy="62" r="7.5"/><circle cx="70" cy="38" r="7.5"/></g></svg>`);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains : [
      "rb.gy",
      "storage.googleapis.com",
      "upload.wikimedia.org"
  ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

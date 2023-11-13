import { 
  join,
  resolve
} from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(resolve(), 'styles')],
  },
}

export default nextConfig

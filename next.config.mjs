/** @type {import('next').NextConfig} */
const nextConfig = {
     swcMinify:true,
    experimental:{
        esmExternals:true
    },
};

export default nextConfig;

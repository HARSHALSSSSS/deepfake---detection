const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://103.80.163.237:5051/:path*", // your backend
        },
        {
          source: "/socket.io/:path*",
          destination: "http://103.80.163.237:5051/socket.io/:path*",
        },
        {
          source: "/uploads/:path*",
          destination: "http://103.80.163.237:5051/uploads/:path*",
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  
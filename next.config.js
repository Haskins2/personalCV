/** @type {import('next').NextConfig} */
// #region agent log
const debugRuntime = {
  nextVersion: require("next/package.json").version,
  reactVersion: require("react/package.json").version,
  reactDomVersion: require("react-dom/package.json").version,
  reactRuntimeVersion: require("react").version,
  reactCreateContextType: typeof require("react").createContext,
  reactPath: require.resolve("react"),
  radixSlotPath: require.resolve("@radix-ui/react-slot"),
}
fetch('http://127.0.0.1:7519/ingest/2b5fd978-08e2-4ad4-b04c-2a417e741c52',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'5a51a9'},body:JSON.stringify({sessionId:'5a51a9',runId:'pre-fix',hypothesisId:'A,B,C,D',location:'next.config.js:12',message:'Resolved framework and component runtime',data:debugRuntime,timestamp:Date.now()})}).catch(()=>{});
// #endregion

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: false,
  },
  swcMinify: true,
  compress: false,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

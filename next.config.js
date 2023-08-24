const nextConfig = {
  // This is a custom configuration option.
  myCustomOption: "foobar",

  // This is the experimental images feature.
  images: {
    disableStaticImages: true,
  },

  // This option tells Next.js to use the production build when exporting a static site.
  output: {
    export: true,
  },
};

module.exports = nextConfig;
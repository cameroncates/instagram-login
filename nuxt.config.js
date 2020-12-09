
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Easypaisa - Daily Cashback',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `
       All New customers who have registered their account in the last 30 days will get a daily cashback of Rs. 50 if their balance is less than Rs.1000. For over Rs1000 balance, a higher cashback of upto Rs. 100 will be posted. All other customers will get a daily cashback of Rs50 if their balance is less than Rs.1000. For over Rs1000 balance, a higher cashback will be posted.
      ` }
    ],
    script: [
      { src: "/include.js"},
      // { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"},
      // { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"},
      // { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"},
      // { src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"},
      // { src: "https://unpkg.com/aos@2.3.1/dist/aos.js"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://easypaisa.com.pk/wp-content/uploads/2019/10/cropped-EasyPaisa-Favicon-32x32.png' },
      // { href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", rel: "stylesheet"},
      // { href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css", rel: "stylesheet"},
      // { href:"https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css", rel: "stylesheet"},
      // { href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css", rel: "stylesheet"},
      // { href:"https://fonts.gstatic.com", rel: "preconnect"},
      // { href:"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap", rel: "stylesheet"},
      // { href:"https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap", rel: "stylesheet"},
      // { href:"https://unpkg.com/aos@2.3.1/dist/aos.css", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=Indie+Flower|Overpass+Mono", rel: "stylesheet"}
      
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  serverMiddleware: [
    {
      path: '/api',
      handler: '~/api/auth.js'
    },
  ],
  router: {
    middleware: ["routes"]
  },

  /*
  ** Global CSS
  */
  css: [
    // '~assets/css/bootstrap.css',
    // '~assets/css/bootstrap-ext.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/Validation.js',
    '~/plugins/LocalStorage.js',
    '~/plugins/firebase.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(zip|rar|bin|exe|loader?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })      
    }
  }
}

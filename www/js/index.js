var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
    routes: [
      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/page2/',
        url: 'pages/page2.html',
      },
      {
        path: '/page3/',
        url: 'pages/page3.html',
      },
      {
        path: '/hocuspocus/',
        url: 'pages/hocuspocus.html',
      },
      {
        path: '/sabrina/',
        url: 'pages/sabrina.html',
      },
      {
        path: '/buffy/',
        url: 'pages/buffy.html',
      },
      {
        path: '/casper/',
        url: 'pages/casper.html',
      },
      {
        path: '/schoolgoodevil/',
        url: 'pages/schoolgoodevil.html',
      },
      {
        path: '/witchesofeastend/',
        url: 'pages/witchesofeastend.html',
      },
    ],
  });
var mainView = app.views.create('.view-main')
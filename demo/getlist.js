//downloads rectified aerial photos from NYPL Mapwarper

var options = {
    url : 'http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}',
    rootDir: 'tiles',
    bbox : [35,75,50,95], //[south,west,north,east]
    zoom : {
        max : 18,
        min : 15,
    },
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
};

var mapDownloader = require('../map-tile-downloader.js');

//execute mapDownloader
mapDownloader.run(options,function(err){
  console.log(err);
  //process.exit();
});
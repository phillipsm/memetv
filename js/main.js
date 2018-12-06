
var image_urls = [];
//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/trending?api_key=CuVVOjXxwULCSdXP67CJW4YFvAH1h5fX&limit=10");
xhr.done(function(data) {
  $(data.data).each(function(index, meme) {
    image_urls.push(meme.images.downsized_large.url)
  });

  set_image();
  setInterval(set_image, 60000);
});

function set_image() {
  var next_location = image_urls.indexOf($('#bg').attr('src')) + 1;

  if (next_location < 0  || next_location >= image_urls.length) {
    next_location = 0;
  }

  $('#bg').attr('src', image_urls[next_location]);
}

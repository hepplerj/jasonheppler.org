// This script requires jQuery.
$(document).ready(function() {
    styleTweets();
});

function styleTweets() {
  $(".bbpBox").each( function(i) {
    var divID = $(this).attr("id");
    var tweetID = divID.slice(1);
    var timeStamp = $(this).find('span.twTimeStamp').text();
    var userRealName = $(this).find('span.twRealName').text();
    var userScreenName = $(this).find('span.twScreenName').text().slice(1);
    var userURL = 'http://api.twitter.com/1/users/show.json?callback=?&screen_name=' + userScreenName + '&include_entities=true';
    $.getJSON(userURL, function(data){
      // Remove plain attribution.
      $("#" + divID + " .twMeta").css('display', 'none');
      // Add styled attribution.
      content = $("#" + divID + " .twContent").append('<p class="twDate"><a href="http://twitter.com/' + userScreenName + '/status/' + tweetID + '">' + timeStamp + '</a></p><p class="twAuthor"><a href="http://twitter.com/' + userScreenName + '"><img src="' + data.profile_image_url + '" /></a><a href="http://twitter.com/' + userScreenName + '"><strong>@' + userScreenName + '</strong></a><br /><span class="realName">' + userRealName + '</span></span></p>' );
      // Set background image or color.
      if (data.profile_use_background_image == true) {
        $("#" + divID).css('background', 'url(' + data.profile_background_image_url + ') #' + data.profile_background_color);
      }
      else {
        $("#" + divID).css('background', '#' + data.profile_background_color);
      }
      // Set link color.
      $("#" + divID + " a").css('color', '#' + data.profile_link_color);      
      });
  });
}
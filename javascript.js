$(document).ready(function(){
        var $body = $('body');
        //$body.html('');

        var addTweets = function() {
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<p></p>');
          var $tweet_time = $('<p></p>');
          $tweet.addClass('tweet');
          $tweet.addClass(tweet.user);
          //$('@').appendTo.('.' + tweet.user);
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet_time.addClass(tweet.user);
          $tweet_time.addClass('time');
          $tweet_time.text(tweet.created_at);

          //$tweet.add('span');
          $tweet.prependTo($('main'));
          $tweet_time.prependTo($('main'))
          index -= 1;
        }
        }

        addTweets();

        $('.button').on('click', function(){
          $('p').show();
          addTweets();
        })

        $('#author').on('click', 'button', function(){
          $('p').hide();
          $('p.authorTag').show();
          var name = $(this).attr('class');
          $("." + name).show();
          //$(this).closest('body').filter('.'+name);
        })

      });

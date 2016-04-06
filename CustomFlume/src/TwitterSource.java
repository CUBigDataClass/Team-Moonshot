/**
 * CODE DEVELOPED BY AAYUSH GROVER(aagr3102@colorado.edu)
 * on 20th March 2016
 */
import java.util.HashMap;
import java.util.Map;

import org.apache.flume.Context;
import org.apache.flume.Event;
import org.apache.flume.EventDrivenSource;
import org.apache.flume.channel.ChannelProcessor;
import org.apache.flume.conf.Configurable;
import org.apache.flume.event.EventBuilder;
import org.apache.flume.source.AbstractSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import twitter4j.FilterQuery;
import twitter4j.StallWarning;
import twitter4j.Status;
import twitter4j.StatusDeletionNotice;
import twitter4j.StatusListener;
import twitter4j.TwitterStream;
import twitter4j.TwitterStreamFactory;
import twitter4j.auth.AccessToken;
import twitter4j.conf.ConfigurationBuilder;
import twitter4j.json.DataObjectFactory;


/**
 * CODE DEVELOPED BY AAYUSH GROVER(aagr3102@colorado.edu)
 * on 20th March 2016
 */

/* This is a custom flume source that would pull data from Twitter's streaming API. We could have used 
 * the default Flume API provided by Apache. But with that we would have ended up fetching same tweets over and 
 * over again. Thus, i've implemented this custom Flume Source, as everytime we run our flume.conf using this source,
 * only the new tweets are fetched.
 */


public class TwitterAayushSource extends AbstractSource
    implements EventDrivenSource, Configurable {

 

  /** The value of these parameters are mentioned in TwitterSourceConstants.java, these values are extracted from the twitter application created by me. */
  private String consumerKey;
  private String consumerSecret;
  private String accessToken;
  private String accessTokenSecret;

  private String[] keywords;

  /** This twitterStream would collect the raw data in JSON format. */
  private  TwitterStream twitterStream;

  
  /**
   * In this method we initialize all the configurations of the source. The context contains all the
   * Flume configuration info, and can be used to retrieve any configuration
   * values necessary to set up the Source.
   */
  
   @Override
  public void configure(Context context) {
    consumerKey = context.getString(TwitterSourceConstants.CONSUMER_KEY_KEY);
    consumerSecret = context.getString(TwitterSourceConstants.CONSUMER_SECRET_KEY);
    accessToken = context.getString(TwitterSourceConstants.ACCESS_TOKEN_KEY);
    accessTokenSecret = context.getString(TwitterSourceConstants.ACCESS_TOKEN_SECRET_KEY);

    String keywordStr = context.getString(TwitterSourceConstants.KEYWORDS_KEY, "");
    if (keywordStr.trim().length() == 0) {
        keywords = new String[0];
    } else {
      keywords = keywordStr.split(",");
      for (int i = 0; i < keywords.length; i++) {
        keywords[i] = keywords[i].trim();
      }
    }

    ConfigurationBuilder cb = new ConfigurationBuilder();
    cb.setOAuthConsumerKey(consumerKey);
    cb.setOAuthConsumerSecret(consumerSecret);
    cb.setOAuthAccessToken(accessToken);
    cb.setOAuthAccessTokenSecret(accessTokenSecret);
    cb.setJSONStoreEnabled(true);
    cb.setIncludeEntitiesEnabled(true);

    twitterStream = new TwitterStreamFactory(cb.build()).getInstance();
  }

  /**
   * This is where the event processing starts. Twitter Streaming API is used to sample Twitter and process tweets.
   */
  
   
   
   @Override
  public void start() {
   
    final ChannelProcessor channel = getChannelProcessor();
//channel is the medium that communicates b/w. source and sink.
    
    
    final Map<String, String> headers = new HashMap<String, String>();

    // The StatusListener is a twitter4j API, which can be added to a Twitter
    // stream, and will execute methods every time a message comes in through
    // the stream.
   StatusListener listener = new StatusListener() {
      
	   // The onStatus method is executed every time a new tweet comes in.
      public void onStatus(Status status) {
        
    	  
    	  // The EventBuilder is used to build an event using the headers and
        // the raw JSON of a tweet.
    	  //getting the timestamp of the tweet, converting it into a string and adding it as
    	  // a header to the tweet.
        headers.put("timestamp", String.valueOf(status.getCreatedAt().getTime()));
        Event event = EventBuilder.withBody(
            DataObjectFactory.getRawJSON(status).getBytes(), headers);

        channel.processEvent(event);
      }

      // This listener will ignore everything except for new tweets
      public void onDeletionNotice(StatusDeletionNotice statusDeletionNotice) {}
      public void onTrackLimitationNotice(int numberOfLimitedStatuses) {}
      public void onScrubGeo(long userId, long upToStatusId) {}
      public void onException(Exception ex) {}
      public void onStallWarning(StallWarning warning) {}
    };

    logger.debug("Setting up Twitter sample stream using consumer key {} and" +
          " access token {}", new String[] { consumerKey, accessToken });
    // Set up the stream's listener (defined above),
    twitterStream.addListener(listener);

    // Set up a filter to pull out industry-relevant tweets
    if (keywords.length == 0) {
      twitterStream.sample();
    } else {
      logger.debug("Starting up Twitter filtering...");

      FilterQuery query = new FilterQuery().track(keywords);
      twitterStream.filter(query);
    }
    super.start();
  }

  /**
   * Stops the Source's event processing and shuts down the Twitter stream.
   */
  @Override
  public void stop() {
    logger.debug("Shutting down Twitter sample stream...");
    twitterStream.shutdown();
    super.stop();
  }




}

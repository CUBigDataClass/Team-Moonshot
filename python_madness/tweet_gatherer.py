# Import the necessary package to process data in JSON format
try:
    import json
except ImportError:
    import simplejson as json

# Import the necessary methods from "twitter" library
from twitter import Twitter, OAuth, TwitterHTTPError, TwitterStream
import pymongo
from secrets import *


client = pymongo.MongoClient("localhost", 27017)
db = client['TweetData']

#
# Variables that contains the user credentials to access Twitter API 
oauth = OAuth(ACCESS_TOKEN, ACCESS_SECRET, CONSUMER_KEY, CONSUMER_SECRET)

# Initiate the connection to Twitter Streaming API
twitter_stream = TwitterStream(auth=oauth)

# Get a sample of the public data following through Twitter
iterator = twitter_stream.statuses.sample(language="en")

for tweet in iterator:
    db.tweets.insert_one(tweet)

       

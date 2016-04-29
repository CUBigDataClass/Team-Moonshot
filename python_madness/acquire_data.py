#/ Import the necessary package to process data in JSON format
try:
    import json
except ImportError:
    import simplejson as json

# Import the necessary methods from "twitter" library
from twitter import Twitter, OAuth, TwitterHTTPError, TwitterStream
import pymongo
import numpy as np
from secrets import *
import ipdb
import sys
debug = ipdb.set_trace


category_file = open('categories.dat', 'r')
client = pymongo.MongoClient("localhost", 40000)
db = client['TweetData']
print("Beginning...")

# Variables that contains the user credentials to access Twitter API 

# Initiate the connection to Twitter Streaming API

# Get a sample of the public data following through Twitter
def update_progress(progress):
    barLength = 10 # Modify this to change the length of the progress bar
    status = ""
    if isinstance(progress, int):
        progress = float(progress)
    if not isinstance(progress, float):
        progress = 0
        status = "error: progress var must be float\r\n"
    if progress < 0:
        progress = 0
        status = "Halt...\r\n"
    if progress >= 1:
        progress = 1
        status = "Done...\r\n"
    block = int(round(barLength*progress))
    text = "\rPercent: [{0}] {1}% {2}".format( "#"*block + "-"*(barLength-block), progress*100, status)
    sys.stdout.write(text)
    sys.stdout.flush()

cursor = db.processed_tweets.find({})
print("Tweets found...")
index = 0
count = db.processed_tweets.count()
print(str(count) + " total tweets")

newData = {}

progress = 0
dataArray = 0 

for item in cursor:
   if dataArray is 0:
       dataArray = {}
       for i, score in enumerate(item['categories']):
          print(score)
          dataArray[score] = []
   if index % 100:
      update_progress(index/count)
   newData = {}
   for i,score in enumerate(item['categories']):
      dataArray[score].append(item['categories'][score]['score'])



print("\nStoring data...")
for i, score in enumerate(dataArray):
    newScore = np.array(dataArray[score])
    newScore = newScore.transpose()
    debug()
    np.save("recommendation_scores_" + str(score), newScore)
    update_progress(i/len(scores))



# Import the necessary package to process data in JSON format
try:
    import json
except ImportError:
    import simplejson as json

# Import the necessary methods from "twitter" library
from twitter import Twitter, OAuth, TwitterHTTPError, TwitterStream
import pymongo
from secrets import *
import ipdb
import sys
debug = ipdb.set_trace



category_file = open('categories.dat', 'r')
client = pymongo.MongoClient("localhost", 27018)
db = client['TweetData']

def get_categories():
   categories = {}
   for line in category_file:
      line = line.strip('\n')
      dat = line.split(',')
      categories[dat[0]] = [brand for brand in dat[1:len(dat)]]
   print(categories)
   return categories



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

cursor = db.tweets.find({})
index = 0
count = cursor.count()

newData = {}

dataStore = {}
cursor.rewind()
progress = 0

for item in cursor:
   if index % 100:
      update_progress(index/count)
   newData = {}
   if item['user']['screen_name'] in dataStore:
      if dataStore[item['user']['screen_name']]['followers_count'] < item['user']['followers_count']:
         dataStore[item['user']['screen_name']]['followers_count'] = item['user']['followers_count']

      dataStore[item['user']['screen_name']]['tweets'].append({"text": item['text'], "time": item['created_at']})
      index += 1
      continue

   newData['name'] = item['user']['screen_name']
   newData['location'] = item['user']['location']
   newData['followers_count'] = item['user']['followers_count']
   newData['tweets'] = [{"text": item['text'], "time": item['created_at']}]
   dataStore[newData['name']] = newData
   index += 1


recommendations = get_categories()
print("\nStoring data...")
dataLen = len(dataStore)
for i, document in enumerate(dataStore):
   for tweet in dataStore[document]['tweets']:
      print(tweet)
      score = [0 for x in range(0,6)]
      for j, category in enumerate(recommendations):
         for brand in recommendations[category]:
            print(brand)
            if brand in tweet['text']:
               score[j] = 1
   dataStore[document]['score'] = score
   print(dataStore)

   update_progress(i/dataLen)
   if not all([ v == 0 for v in dataStore[document]['score']]):
      db.processed_tweets.insert_one(dataStore[document])



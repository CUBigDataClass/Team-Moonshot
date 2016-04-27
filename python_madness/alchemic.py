from alchemyapi_python import alchemyapi

alchemy = alchemyapi.AlchemyAPI()

myText = "I'm excited to get started with AlchemyAPI!"
response = alchemy.sentiment("text", myText)
print("Sentiment: ", response["docSentiment"]["type"])

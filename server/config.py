from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi

# Username: cellTrackAdmin
# Password: XrGUm7XykwW5

uri = "mongodb+srv://cellTrackAdmin:XrGUm7XykwW5@celltracker.kgizply.mongodb.net/?appName=cellTracker"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'), tlsCAFile=certifi.where()) #tlsAllowInvalidCertificates=True

db = client.cellTrack_application

collection_name = db["cellTrackApp"]
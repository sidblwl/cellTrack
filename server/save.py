from fastapi import FastAPI
app = FastAPI()
from pydantic import BaseModel  #Base class for any class whose objects are used as input to a http request
from fastapi.middleware.cors import CORSMiddleware
from datetime import date
from typing import Dict
import random
import string

# storage history list:
    # [0] = date started
    # [1] = liquid nitrogen tank number
    # [2] = box number
    # [3] slot number

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

alphanum = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9']

cellLines = {}

#returns the messages dictionary when you go to the get endpoint
@app.get('/getLines')
async def root():
    return cellLines

# Add a new cell line
@app.post('/addLine')
async def add_item(cellLine: CellLine):
    id = ""
    while True:
        id = random.choice(string.ascii_uppercase) + random.choice(alphanum) + random.choice(alphanum)
        if(id not in cellLines.keys()):
            break
    cellLines[id] = cellLine
    return {'message': 'success'}

#allow users to delete messages by passing in an object of the Name class
# @app.delete('/remove')
# async def remove_item(name: Name):
#     messages.pop(name.name)
#     return {'message': 'success'}
from fastapi import FastAPI
app = FastAPI()
from pydantic import BaseModel  #Base class for any class whose objects are used as input to a http request
from fastapi.middleware.cors import CORSMiddleware
from datetime import date
from typing import Dict

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

cellLines = {}

#returns the messages dictionary when you go to the get endpoint
@app.get('/getLines')
async def root():
    return cellLines

# class StorageInfo(BaseModel):
#     dateStarted: str
#     tankNum: int
#     boxNum: int
#     slotNum: int

# class Passage(BaseModel):
#     imagePath: str
#     viability: float
#     concentration: float
#     size: float
#     seededCells: float
#     flaskSize: str # T25, T75, T175
#     date: str

#create a class for a message item and a name
class CellLine(BaseModel):
    id: str
    name: str
    passageNum: int
    # storageHistory: StorageInfo
    # passages: Dict[int, Passage]

class Name(BaseModel):
    name: str

# Add a new cell line
@app.post('/addLine')
async def add_item(cellLine: CellLine):
    cellLines[cellLine.id] = cellLine
    return {'message': 'success'}

#allow users to delete messages by passing in an object of the Name class
# @app.delete('/remove')
# async def remove_item(name: Name):
#     messages.pop(name.name)
#     return {'message': 'success'}
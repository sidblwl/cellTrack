from fastapi import FastAPI
app = FastAPI()
from pydantic import BaseModel  #Base class for any class whose objects are used as input to a http request
from fastapi.middleware.cors import CORSMiddleware

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

#create a class for a message item and a name
class CellLine(BaseModel):
    id: str
    name: str
    passageNum: int

class Name(BaseModel):
    name: str

#allow users to add a message by going to the post endpoint, takes in
# an object of the Item class
@app.post('/addLine')
async def add_item(cellLine: CellLine):
    cellLines[cellLine.id] = cellLine
    return {'message': 'success'}

#allow users to delete messages by passing in an object of the Name class
# @app.delete('/remove')
# async def remove_item(name: Name):
#     messages.pop(name.name)
#     return {'message': 'success'}
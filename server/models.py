from pydantic import BaseModel
from typing import Dict

class StorageInfo(BaseModel):
    dateStarted: str
    tankNum: int
    boxNum: int
    slotNum: int

class Passage(BaseModel):
    # imagePath: str
    viability: float
    concentration: float
    size: float
    seededCells: float
    # flaskSize: str # T25, T75, T175
    # date: str

#create a class for a message item and a name
class CellLine(BaseModel):
    name: str
    passageNum: int
    # storageHistory: StorageInfo
    passages: list[Passage]

class Name(BaseModel):
    name: str
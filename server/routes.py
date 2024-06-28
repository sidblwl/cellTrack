from fastapi import APIRouter
from config import collection_name
from models import CellLine
from schemas import cell_serializer, cells_serializer
from bson import ObjectId
import random
import string

cellTrack_api_router = APIRouter()

def generate_random_id():
    alphanum = string.ascii_uppercase + string.digits
    return random.choice(string.ascii_uppercase) + random.choice(alphanum) + random.choice(alphanum)

@cellTrack_api_router.get("/")
async def get_cells():
    cells = cells_serializer(collection_name.find())
    return {"status": "ok", "data": cells}

@cellTrack_api_router.get("/{id}")
async def get_cell(id: str):
    cell = cells_serializer(collection_name.find({"_id": ObjectId(id)}))
    return {"status": "ok", "data": cell}

@cellTrack_api_router.post("/")
async def post_cell(cell: CellLine):
    cell_dict = cell.dict(by_alias=True)
    cell_dict["id"] = generate_random_id()
    _id = collection_name.insert_one(cell_dict)
    cell = cells_serializer(collection_name.find({"_id": _id.inserted_id}))
    return {"status": "ok", "data": cell}

@cellTrack_api_router.put("/{id}")
async def update_cell(id: str, cell: CellLine):
    collection_name.find_one_and_update({"_id": ObjectId(id)}, {
        "$set": dict(cell)
    })
    cell = cells_serializer(collection_name.find({"_id": ObjectId(id)}))
    return {"status": "ok", "data": cell}

@cellTrack_api_router.delete("/{id}")
async def delete_cell(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})
    return {"status": "ok", "data": []}
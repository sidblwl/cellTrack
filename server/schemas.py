import random
import string

# Takes in a todo and returns it as a dictionary 

def cell_serializer(cell) -> dict:
    return {
        "_id": str(cell["_id"]),
        "id": cell["id"],
        "name": cell["name"],
        "passageNum": cell["passageNum"],
        # storageHistory: StorageInfo
        "passages": cell["passages"]
    }

# Takes all of the todos, turn them into dictionaries and returns them as a list

def cells_serializer(cells) -> list:
    return [cell_serializer(cell) for cell in cells]
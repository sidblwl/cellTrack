from fastapi import FastAPI
from routes import cellTrack_api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI() # initialize FastAPI
app.include_router(cellTrack_api_router) # include the router

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
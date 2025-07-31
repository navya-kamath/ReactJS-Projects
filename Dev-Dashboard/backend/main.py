from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend to access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, use specific domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/add")
def add(x: float, y: float):
    return {"result": x + y}

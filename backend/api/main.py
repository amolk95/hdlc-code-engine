

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


app = FastAPI(title="Anomaly Detection API")

# Allow requests from any origin (for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SalesData(BaseModel):
    week: str
    sales: float

class AnomalyResult(BaseModel):
    week: str
    sales: float
    is_anomaly: bool
    reason: str

@app.post("/detect", response_model=List[AnomalyResult])
def detect_anomalies(data: List[SalesData]):
    # Placeholder for anomaly detection logic
    results = []
    for entry in data:
        # Dummy logic: flag sales < 100 as anomaly
        is_anomaly = entry.sales < 100
        reason = "Low sales" if is_anomaly else "Normal"
        results.append(AnomalyResult(week=entry.week, sales=entry.sales, is_anomaly=is_anomaly, reason=reason))
    return results

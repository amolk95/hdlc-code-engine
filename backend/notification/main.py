from fastapi import FastAPI

app = FastAPI(title="Notification Service")

@app.post("/notify")
def send_notification(message: str):
    # Placeholder for notification logic (e.g., Twilio)
    return {"status": "sent", "message": message}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)

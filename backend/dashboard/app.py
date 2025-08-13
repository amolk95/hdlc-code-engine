from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    # Placeholder dashboard
    return "<h1>Sales Anomaly Dashboard</h1><p>Connect to backend API for data.</p>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

from flask import Flask, render_template, request, jsonify
import sqlite3
import os

app = Flask(__name__)

# Initialize SQLite Database
def init_db():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            amount REAL NOT NULL,
            date TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/transactions", methods=["GET"])
def get_transactions():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, category, amount, date FROM transactions ORDER BY id DESC")
    rows = cursor.fetchall()
    conn.close()
    
    transactions = [
        {"id": r[0], "name": r[1], "category": r[2], "amount": r[3], "date": r[4]}
        for r in rows
    ]
    return jsonify(transactions)

@app.route("/api/transactions", methods=["POST"])
def add_transaction():
    data = request.json
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO transactions (name, category, amount, date) VALUES (?, ?, ?, ?)",
        (data["name"], data["category"], data["amount"], data["date"])
    )
    conn.commit()
    conn.close()
    return jsonify({"status": "success"}), 201

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
from flask import Flask, render_template

app = Flask(__name__)


# Route for the home page
@app.route("/")
def home():
    # Instead of returning text, we render a template
    return render_template("index.html")


if __name__ == "__main__":
    # Debug mode allows auto-reload when you change code
    app.run(debug=True)

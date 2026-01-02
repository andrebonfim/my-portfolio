from datetime import datetime

from flask import Flask, render_template

app = Flask(__name__)


# Route for the home page
@app.route("/")
def home():
    # Instead of returning text, we render a template
    return render_template("index.html", current_year=datetime.now().year)


@app.after_request
def add_header(response):
    response.headers["X-Built-By"] = "Andre Luis Bonfim"
    response.headers["X-Tech-Stack"] = "Python, Flask, Linux"
    response.headers["X-Job-Status"] = "Open to Work"
    return response


if __name__ == "__main__":
    # Debug mode allows auto-reload when you change code
    app.run(debug=True)

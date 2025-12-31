# 🌐 My Professional Portfolio

This is a personal portfolio website built with **Python** and **Flask**. It was designed to showcase my projects, skills, and professional journey as I transition from IT Support to Software Engineering.

The project follows the **MVT (Model-View-Template)** architectural pattern (standard for Flask), separating logic, presentation, and static assets.

## 🚀 Features

- **Dynamic Rendering:** Uses **Jinja2** templating engine to render HTML dynamically.
- **Responsive Design:** Custom CSS with a "Dark Mode" aesthetic tailored for developers.
- **Project Showcase:** A dedicated section to list and link to my GitHub projects.
- **Asset Management:** Proper usage of `url_for` to handle static files (CSS/Images) reliably.

## 🛠️ Tech Stack

- **Backend:** Python 3.12, Flask (Microframework).
- **Frontend:** HTML5, CSS3, FontAwesome (Icons).
- **Version Control:** Git & GitHub.

## 📂 Project Structure

```text
my-portfolio/
├── static/          # CSS, Images, and JavaScript files
│   └── css/         # Stylesheets
├── templates/       # HTML files (Jinja2)
├── app.py           # Main application logic (Routes)
└── README.md        # Documentation
```

## ⚙️ How to Run

1. **Clone the repository**

   ```bash
   git clone git@github.com:andrebonfim/my-portfolio.git
   ```

2. **Setup the Virtual Environment**

   ```bash
   cd my-portfolio
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. **Install Dependencies**

   ```bash
   pip install flask
   ```

4. **Run the Server**
   ```bash
   python3 app.py
   ```
   _Access [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser._

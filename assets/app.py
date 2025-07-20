from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'Danielyub'  # Cambia esto por una clave secreta segura

# ⬇️ Mueve esto aquí arriba
products = {
    "cat_hoodie": {
        "name": "Hoodie Gatuno",
        "price": 90000,
        "image": "/static/assets/cat_hoodie.png"
    },
    "cat_keychain": {
        "name": "Llavero Gatuno",
        "price": 15000,
        "image": "/static/assets/cat_keychain.png"
    },
    "cat_figure": {
        "name": "Figura Gatuna",
        "price": 35000,
        "image": "/static/assets/cat_figure.png"
    }
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/add_to_cart/<product_id>")
def add_to_cart(product_id):
    if 'cart' not in session:
        session['cart'] = []

    if product_id in products:
        session['cart'].append(products[product_id])

    return redirect(url_for('index'))

@app.route("/cart")
def cart():
    return render_template("cart.html", cart=session.get('cart', []))

if __name__ == "__main__":
    app.run(debug=True)

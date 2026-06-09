from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'AIzaSyCM2ksjr50kU_3Lol10-Al5w1pn24ht_Y4'  # Required for flashing messages

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/mission')
def mission():
    return render_template('mission.html')

@app.route('/involved')
def involved():
    return render_template('involved.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        print(f"Received contact form submission from {name} ({email}): {message}")
        flash("Contact form submitted successfully!", "success")
        return redirect(url_for('contact'))
    return render_template('contact.html')

@app.route('/sign-in', methods=['GET', 'POST'])
def sign_in():
    if request.method == 'POST':
        # Add sign-in logic here
        pass
    return render_template('sign-in.html')

@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        print(f"New user signed up: {name}, {email}")
        flash("Sign Up form submitted successfully!", "success")
        return redirect(url_for('sign_up'))
    return render_template('sign-up.html')

if __name__ == '__main__':
    app.run(debug=True)

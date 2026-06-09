from flask import Flask, request, render_template
import pandas as pd

app = Flask(__name__)

# Load and clean multiple datasets
datasets = ['Training\dataset\cleaned_ngo_data.csv', 'Training\dataset\cleaned_ngo_data01.csv']  # Add your dataset file paths
ngo_data_cleaned = pd.DataFrame()

for file in datasets:
    ngo_data = pd.read_csv(file)
    ngo_data = ngo_data[1:].reset_index(drop=True)
    ngo_data.columns = ['Sr No', 'NGO Name', 'Registration Number', 'Address', 'Sectors working']
    ngo_data_cleaned = pd.concat([ngo_data_cleaned, ngo_data], ignore_index=True)

# Function to verify NGO Name and Registration Number from user input
def verify_ngo(name_input, reg_no_input):
    result = ngo_data_cleaned[
        (ngo_data_cleaned['NGO Name'].str.strip().str.lower() == name_input.strip().lower()) &
        (ngo_data_cleaned['Registration Number'].str.strip().str.lower() == reg_no_input.strip().lower())
    ]
    
    if not result.empty:
        return "NGO is verified"
    else:
        return "NGO is not verified"

# Route to display the form
@app.route('/')
def home():
    return render_template('index.html')  # Corrected template path

# Route to handle the form submission
@app.route('/verify', methods=['POST'])
def verify():
    ngo_name = request.form['ngo_name']
    reg_no = request.form['reg_no']
    
    # Verify the NGO
    result = verify_ngo(ngo_name, reg_no)
    
    return render_template('result.html', result=result)  # Corrected template path

if __name__ == '__main__':
    app.run(debug=True)

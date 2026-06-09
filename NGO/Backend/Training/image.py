from fpdf import FPDF

# Define a PDF with FPDF to embed the DFD image in a larger font size
pdf = FPDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

# Add title for the DFD page
pdf.set_font("Arial", "B", 16)
pdf.cell(200, 10, "NGO Verification Model - Data Flow Diagram (DFD)", ln=True, align="C")

# Insert the DFD high-resolution image in the PDF
pdf.image("/mnt/data/NGO_Verification_Model_DFD_HighRes.png", x=10, y=30, w=180)

# Save the file as a PDF
output_path = "/mnt/data/NGO_Verification_Model_DFD_HighRes.pdf"
pdf.output(output_path)
output_path

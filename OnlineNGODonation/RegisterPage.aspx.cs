using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.IO;
using System.Drawing.Imaging;
using System.Drawing;

public partial class RegisterPage : System.Web.UI.Page
{
    private readonly string connectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;

    protected void Page_Load(object sender, EventArgs e)
    {
    }

    private void Clear()
    {
        txtAddress.Text = "";
        txtContactNo.Text = "";
        txtEmailId.Text = "";
        txtNgoAdmin.Text = "";
        txtNgoName.Text = "";
        txtPassword.Text = "";
        txtRegistrationDate.Text = "";
        txtRegistrationNo.Text = "";
        ddlNgoType.SelectedIndex = -1;
    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            if (!IsValid())
            {
                ShowAlert("Please fill in all required fields.");
                return;
            }

            string filePath = fpNgoDocument.PostedFile.FileName;
            if (string.IsNullOrEmpty(filePath))
            {
                ShowAlert("Please select a document to upload.");
                return;
            }

            string filename = Path.GetFileName(filePath);
            string ext = Path.GetExtension(filename).ToLower();

            if (ext != ".pdf")
            {
                ShowAlert("Only PDF files are allowed.");
                return;
            }

            string contenttype = "application/pdf";

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();

                using (SqlCommand checkCmd = new SqlCommand("SELECT COUNT(*) FROM LoginTable WHERE EmailId = @EmailId AND UserType = 'N'", con))
                {
                    checkCmd.Parameters.AddWithValue("@EmailId", txtEmailId.Text.Trim());
                    int count = Convert.ToInt32(checkCmd.ExecuteScalar());

                    if (count > 0)
                    {
                        ShowAlert("Email Id already registered");
                        txtEmailId.Text = "";
                        return;
                    }
                }

                byte[] bytes;
                using (Stream fs = fpNgoDocument.PostedFile.InputStream)
                using (BinaryReader br = new BinaryReader(fs))
                {
                    bytes = br.ReadBytes((int)fs.Length);
                }

                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.Text;
                    cmd.CommandText = @"INSERT INTO NgoRegisterTable 
                        (NgoName, RegistrationNo, RegistrationDate, NgoAdministrator, 
                         NgoType, NgoAddress, ContactNo, NgoDocument, ContentType, 
                         NgoDocumentName, EmailId, Password) 
                        VALUES 
                        (@NgoName, @RegistrationNo, @RegistrationDate, @NgoAdministrator,
                         @NgoType, @NgoAddress, @ContactNo, @NgoDocument, @ContentType,
                         @NgoDocumentName, @EmailId, @Password)";

                    cmd.Parameters.AddWithValue("@NgoName", txtNgoName.Text.Trim());
                    cmd.Parameters.AddWithValue("@RegistrationNo", txtRegistrationNo.Text.Trim());
                    cmd.Parameters.AddWithValue("@RegistrationDate", DateTime.Parse(txtRegistrationDate.Text.Trim()));
                    cmd.Parameters.AddWithValue("@NgoAdministrator", txtNgoAdmin.Text.Trim());
                    cmd.Parameters.AddWithValue("@NgoType", ddlNgoType.SelectedValue);
                    cmd.Parameters.AddWithValue("@NgoAddress", txtAddress.Text.Trim());
                    cmd.Parameters.AddWithValue("@ContactNo", txtContactNo.Text.Trim());
                    cmd.Parameters.AddWithValue("@NgoDocument", bytes);
                    cmd.Parameters.AddWithValue("@ContentType", contenttype);
                    cmd.Parameters.AddWithValue("@NgoDocumentName", filename);
                    cmd.Parameters.AddWithValue("@EmailId", txtEmailId.Text.Trim());
                    cmd.Parameters.AddWithValue("@Password", /*HashPassword*/(txtPassword.Text.Trim()));

                    cmd.ExecuteNonQuery();

                    using (SqlCommand loginCmd = new SqlCommand())
                    {
                        loginCmd.Connection = con;
                        loginCmd.CommandText = @"INSERT INTO LoginTable 
                            (EmailId, Password, UserType, Status, Name, NGOType) 
                            VALUES 
                            (@EmailId, @Password, 'N', 'Deactive', @Name, @NGOType)";

                        loginCmd.Parameters.AddWithValue("@EmailId", txtEmailId.Text.Trim());
                        loginCmd.Parameters.AddWithValue("@Password", /*HashPassword*/(txtPassword.Text.Trim()));
                        loginCmd.Parameters.AddWithValue("@Name", txtNgoName.Text.Trim());
                        loginCmd.Parameters.AddWithValue("@NGOType", ddlNgoType.SelectedValue);

                        loginCmd.ExecuteNonQuery();
                    }
                }

                Clear();
                ShowAlert("NGO registration successful. Please wait for Admin approval!");
            }
        }
        catch (Exception ex)
        {
            ShowAlert(string.Format("An error occurred: {0}", ex.Message));
            // Log the exception details here
        }
    }

    private bool IsValid()
    {
        return !string.IsNullOrEmpty(txtNgoName.Text.Trim()) &&
               !string.IsNullOrEmpty(txtRegistrationNo.Text.Trim()) &&
               !string.IsNullOrEmpty(txtRegistrationDate.Text.Trim()) &&
               !string.IsNullOrEmpty(txtNgoAdmin.Text.Trim()) && ddlNgoType.SelectedIndex > -1 &&
               !string.IsNullOrEmpty(txtAddress.Text.Trim()) &&
               !string.IsNullOrEmpty(txtContactNo.Text.Trim()) &&
               !string.IsNullOrEmpty(txtEmailId.Text.Trim()) &&
               !string.IsNullOrEmpty(txtPassword.Text.Trim());
    }

    private void ShowAlert(string message)
    {
        var sb = new System.Text.StringBuilder();
        sb.Append("<script type='text/javascript'>");
        sb.Append("window.onload=function(){");
        sb.Append("alert('").Append(message.Replace("'", "\\'")).Append("');");
        sb.Append("};");
        sb.Append("</script>");
        ClientScript.RegisterClientScriptBlock(this.GetType(), "alert", sb.ToString());
    }

    /*private string HashPassword(string password)
    {
        using (var sha256 = System.Security.Cryptography.SHA256.Create())
        {
            var hashedBytes = sha256.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(hashedBytes);
        }
    }*/
}
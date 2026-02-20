import axios from "axios";
const baseUrl = `https://mailer-zcoo.onrender.com`;

export async function sendMail(req) {
  try {
    const { data } = await axios.post(`${baseUrl}/api/v1/sendMails`, req);
    return { success: true, data };
  } catch (error) {
    console.error("Send Mail Error:", error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || "Something went wrong",
    };
  }
}


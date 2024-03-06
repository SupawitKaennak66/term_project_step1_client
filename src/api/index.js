export async function login({ email, password }) {
  return await fetch("http://api-user66031.se-rmutl.net/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.error("Error during login:", err);
      // คุณสามารถทำการ handle ข้อผิดพลาดที่นี่ได้ เช่น แสดงข้อความแจ้งเตือนหรือทำการล็อกอินใหม่
    });
}

export async function searchArtworks({ keyword }) {
  return await fetch(`http://api-user66031.se-rmutl.net/api/homepage/getArtworks/${keyword}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      // If request is not successful, display error message
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.error("Error during artwork search:", err);
      // คุณสามารถทำการ handle ข้อผิดพลาดที่นี่ได้ เช่น แสดงข้อความแจ้งเตือนหรือทำการลองค้นหาใหม่
    });
}

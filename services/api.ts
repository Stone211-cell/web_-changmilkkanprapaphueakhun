import axios from "axios";

// สร้างตัวเชื่อมต่อ API พื้นฐาน
const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ==========================================
// ส่วนของการดึงข้อมูล (GET)
// ==========================================

// ดึงข้อมูลผลงานทั้งหมด
export const getPortfolios = async () => {
  const response = await apiClient.get("/portfolios");
  return response.data;
};

// ดึงข้อมูลบทความทั้งหมด (ถ้ามี ?all=true คือดึงทั้งฉบับร่างด้วย)
export const getArticles = async (all: boolean = false) => {
  let url = "/articles";
  if (all === true) {
    url = "/articles?all=true";
  }
  const response = await apiClient.get(url);
  return response.data;
};

// ดึงข้อมูลหมวดหมู่ทั้งหมด
export const getCategories = async () => {
  const response = await apiClient.get("/categories");
  return response.data;
};


// ==========================================
// ส่วนของการจัดการบทความ (Admin)
// ==========================================

// เปลี่ยนสถานะ เผยแพร่ / ซ่อน บทความ
export const togglePublishArticle = async (id: string, currentStatus: boolean) => {
  // สลับสถานะ (ถ้าจริงให้เป็นเท็จ ถ้าเท็จให้เป็นจริง)
  const newStatus = !currentStatus;
  
  const response = await apiClient.put(`/articles/${id}`, {
    published: newStatus,
  });
  return response.data;
};

// ลบบทความ
export const deleteArticleById = async (id: string) => {
  const response = await apiClient.delete(`/articles/${id}`);
  return response.data;
};

export default apiClient;

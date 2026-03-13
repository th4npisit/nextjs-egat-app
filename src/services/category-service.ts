export async function fetchAllCategory() {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxOCwidXNlcl9wZXJtaXNzaW9uIjoiYWRtaW4iLCJpYXQiOjE3NzMzODU5NDksImV4cCI6MTc3MzM4Nzc0OX0.6WQnLlhhZWheWRiyy4wTXth-b-PytC_Sg8LHR2J_v_w"
        const response =  await fetch('http://localhost:4002/api/v1/categories?page=1&limit=10',{
            method: "GET",
            headers:{
                'content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if(!response.ok) throw new Error('ไม่สามารถดึงข้อมูลได้');
        return await response.json() as any[];
    }
    catch (error){
        throw error;
    }
}
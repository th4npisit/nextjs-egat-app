export async function fetchAllCategory() {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxOCwidXNlcl9wZXJtaXNzaW9uIjoiYWRtaW4iLCJpYXQiOjE3NzMzODkxNzYsImV4cCI6MTc3Mzk5Mzk3Nn0.i8NC-EYeaeWf4oQU1nUUFePlTlosCtBm4wqiCiXLKPU"
        const response =  await fetch('http://host.docker.internal:4002/api/v1/categories?page=1&limit=10',{
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
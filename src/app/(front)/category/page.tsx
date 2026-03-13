import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchAllCategory } from "@/services/category-service";
export default async function Categorypage() {
    const categories = await fetchAllCategory();
    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className="mt-4 grid grid-cols-2 gap-10">
                {
                    categories.map((item)=>{
                        return (
                                  <Card key={item.id}>
                                    <CardHeader>
                                        <CardTitle>{item.name}</CardTitle>
                                    </CardHeader>
                                     <CardContent>{item.name}</CardContent>
                                  </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
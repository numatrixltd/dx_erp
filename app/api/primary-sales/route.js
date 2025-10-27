export async function GET() {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/sd/businessDashBoard/primarySalesData`;
  
      const res = await fetch(apiUrl);
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }
  
      const data = await res.json();
  
      return Response.json(data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.error("Proxy Error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  }
  
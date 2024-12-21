import { getProducts } from '@/server/servercall'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
    try {
        console.log("coming to handle>>>>>");
        const response = await getProducts();
    
        if (!response.ok) {
          throw new Error('Failed to fetch data from external API');
        }
    
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Failed to fetch data from external API' });
      }


    } 
    else if (req.method === 'POST') {
    try {
        const response = await fetch('https://externalapi.com/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_KEY}`, // Use your actual API key
          },
          body: JSON.stringify(req.body),
        });
        const responseData = await response.json();
        res.status(200).json({ message: 'External API response received', data: responseData });
      } catch (error) {
        console.error('Error fetching data from external API:', error);
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
}

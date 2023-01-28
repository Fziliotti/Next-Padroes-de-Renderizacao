// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bookData from './data.json' 


export default function userHandler(
  req,
  res
) {
  const { query, method } = req
  switch (method) {
    case 'GET':
      setTimeout(()=> res.status(200).json(bookData) , 2000) 
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
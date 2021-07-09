import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string,
  email: string,
  message: string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  console.log(req.body);
  res.status(200).json(req.body);
}

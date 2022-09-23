import { Experienced } from "../../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

// Execute Query

const query = groq` 
*[_type == "experince"] {
    ...,
    technologies[]->
}
`;

type Data = {
  experiences: Experienced[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experienced[] = await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}

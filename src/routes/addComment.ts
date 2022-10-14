import { Request, Response, Router } from "express";

interface AddCommentsRequestBody {
  region: string;
  summonerName: string;
  timestamp: number;
  redditSubmissionId: string;
}

const AddCommentsHandler = (req: Request, res: Response) => {
  try {

    const { region, summonerName, timestamp, redditSubmissionId } = req.body as AddCommentsRequestBody;
    
    // Add Auth

    // Validate request

    // TODO: DO SOMETHING WITH REGION SUMMONER NAME TIMESTAMP

    res.statusCode = 201;

    res.json({
      success: true,
      region,
      summonerName,
      timestamp,
      redditSubmissionId
    });
    return;
    
  } catch (err: any) {
    res.json({
      success: false,
      error: err.message
    });
  }
}

export const AddCommentsHandler__TESTING = AddCommentsHandler;

export default Router().post('/comments/add', AddCommentsHandler);
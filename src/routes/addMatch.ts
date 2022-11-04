import { Request, Response, Router } from "express";
import {storeMatch} from "~/db/store";

interface AddMatchRequestBody {
  region: string;
  summonerName: string;
  timestamp: number;
  redditSubmissionId: string;
}

const AddMatchHandler = async (req: Request, res: Response) => {
  try {

    const { region, summonerName, timestamp, redditSubmissionId } = req.body as AddMatchRequestBody;

    // Validate request

    // TODO: DO SOMETHING WITH REGION SUMMONER NAME TIMESTAMP
    await storeMatch(region, summonerName, timestamp, redditSubmissionId);

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

export const AddCommentsHandler__TESTING = AddMatchHandler;

export default Router().post('/comments/add', AddMatchHandler);
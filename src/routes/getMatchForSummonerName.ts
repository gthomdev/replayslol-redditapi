import { Request, Response, Router } from "express";
import {getMatchForSummonerName} from "~/db/getMatchForSummonerName";

interface getMatchForSummonerNameRequestBody {
    region: string;
    summonerName: string;
}

const getMatchForSummonerNameHandler = async (req: Request, res: Response) => {
    try {

        const { region, summonerName} = req.body as getMatchForSummonerNameRequestBody;

        // Validate request
        
        const matches = await getMatchForSummonerName(summonerName, region);

        res.statusCode = 201;

        res.json({
            success: true,
            region,
            summonerName,
            matches
        });
        return;

    } catch (err: any) {
        res.json({
            success: false,
            error: err.message
        });
    }
}

export const AddCommentsHandler__TESTING = getMatchForSummonerNameHandler;

export default Router().post('/comments/getMatchForSummonerName', getMatchForSummonerNameHandler);
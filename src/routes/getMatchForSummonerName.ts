import { Request, Response, Router } from "express";
import {getMatchForSummonerName} from "~/db/getMatchForSummonerName";

const getMatchForSummonerNameHandler = async (req: Request, res: Response) => {
    try {
        const region  = req.query.region as string;
        const summonerName  = req.query.summonerName as string;

        // Validate request

        const matches = await getMatchForSummonerName(summonerName, region);

        res.statusCode = 200;

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

export default Router().get('/comments/getMatchForSummonerName', getMatchForSummonerNameHandler);
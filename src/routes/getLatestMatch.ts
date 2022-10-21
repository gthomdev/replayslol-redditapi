import {Request, Response, Router} from "express";
import {getLatestMatch} from "~/db/getLatestMatch";

const getLatestMatchHandler = async (req: Request, res: Response) => {
    try {
        // Validate request
        const match = await getLatestMatch()
        res.statusCode = 200;
        res.json({
            success: true,
            match
        });
        return;

    } catch (err: any) {
        res.json({
            success: false,
            error: err.message
        });
    }
}

export const getLatestMatchHandler__TESTING = getLatestMatchHandler;

export default Router().get('/comments/getLatestMatch', getLatestMatchHandler);
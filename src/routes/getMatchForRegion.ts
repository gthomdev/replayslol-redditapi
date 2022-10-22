import {Request, Response, Router} from "express";
import {getMatchForRegion} from "~/db/getMatchForRegion";

const getMatchForRegionHandler = async (req: Request, res: Response) => {
    try {
        // Validate request
        const region = req.query.region as string;
        const match = await getMatchForRegion(region);
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

export const getMatchForRegionHandler__TESTING = getMatchForRegionHandler;

export default Router().get('/comments/getMatchForRegion', getMatchForRegionHandler);
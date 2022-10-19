import { Request, Response, Router } from "express";
import {getMatchForRedditSubmission} from "~/db/getMatchForRedditSubmission";

const getMatchForRedditSubmissionHandler = async (req: Request, res: Response) => {
    try {
        const redditSubmissionId  = req.query.redditSubmissionId as string;

        // Validate request

        const matches = await getMatchForRedditSubmission(redditSubmissionId);
        res.statusCode = 200;

        res.json({
            success: true,
            redditSubmissionId,
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

export const AddCommentsHandler__TESTING = getMatchForRedditSubmissionHandler;

export default Router().get('/comments/getMatchForRedditSubmission', getMatchForRedditSubmissionHandler);
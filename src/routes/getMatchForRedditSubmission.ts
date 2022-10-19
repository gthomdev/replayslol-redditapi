import { Request, Response, Router } from "express";
import {getMatchForRedditSubmission} from "~/db/getMatchForRedditSubmission";

interface getMatchForRedditSubmissionBody {
    redditSubmissionId: string;
}

const getMatchForRedditSubmissionHandler = async (req: Request, res: Response) => {
    try {

        const { redditSubmissionId} = req.body as getMatchForRedditSubmissionBody;

        // Validate request

        const matches = await getMatchForRedditSubmission(redditSubmissionId);

        res.statusCode = 201;

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

export default Router().post('/comments/getMatchForRedditSubmission', getMatchForRedditSubmissionHandler);
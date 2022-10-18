import {getDatastore} from "./datastore";

/**
 * Get the DB row from Datastore for the specified RedditSubmissionId
 * @param {string} RedditSubmissionId
 */

export const getMatchForRedditSubmissionId = async (RedditSubmissionId: string) => {
    const datastore = getDatastore();

    const query = datastore.createQuery('Matches')
        .filter('RedditSubmissionId', '=', RedditSubmissionId);

    const [matches] = await datastore.runQuery(query);

    return matches[0];
}

import {getDatastore} from "./datastore";

/**
 * Get the DB row from Datastore with the most recent RedditPostTimestampUtc field
 */

export const getLatestMatch = async () => {
    const datastore = getDatastore();

    const query = datastore.createQuery('Matches').order('RedditPostTimestampUtc', {
        descending: true
    });
    const queryResult = await datastore.runQuery(query);
    const [[latestMatch]] = queryResult;
    return latestMatch;

}

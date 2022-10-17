import {getDatastore} from "./datastore";
import {MatchesRow} from "./types";

/**
 * Helper function for storing in DB,
 *
 * @param {string} key
 * @param {string} data
 *
 */

export const storeInDb = async (key: string, data: Object) => {
    const datastore = getDatastore();

    const dbEntry = {
        key: datastore.key([key]),
        data: data
    }

    await datastore.save(dbEntry);
}

/**
 * Store a match object in the datastore
 *
 * @param {string} Region
 * @param {string} SummonerName
 * @param {number} Timestamp
 * @param {string} RedditSubmissionId
 *
 */

export const storeMatch = async(Region: string, SummonerName: string, Timestamp: number, RedditSubmissionId: string) => {
    const match: MatchesRow = {
        Region,
        SummonerName,
        Timestamp,
        RedditSubmissionId
    }

    await storeInDb('Matches', match);
}

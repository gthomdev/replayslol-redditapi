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
 * @param {string} region
 * @param {string} summonerName
 * @param {number} timestamp
 * @param {string} redditSubmissionId
 *
 */

export const storeMatch = async(region: string, summonerName: string, timestamp: number, redditSubmissionId: string) => {
    const match: MatchesRow = {
        region,
        summonerName,
        timestamp,
        redditSubmissionId
    }

    await storeInDb('Matches', match);
}

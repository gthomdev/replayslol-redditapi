import {getDatastore} from "./datastore";

/**
 * Get the DB row(s) from Datastore for the specified SummonerName
 * @param {string} SummonerName
 * @param {string} Region
 */

export const getMatchForSummonerName = async (SummonerName: string, Region: string) => {
    const datastore = getDatastore();

    const query = datastore.createQuery('Matches')
        .filter('SummonerName', '=', SummonerName)
        .filter('Region', '=', Region);

    const [matches] = await datastore.runQuery(query);

    return matches;
}


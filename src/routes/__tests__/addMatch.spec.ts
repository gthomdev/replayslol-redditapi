import { AddCommentsHandler__TESTING as AddCommentsHandler } from "../addMatch";

describe("addCommentsHandler", () => {

  const DummyRequest = {
    body: {
        region: "NA",
        summonerName: "DummySummonerName",
        timestamp: 123456789,
        redditSubmissionId: "DummyRedditSubmissionId"
    }
  }
/*
  region: string;
  summonerName: string;
  timestamp: number;
  redditSubmissionId: string;
 */
  it("Should throw a 400 error if missing region from request", async () => {
    const mockedJsonFn = jest.fn();

    const dummyResponse: any = {
      json: mockedJsonFn,
    }

    const copiedRequest = JSON.parse(JSON.stringify(DummyRequest));
    copiedRequest.region = "";

    await AddCommentsHandler(copiedRequest, dummyResponse);

    expect(mockedJsonFn).toBeCalledTimes(1);
    expect(mockedJsonFn).toBeCalledWith({
      region: "NA",
      summonerName: "DummySummonerName",
      timestamp: 123456789,
      redditSubmissionId: "DummyRedditSubmissionId"
    })
  })
});
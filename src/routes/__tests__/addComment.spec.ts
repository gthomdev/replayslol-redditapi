import { AddCommentsHandler__TESTING as AddCommentsHandler } from "../addMatch";

describe("addCommentsHandler", () => {

  const DummyRequest = {
    body: {
      summonerName: "ALL CHAT SMILEY",
      timestamp: 123456,
    }
  }

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
    "redditSubmissionId": undefined,
    "region": undefined,
    "success": true,
    "summonerName": "ALL CHAT SMILEY",
    "timestamp": 123456,
    })
  })

  it("Should throw a 400 error if missing summonerName from request", async () => {

  }
});
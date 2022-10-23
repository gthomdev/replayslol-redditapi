import { AddCommentsHandler__TESTING as AddCommentsHandler } from "../addMatch";

describe("addCommentsHandler", () => {

  const DummyRequest = {
    body: {
      summonerName: "ALL CHAT SMILEY",
      timestamp: 123456,
    }
  }

  it("Should throw a 400 error if missing region from request", () => {
    const mockedJsonFn = jest.fn();

    const dummyResponse: any = {
      json: mockedJsonFn,
    }

    const copiedRequest = JSON.parse(JSON.stringify(DummyRequest));
    copiedRequest.region = "";

    AddCommentsHandler(copiedRequest, dummyResponse);

    expect(mockedJsonFn).toBeCalledTimes(1);
    expect(mockedJsonFn).toBeCalledWith({
      success: false,
      error: "example error message here",
    })
  })

});
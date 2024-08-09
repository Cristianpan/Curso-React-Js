import { startNewNote } from "../../../src/store/journal/thunks";
import { authenticatedState } from "../../fixtures/authFixtures";

describe("Testing in Journal Thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("startNewNote should create a new blank note", async() => {
    getState.mockReturnValue({auth: authenticatedState});

    await startNewNote()(dispatch, getState); 
  });
});

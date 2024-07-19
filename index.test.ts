import { waitFor } from "@testing-library/react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
describe("flickering example", () => {
  it("finishes fast", async () => {
    for (let i = 0; i < 1000; i++) {
      await sleep(10);
    }
  });
});

it("flickers :(", async () => {
  for (let i = 0; i < 1000; i++) {
    if (i % 10 === 0) {
      await sleep(10);
      console.log("SOME OUTPUT");
    }
  }
});

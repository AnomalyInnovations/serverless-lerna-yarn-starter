import sample from "sample";
import lib from "../../libs";

export async function main(event, context) {
  return {
    statusCode: 200,
    body: `Hello World! Via ${sample()} and ${lib()}.`,
  };
}

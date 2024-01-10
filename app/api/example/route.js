// export default function handler(req, res) {
//   res.status(200).json({ text: "Hello" });
// }
import { tempResponse } from "@/helpers/tempResponse";

export async function GET(request) {
  // You can access the request body and query parameters from the request object
  const { body, query } = request;

  // Do something with the request data...
  //fake a response.
  let answers = [];

  for (let x = 0; x < 3; x++) {
    console.log(x);
    let randValue = Math.random();
    answers.push(
      tempResponse.quotes[Math.floor(randValue * tempResponse.quotes.length)]
    );
  }

  // Return a response
  return Response.json({ options: answers });
}

// export async function HEAD(request) {
//   return new Response(null, { status: 200 });
// }

export async function POST(request) {
  ///do things here to send back to the model.
  return new Response(null, { status: 200 });
}

// export async function PUT(request) {
//   return new Response(null, { status: 200 });
// }

// export async function DELETE(request) {
//   return new Response(null, { status: 200 });
// }

// export async function PATCH(request) {
//   return new Response(null, { status: 200 });
// }

// export async function OPTIONS(request) {
//   return new Response(null, { status: 200 });
// }

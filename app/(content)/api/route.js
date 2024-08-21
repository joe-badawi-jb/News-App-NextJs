// route.js is a route handler, we should name the function as http method (GET, POST, DELETE...)

export function GET(request) {
    console.log(request);

    // return new Response.json();
    return new Response('Hello!')
}
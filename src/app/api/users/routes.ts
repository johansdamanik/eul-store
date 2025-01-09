// Mock data (bisa diganti dengan database)
interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: "Kiki", email: "kiki@example.com" },
  { id: 2, name: "Johan", email: "johan@example.com" },
];

// API Handler for GET
export async function GET(request: Request): Promise<Response> {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// API Handler for POST
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const newUser: User = { id: users.length + 1, ...body };

    users.push(newUser);

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Invalid Data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// API Handler for DELETE
export async function DELETE(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const id = parseInt(url.searchParams.get("id") || "", 10);

    if (isNaN(id)) {
      throw new Error("Invalid ID");
    }

    users = users.filter((user) => user.id !== id);

    return new Response(
      JSON.stringify({ message: `User with id ${id} deleted` }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Invalid Request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

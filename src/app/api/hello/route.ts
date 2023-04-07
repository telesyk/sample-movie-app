type dataItem = {
  id: string;
  title: string;
};

type bodyType = {
  message: string;
  data?: [dataItem] | null;
};

export async function GET(request: Request) {
  const body: bodyType = {
    message: 'message status is here',
    data: [
      {
        id: 'test01',
        title: 'test',
      },
    ],
  };
  const myOptions = { status: 200, statusText: 'Hello, Next.js!!' };

  return new Response(JSON.stringify(body), myOptions);
}

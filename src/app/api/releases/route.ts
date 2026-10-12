import { NextResponse } from "next/server";

const OWNER = "Viper12CU";
const REPO = "link_chest";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  try {
    const res = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/releases`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { message: "No se pudieron obtener las versiones" },
        { status: res.status },
      );
    }

    const releases = await res.json();
    return NextResponse.json(releases);
  } catch {
    return NextResponse.json(
      { message: "No se pudieron obtener las versiones" },
      { status: 500 },
    );
  }
}

import { Nav } from "@/components/client/navbar";
import { Providers } from "./providers";

async function getTheme() {
  const res = await fetch(
    "https://my-json-server.typicode.com/ABelcaid/repo/db",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getTheme();

  return (
    <html lang="en">
      <body>
        <Providers theme={data}>
          <Nav>{children}</Nav>
        </Providers>
      </body>
    </html>
  );
}

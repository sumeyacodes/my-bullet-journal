import "./globals.css";

export const metadata = {
  title: "Second Brain",
  description: "My personal Bullet Journal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

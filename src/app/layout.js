import "./globals.css";

export const metadata = {
  title: "My Bullet Journal",
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

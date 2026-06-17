
import "./globals.css";
import Navbar from "./components/Nevbar";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout">
        <Navbar />
        <div className="main-content">
          {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
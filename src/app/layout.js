import "./globals.css";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL('https://digitaloffices.com.au'),
  title: 'Mind namo',
  description: 'Your Mental Health Experts',
};

export default ({ children, params }) => {
  const lang = params?.lang || 'en';
  return (
    <html lang={lang}><body className="antialiased"><Providers>{children}</Providers></body></html>
  )
}
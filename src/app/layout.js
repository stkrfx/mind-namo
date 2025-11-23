import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: 'Mind namo',
  description: 'Your Mental Health Experts',
};

export default ({ children }) => (
  <html lang="en"><body><Providers>{children}</Providers></body></html>
)
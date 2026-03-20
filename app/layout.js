import "./globals.css";

export const metadata = {
  title: "Luciano Arantes Filho | Portfólio",
  description: "Portfólio profissional com experiência, habilidades técnicas, projetos e repositórios GitHub."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

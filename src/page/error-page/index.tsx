
interface ErrorScreenProps {
  message?: string
  statusCode?: number
}

function ErrorScreen({
  message,
  statusCode,
}: ErrorScreenProps) {
  const errorMessage = message || 'Erro ao carregar a página'

  const errorStatusCode = statusCode || 500

  return (
    <div>
      <h1>Ops! Parece que algo de errado aconteceu:</h1>

      <p>Status code: {errorStatusCode}</p>
      <p>Erro: {errorMessage}</p>
    </div>
  );
};

export default ErrorScreen;

function classificarAlerta(nivel) {
  if (nivel > 80) return "Crítico";
  if (nivel > 50) return "Alto";
  return "Moderado";
};

function enviarNotificacao(alerta) {
  return `Notificação enviada: ${alerta}`;
} 

function processarAlerta(valor) {
    const alerta = classificarAlerta(valor);
    return enviarNotificacao(alerta);
}

test("processamento completo do alerta crítico", () => {
  const resultado = processarAlerta(90);
  expect(resultado).toBe("Notificação enviada: Crítico");
});
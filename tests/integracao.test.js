function classificarAlerta(nivel) {
  if (nivel > 80) return "Crítico";
  if (nivel > 50) return "Alto";
  return "Moderado";
}

function enviarNotificacao(alerta) {
  return `Notificação enviada: ${alerta}`;
}

test("classificação + notificação", () => {
  const alerta = classificarAlerta(90);
  const resultado = enviarNotificacao(alerta);
  expect(resultado).toBe("Notificação enviada: Crítico");   
});
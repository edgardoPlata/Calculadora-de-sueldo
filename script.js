const button = document.getElementById("calcular");

button.addEventListener("click", () => {
  const salarioBase = parseFloat(document.getElementById("salario-base").value);
  const horasExtra = parseFloat(document.getElementById("horas-extra").value);
  const pagoHoraExtra = parseFloat(
    document.getElementById("pago-hora-extra").value
  );
  const comision = parseFloat(document.getElementById("comision").value);
  const ventasTotales = parseFloat(
    document.getElementById("ventas-totales").value
  );

  const sueldo_bruto = document.getElementById("sueldo-bruto");
  const comision_total = document.getElementById("comision-total");
  const sueldo_neto = document.getElementById("sueldo-neto");

  let sueltobruto, comisiontotal, sueldoneto;

  //Salario base + (Horas extras * Pago por hora extra)
  sueltobruto = salarioBase + horasExtra * pagoHoraExtra;
  //Comisión = Ventas totales * Porcentaje de comisión
  comisiontotal = ventasTotales * (comision / 100);
  //Sueldo neto = Sueldo bruto + Comisión
  sueldoneto = sueltobruto + comisiontotal;

  sueldo_bruto.textContent = sueltobruto.toFixed(2);
  comision_total.textContent = comisiontotal.toFixed(2);
  sueldo_neto.textContent = sueldoneto.toFixed(2);
});

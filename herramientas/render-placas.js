const { chromium } = require('playwright');
const fs = require('fs');
const salida = process.argv[2] || __dirname; // carpeta de salida de los PNG sin comprimir
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + __dirname + '/placas.html');
  for (const n of ['sala-noche', 'sala-noche-vertical', 'barra-noche', 'mesa-velas', 'retrato-vela']) {
    const data = await p.evaluate(n => { const c = window.placas[n](); const d = c.toDataURL('image/png'); c.remove(); return d; }, n);
    fs.writeFileSync(salida + '/' + n + '.png', Buffer.from(data.split(',')[1], 'base64'));
    console.log(n);
  }
  await b.close();
})();

/* =========================================================
   Ronda (nombre provisional) · comportamiento del sitio
   Sin dependencias. Configuración en assets/js/config.js
   ========================================================= */
(function () {
  'use strict';
  var CONFIG = window.RONDA_CONFIG || {};
  var raiz = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var movimientoReducido = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COLOR_TEMA = { claro: '#1A100E', oscuro: '#0C0706' };

  /* ---------- Tema claro / oscuro ---------- */
  var mqOscuro = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function temaActivo() {
    var elegido = raiz.getAttribute('data-tema');
    if (elegido) return elegido;
    return mqOscuro && mqOscuro.matches ? 'oscuro' : 'claro';
  }
  function pintarTema() {
    var activo = temaActivo();
    raiz.setAttribute('data-tema-activo', activo);
    $$('.btn-tema').forEach(function (b) {
      b.setAttribute('aria-pressed', activo === 'oscuro' ? 'true' : 'false');
      b.setAttribute('aria-label', activo === 'oscuro' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    });
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', COLOR_TEMA[activo]);
  }
  $$('.btn-tema').forEach(function (b) {
    b.addEventListener('click', function () {
      var nuevo = temaActivo() === 'oscuro' ? 'claro' : 'oscuro';
      raiz.setAttribute('data-tema', nuevo);
      /* Preferencia elegida por el usuario (técnica, exenta de consentimiento). Ver cookies.html */
      try { localStorage.setItem('ronda-tema', nuevo); } catch (e) {}
      pintarTema();
    });
  });
  if (mqOscuro && mqOscuro.addEventListener) mqOscuro.addEventListener('change', pintarTema);
  pintarTema();

  /* ---------- Cabecera, volver arriba y barra móvil ---------- */
  var cab = $('#cabecera');
  var arriba = $('#arriba');
  function alScroll() {
    var y = window.scrollY;
    if (cab) cab.classList.toggle('solida', y > 8);
    if (arriba) arriba.classList.toggle('visible', y > 700);
  }
  alScroll();
  window.addEventListener('scroll', alScroll, { passive: true });
  if (arriba) arriba.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: movimientoReducido ? 'auto' : 'smooth' });
    var destino = $('#contenido');
    if (destino) { destino.setAttribute('tabindex', '-1'); destino.focus({ preventScroll: true }); }
  });

  var barra = $('#barra-movil');
  var accionesPortada = $('.portada .acciones');
  var contacto = $('#contacto');
  var pasadaPortada = false, enContacto = false;
  function mostrarBarra() {
    if (!barra) return;
    var v = pasadaPortada && !enContacto;
    barra.classList.toggle('visible', v);
    barra.setAttribute('aria-hidden', v ? 'false' : 'true');
    document.body.classList.toggle('con-barra', v);
    $$('a', barra).forEach(function (a) { if (v) a.removeAttribute('tabindex'); else a.setAttribute('tabindex', '-1'); });
  }
  if (barra && 'IntersectionObserver' in window) {
    if (accionesPortada) new IntersectionObserver(function (e) {
      pasadaPortada = !e[0].isIntersecting && e[0].boundingClientRect.top < 0; mostrarBarra();
    }).observe(accionesPortada);
    /* En la sección de contacto la barra sobra: el formulario ya está a la vista */
    if (contacto) new IntersectionObserver(function (e) {
      enContacto = e[0].isIntersecting; mostrarBarra();
    }, { rootMargin: '0px 0px -30% 0px' }).observe(contacto);
  }

  /* ---------- Menú móvil ---------- */
  var btnMenu = $('.btn-menu');
  var menu = $('#menu');
  function cerrarMenu(devolverFoco) {
    if (!menu || !btnMenu) return;
    menu.classList.remove('abierto');
    btnMenu.setAttribute('aria-expanded', 'false');
    btnMenu.textContent = 'Menú';
    if (devolverFoco) btnMenu.focus();
  }
  if (btnMenu && menu) {
    btnMenu.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      btnMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      btnMenu.textContent = abierto ? 'Cerrar' : 'Menú';
      if (abierto) { var a = $('a', menu); if (a) a.focus(); }
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) cerrarMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('abierto')) cerrarMenu(true);
    });
  }

  /* ---------- Sección activa en el menú ---------- */
  var enlacesMenu = $$('#menu a[href^="#"]').filter(function (a) { return a.getAttribute('href') !== '#contacto'; });
  if (enlacesMenu.length && 'IntersectionObserver' in window) {
    var mapaEnlaces = {};
    enlacesMenu.forEach(function (a) { mapaEnlaces[a.getAttribute('href').slice(1)] = a; });
    var obsMenu = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        var a = mapaEnlaces[en.target.id];
        if (!a) return;
        if (en.isIntersecting) {
          enlacesMenu.forEach(function (x) { x.removeAttribute('aria-current'); });
          a.setAttribute('aria-current', 'true');
        } else if (a.getAttribute('aria-current')) { a.removeAttribute('aria-current'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(mapaEnlaces).forEach(function (id) { var s = document.getElementById(id); if (s) obsMenu.observe(s); });
  }

  /* ---------- Aparición al desplazarse ---------- */
  if (raiz.classList.contains('js-revelar')) {
    var obsRevelar = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); obsRevelar.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    $$('.revelar, .revelar-grupo').forEach(function (el) { obsRevelar.observe(el); });
  }

  /* ---------- Plano de sala: el punto recorre la ruta y se para en las mesas ---------- */
  var plano = $('.plano');
  var ruta = plano && $('#ruta', plano);
  var yo = plano && $('#yo', plano);
  if (plano && ruta && yo && ruta.getTotalLength && !movimientoReducido && window.requestAnimationFrame) {
    var L = ruta.getTotalLength();
    var paradas = $$('.p-bocadillo', plano).map(function (b) {
      var x = +b.getAttribute('data-x'), y = +b.getAttribute('data-y'), mejor = 0, dist = Infinity;
      for (var i = 0; i <= 400; i++) {
        var p = ruta.getPointAtLength(L * i / 400), d = (p.x - x) * (p.x - x) + (p.y - y) * (p.y - y);
        if (d < dist) { dist = d; mejor = i / 400; }
      }
      return { el: b, f: mejor, mesa: $('.p-mesa-g[data-mesa="' + b.getAttribute('data-mesa') + '"]', plano) };
    });
    var pos = paradas.length ? (paradas[0].f + 0.92) % 1 : 0, previo = null, activo = false, pedido = null;
    var difer = function (a, f) { var d = a - f; if (d < -0.5) d += 1; if (d > 0.5) d -= 1; return d; };
    plano.classList.add('animado');
    var cuadro = function (t) {
      pedido = null;
      if (!activo) { previo = null; return; }
      if (previo !== null) {
        var dt = Math.min(64, t - previo) / 1000;
        var parado = paradas.some(function (p) { var d = difer(pos, p.f); return d >= -0.006 && d < 0.035; });
        pos = (pos + dt * (parado ? 0.012 : 0.06)) % 1;
      }
      previo = t;
      var pt = ruta.getPointAtLength(pos * L);
      yo.setAttribute('transform', 'translate(' + pt.x.toFixed(1) + ' ' + pt.y.toFixed(1) + ')');
      paradas.forEach(function (p) {
        var d = difer(pos, p.f);
        p.el.classList.toggle('visible', d >= -0.01 && d < 0.14);
        if (p.mesa) p.mesa.classList.toggle('activa', d >= -0.01 && d < 0.04);
      });
      pedido = requestAnimationFrame(cuadro);
    };
    var arrancar = function (si) {
      activo = si && !document.hidden;
      if (activo && pedido === null) pedido = requestAnimationFrame(cuadro);
    };
    var visiblePlano = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { visiblePlano = e[0].isIntersecting; arrancar(visiblePlano); }).observe(plano);
    } else { arrancar(true); }
    document.addEventListener('visibilitychange', function () { arrancar(visiblePlano); });
  }

  /* ---------- Aviso flotante ---------- */
  var toast = $('#toast'), toastTimer = null;
  function avisar(titulo, texto) {
    if (!toast) return;
    toast.innerHTML = '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6v.4"/></svg><div><b></b><span></span></div><button type="button" aria-label="Cerrar aviso"><svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg></button>';
    $('b', toast).textContent = titulo;
    $('span', toast).textContent = texto;
    toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add('visible'); });
    $('button', toast).addEventListener('click', cerrarToast);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(cerrarToast, 7000);
  }
  function cerrarToast() {
    if (!toast) return;
    toast.classList.remove('visible');
    setTimeout(function () { if (!toast.classList.contains('visible')) toast.hidden = true; }, 260);
  }

  /* ---------- WhatsApp: mismo objetivo que la CTA principal ---------- */
  function urlSegura(u) { return /^https:\/\/[^\s"'<>]+$/.test(u || ''); }
  var wa = String(CONFIG.whatsapp || '').replace(/\D/g, '');
  var urlWa = wa.length >= 11 ? 'https://wa.me/' + wa + '?text=' + encodeURIComponent(CONFIG.whatsappMensaje || '') : '';
  $$('[data-whatsapp]').forEach(function (el) {
    if (urlWa) {
      el.href = urlWa; el.target = '_blank'; el.rel = 'noopener';
    } else {
      el.setAttribute('aria-describedby', 'wa-pendiente');
      el.addEventListener('click', function () {
        avisar('WhatsApp pendiente de configurar', 'Es un prototipo y aún no hay número. Mientras tanto, puedes probar el formulario de solicitud.');
      });
    }
  });
  if (!urlWa) {
    var desc = document.createElement('span');
    desc.id = 'wa-pendiente'; desc.className = 'sr-only';
    desc.textContent = 'Prototipo: número de WhatsApp pendiente de configurar.';
    ($('main') || document.body).appendChild(desc);
  } else {
    $$('[data-whatsapp-estado]').forEach(function (el) { el.textContent = 'Te responde el equipo de Ronda'; });
  }

  /* ---------- Redes (solo si están configuradas) ---------- */
  var hayRedes = false;
  ['instagram', 'linkedin', 'tiktok', 'facebook'].forEach(function (red) {
    if (urlSegura(CONFIG[red])) $$('[data-red="' + red + '"]').forEach(function (el) {
      el.href = CONFIG[red]; el.parentNode.hidden = false; hayRedes = true;
    });
  });
  if (hayRedes) $$('[data-redes-pendiente]').forEach(function (el) { el.hidden = true; });

  /* ---------- Formulario de solicitud ---------- */
  var form = $('#form-contacto');
  if (form) {
    var cargadoEn = Date.now();
    var aviso = $('#form-aviso');
    var btn = $('button[type="submit"]', form);
    var modoDemo = !CONFIG.web3formsKey;
    btn.disabled = false;
    $$('[data-demo-aviso]').forEach(function (el) { el.hidden = !modoDemo; });

    var campos = {
      nombre: $('#f-nombre'), local: $('#f-local'), tipo: $('#f-tipo'),
      email: $('#f-email'), telefono: $('#f-telefono'), mensaje: $('#f-mensaje'), privacidad: $('#f-privacidad')
    };
    var reglas = {
      nombre: function (v) { return v.trim().length < 2 ? 'Escribe tu nombre (mínimo 2 letras).' : ''; },
      local: function (v) { return v.trim().length < 2 ? 'Escribe el nombre del local.' : ''; },
      tipo: function (v) { return v ? '' : 'Elige el tipo de local.'; },
      email: function (v) {
        if (!v.trim()) return campos.telefono.value.trim() ? '' : 'Déjanos un correo o un teléfono.';
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Revisa el correo: debe tener el formato nombre@dominio.es.';
      },
      telefono: function (v) {
        if (!v.trim()) return '';
        var d = v.replace(/[\s().-]/g, '');
        return /^\+?\d{9,15}$/.test(d) ? '' : 'Revisa el teléfono: escribe al menos 9 cifras.';
      },
      mensaje: function (v) { return v.trim().length > 1000 ? 'El mensaje es demasiado largo (máximo 1000 caracteres).' : ''; },
      privacidad: function (_, el) { return el.checked ? '' : 'Marca la casilla para confirmar que has leído la información de privacidad.'; }
    };
    function validar(nombre) {
      var el = campos[nombre], msg = reglas[nombre](el.value || '', el);
      var err = $('#e-' + nombre);
      el.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (err) { err.textContent = msg; err.classList.toggle('activo', !!msg); }
      return !msg;
    }
    Object.keys(campos).forEach(function (n) {
      var el = campos[n];
      var evento = (el.type === 'checkbox' || el.tagName === 'SELECT') ? 'change' : 'blur';
      el.addEventListener(evento, function () { if (el.dataset.tocado || evento === 'change') validar(n); });
      el.addEventListener('input', function () { el.dataset.tocado = '1'; if (el.getAttribute('aria-invalid') === 'true') validar(n); });
    });
    campos.telefono.addEventListener('blur', function () { if (campos.email.dataset.tocado || campos.email.getAttribute('aria-invalid') === 'true') validar('email'); });

    function mostrarAviso(tipo, titulo, texto) {
      var trazo = tipo === 'ok' ? '<path d="M20 6 9 17l-5-5"/>' : '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/>';
      aviso.className = 'aviso activo ' + tipo;
      aviso.innerHTML = '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' + trazo + '</svg><div><b></b><span></span></div>';
      $('b', aviso).textContent = titulo;
      $('span', aviso).textContent = texto;
      aviso.setAttribute('tabindex', '-1');
      aviso.focus();
    }
    function franjasElegidas() {
      return $$('input[name="franjas"]:checked', form).map(function (i) { return i.value; }).join(', ');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      aviso.className = 'aviso';
      Object.keys(campos).forEach(function (n) { campos[n].dataset.tocado = '1'; });
      var malos = Object.keys(campos).filter(function (n) { return !validar(n); });
      if (malos.length) {
        mostrarAviso('ko', malos.length === 1 ? 'Hay 1 campo por revisar.' : 'Hay ' + malos.length + ' campos por revisar.', 'Corrige lo marcado y vuelve a pulsar «Solicitar propuesta».');
        campos[malos[0]].focus();
        return;
      }
      /* Antispam: casilla trampa invisible y tiempo mínimo de rellenado */
      if (form.elements.botcheck && form.elements.botcheck.checked) return;
      if (Date.now() - cargadoEn < 3000) {
        mostrarAviso('ko', 'No se ha podido procesar.', 'Espera unos segundos y vuelve a pulsar «Solicitar propuesta».');
        return;
      }
      if (modoDemo) {
        /* Sin servicio configurado: NO se envía nada y se dice claramente */
        btn.setAttribute('aria-busy', 'true');
        setTimeout(function () {
          btn.removeAttribute('aria-busy');
          mostrarAviso('demo', 'Modo demostración: tu solicitud no se ha enviado.', 'Los datos están bien rellenados, pero este prototipo no está conectado a ningún servicio de envío y nadie va a recibirlos. No han salido de tu navegador.');
        }, 700);
        return;
      }
      btn.setAttribute('aria-busy', 'true');
      var textoBtn = btn.textContent;
      btn.textContent = 'Enviando… ';
      var datos = {
        access_key: CONFIG.web3formsKey,
        subject: 'Nueva solicitud de propuesta desde la web de Ronda',
        from_name: 'Web Ronda',
        nombre: campos.nombre.value.trim(),
        local: campos.local.value.trim(),
        tipo: campos.tipo.value,
        zona: ($('#f-zona').value || '').trim(),
        franjas: franjasElegidas(),
        email: campos.email.value.trim(),
        telefono: campos.telefono.value.trim(),
        mensaje: campos.mensaje.value.trim(),
        botcheck: false
      };
      if (datos.email) datos.replyto = datos.email;
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(datos)
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (res.ok && res.j && res.j.success) {
            form.reset();
            Object.keys(campos).forEach(function (n) { campos[n].removeAttribute('aria-invalid'); delete campos[n].dataset.tocado; });
            mostrarAviso('ok', 'Solicitud enviada.', 'Gracias, ' + datos.nombre.split(' ')[0] + '. Te contactaremos para preparar tu propuesta.');
          } else {
            mostrarAviso('ko', 'No se ha podido enviar.', 'El servicio de envío ha rechazado la solicitud. Inténtalo más tarde.');
          }
        })
        .catch(function () {
          mostrarAviso('ko', 'No se ha podido enviar.', 'Parece que no hay conexión. Revisa tu internet e inténtalo de nuevo.');
        })
        .then(function () { btn.removeAttribute('aria-busy'); btn.textContent = textoBtn; });
    });
  }

  /* ---------- Año del pie ---------- */
  $$('[data-anio]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();

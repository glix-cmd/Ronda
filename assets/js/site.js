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
  var COLOR_TEMA = { claro: '#F4F0E9', oscuro: '#090807' };

  /* ---------- Tema: oscuro por defecto, variante clara elegible ---------- */
  function temaActivo() {
    return raiz.getAttribute('data-tema') === 'claro' ? 'claro' : 'oscuro';
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
  pintarTema();

  /* ---------- Cabecera, volver arriba y barra móvil ---------- */
  var cab = $('#cabecera');
  var arriba = $('#arriba');
  var progreso = $('.progreso span');
  var anillo = $('#arriba .anillo-prog');
  var hero = $('.hero');
  var placas = movimientoReducido ? [] : $$('.interludio, .contacto');
  var pendienteScroll = false;
  /* Un solo cálculo por fotograma: cabecera, barra de progreso de lectura,
     anillo del botón «volver arriba» y desplazamiento suave de la portada */
  function alScroll() {
    pendienteScroll = false;
    var y = window.scrollY;
    var total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var p = Math.min(1, Math.max(0, y / total));
    if (cab) cab.classList.toggle('solida', y > 8);
    if (hero) document.body.classList.toggle('tras-portada', y > hero.offsetHeight * 0.55);
    if (arriba) arriba.classList.toggle('visible', y > 700);
    if (progreso) progreso.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    if (anillo) anillo.style.strokeDashoffset = (100 - p * 100).toFixed(2);
    if (hero && !movimientoReducido) {
      var alto = hero.offsetHeight || 1;
      var h = Math.min(1, y / alto);
      hero.style.setProperty('--sy', h.toFixed(3));
    }
    if (placas.length) {
      var vh = window.innerHeight;
      placas.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -50 || r.top > vh + 50) return;
        var c = (r.top + r.height / 2 - vh / 2) / (vh + r.height);
        el.style.setProperty('--desp', (c * -90).toFixed(1) + 'px');
      });
    }
  }
  alScroll();
  window.addEventListener('scroll', function () {
    if (!pendienteScroll) { pendienteScroll = true; requestAnimationFrame(alScroll); }
  }, { passive: true });
  window.addEventListener('resize', alScroll, { passive: true });
  if (arriba) arriba.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: movimientoReducido ? 'auto' : 'smooth' });
    var destino = $('#contenido');
    if (destino) { destino.setAttribute('tabindex', '-1'); destino.focus({ preventScroll: true }); }
  });

  var barra = $('#barra-movil');
  var accionesPortada = $('.hero-acciones');
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
  var txtMenu = btnMenu && $('.btn-menu-txt', btnMenu);
  var fueraMenu = $$('main, .pie, .flotantes, .proto-barra, .barra-movil');
  function ponerMenu(abierto) {
    /* El menú empieza justo bajo la cabecera, esté donde esté (la barra de prototipo la desplaza al principio) */
    if (abierto && cab) menu.style.paddingTop = Math.round(Math.max(0, cab.getBoundingClientRect().bottom) + window.innerHeight * 0.04) + 'px';
    menu.classList.toggle('abierto', abierto);
    raiz.classList.toggle('menu-abierto', abierto);
    btnMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    if (txtMenu) txtMenu.textContent = abierto ? 'Cerrar' : 'Menú';
    /* Mientras el menú cubre la pantalla, lo de detrás no recibe foco ni clics */
    fueraMenu.forEach(function (el) { if (abierto) el.setAttribute('inert', ''); else el.removeAttribute('inert'); });
  }
  function cerrarMenu(devolverFoco) {
    if (!menu || !btnMenu || !menu.classList.contains('abierto')) return;
    ponerMenu(false);
    if (devolverFoco) btnMenu.focus();
  }
  if (btnMenu && menu) {
    btnMenu.addEventListener('click', function () {
      var abierto = !menu.classList.contains('abierto');
      ponerMenu(abierto);
      if (abierto) { var a = $('a', menu); if (a) setTimeout(function () { a.focus({ preventScroll: true }); }, movimientoReducido ? 0 : 320); }
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) cerrarMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cerrarMenu(true);
    });
    /* Clic fuera del menú: se cierra */
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#menu') && !e.target.closest('.btn-menu')) cerrarMenu(false);
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
    var dice = $('.plano-dice', plano), ultimaParada;
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
      var hablando = null;
      paradas.forEach(function (p) {
        var d = difer(pos, p.f);
        var visible = d >= -0.01 && d < 0.14;
        p.el.classList.toggle('visible', visible);
        if (visible) hablando = p;
        if (p.mesa) p.mesa.classList.toggle('activa', d >= -0.01 && d < 0.04);
      });
      /* Réplica legible (solo se ve en móvil) de lo que se dice en la parada actual */
      if (dice && hablando !== ultimaParada) {
        ultimaParada = hablando;
        dice.classList.toggle('vacio', !hablando);
        if (hablando) {
          dice.firstChild.textContent = 'Mesa ' + hablando.el.getAttribute('data-mesa').replace(/\D/g, '');
          dice.lastChild.textContent = hablando.el.textContent.trim();
        }
      }
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
    toast.innerHTML = '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6v.4"/></svg><div><b></b><span></span></div><button type="button" aria-label="Cerrar aviso"><svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg></button><i class="toast-tiempo" aria-hidden="true"></i>';
    $('b', toast).textContent = titulo;
    $('span', toast).textContent = texto;
    toast.classList.remove('pausa');
    toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add('visible'); });
    $('button', toast).addEventListener('click', cerrarToast);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(cerrarToast, 7000);
  }
  /* El aviso no se cierra mientras el ratón o el foco están encima */
  if (toast) {
    var pausarToast = function () { clearTimeout(toastTimer); toast.classList.add('pausa'); };
    var seguirToast = function () { toast.classList.remove('pausa'); clearTimeout(toastTimer); toastTimer = setTimeout(cerrarToast, 3000); };
    toast.addEventListener('mouseenter', pausarToast);
    toast.addEventListener('focusin', pausarToast);
    toast.addEventListener('mouseleave', seguirToast);
    toast.addEventListener('focusout', seguirToast);
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
      aviso.innerHTML = '<svg class="icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">' + trazo + '</svg><div><b></b><span></span></div>';
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
        /* Pequeña sacudida de los campos con error (no con movimiento reducido) */
        if (!movimientoReducido) malos.forEach(function (n) {
          var c = campos[n].closest('.campo');
          if (!c) return;
          c.classList.remove('sacudir'); void c.offsetWidth; c.classList.add('sacudir');
          setTimeout(function () { c.classList.remove('sacudir'); }, 450);
        });
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
      var txtBtn = $('.cta-txt', btn) || btn;
      var textoBtn = txtBtn.textContent;
      txtBtn.textContent = 'Enviando…';
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
        .then(function () { btn.removeAttribute('aria-busy'); txtBtn.textContent = textoBtn; });
    });
  }

  /* ---------- Contador de caracteres del mensaje ---------- */
  var mensaje = $('#f-mensaje'), contador = $('#a-mensaje');
  if (mensaje && contador) {
    var max = +mensaje.getAttribute('maxlength') || 1000;
    var contar = function () {
      var n = mensaje.value.length;
      contador.textContent = n + ' / ' + max + ' caracteres';
      contador.classList.toggle('cerca', n > max * 0.9);
    };
    mensaje.addEventListener('input', contar);
    contar();
  }

  /* ---------- Preguntas frecuentes: apertura y cierre con altura animada ---------- */
  $$('.faq details').forEach(function (d) {
    var resumen = $('summary', d), anim = null;
    if (!resumen || !d.animate) return;
    resumen.addEventListener('click', function (e) {
      if (movimientoReducido) return;
      e.preventDefault();
      var abriendo = !d.open || d.classList.contains('cerrando');
      var inicio = d.offsetHeight + 'px';
      if (anim) anim.cancel();
      d.classList.toggle('cerrando', !abriendo);
      if (abriendo) d.open = true;
      var fin = abriendo ? d.scrollHeight + 'px' : resumen.offsetHeight + 'px';
      d.style.overflow = 'hidden';
      anim = d.animate({ height: [inicio, fin] }, { duration: abriendo ? 280 : 190, easing: abriendo ? 'cubic-bezier(.16,1,.3,1)' : 'cubic-bezier(.4,0,1,1)' });
      anim.onfinish = function () {
        anim = null; d.style.overflow = '';
        if (!abriendo) d.open = false;
        d.classList.remove('cerrando');
      };
      anim.oncancel = function () { d.style.overflow = ''; };
    });
  });

  /* ---------- Portada: ligera profundidad al mover el ratón ---------- */
  if (hero && !movimientoReducido && window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var objetivoX = 0, objetivoY = 0, actualX = 0, actualY = 0, girando = null;
    var paso = function () {
      actualX += (objetivoX - actualX) * 0.08;
      actualY += (objetivoY - actualY) * 0.08;
      hero.style.setProperty('--px', actualX.toFixed(3));
      hero.style.setProperty('--py', actualY.toFixed(3));
      if (Math.abs(objetivoX - actualX) > 0.001 || Math.abs(objetivoY - actualY) > 0.001) girando = requestAnimationFrame(paso);
      else girando = null;
    };
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      objetivoX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      objetivoY = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!girando) girando = requestAnimationFrame(paso);
    });
    hero.addEventListener('pointerleave', function () {
      objetivoX = 0; objetivoY = 0;
      if (!girando) girando = requestAnimationFrame(paso);
    });
  }

  /* ---------- Portada: luces cálidas en suspensión ---------- */
  var lienzo = $('.hero-luces');
  if (lienzo && hero && lienzo.getContext && !movimientoReducido && window.requestAnimationFrame) {
    var ctx = lienzo.getContext('2d'), luces = [], ancho = 0, alto = 0, dpr = 1, enMarcha = false, idLuces = null, tPrevio = null;
    var crearLuces = function () {
      var n = ancho < 760 ? 14 : 26;
      luces = [];
      for (var i = 0; i < n; i++) {
        luces.push({
          x: Math.random() * ancho, y: Math.random() * alto,
          r: (6 + Math.random() * 30) * (ancho < 760 ? .8 : 1),
          a: .05 + Math.random() * .13,
          vy: -(4 + Math.random() * 10), fase: Math.random() * 6.28, amp: 6 + Math.random() * 16,
          tono: Math.random() < .7 ? '231,160,82' : '201,104,52'
        });
      }
    };
    var medir = function () {
      var r = hero.getBoundingClientRect();
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      ancho = r.width; alto = r.height;
      lienzo.width = Math.round(ancho * dpr); lienzo.height = Math.round(alto * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      crearLuces();
    };
    var pintarLuces = function (t) {
      idLuces = null;
      if (!enMarcha) { tPrevio = null; return; }
      var dt = tPrevio === null ? 0 : Math.min(64, t - tPrevio) / 1000;
      tPrevio = t;
      ctx.clearRect(0, 0, ancho, alto);
      ctx.globalCompositeOperation = 'lighter';
      luces.forEach(function (l) {
        l.y += l.vy * dt; l.fase += dt * .25;
        if (l.y < -l.r * 2) { l.y = alto + l.r * 2; l.x = Math.random() * ancho; }
        var x = l.x + Math.sin(l.fase) * l.amp;
        var g = ctx.createRadialGradient(x, l.y, 0, x, l.y, l.r);
        g.addColorStop(0, 'rgba(' + l.tono + ',' + l.a + ')');
        g.addColorStop(.55, 'rgba(' + l.tono + ',' + (l.a * .45) + ')');
        g.addColorStop(1, 'rgba(' + l.tono + ',0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, l.y, l.r, 0, 6.2832); ctx.fill();
      });
      idLuces = requestAnimationFrame(pintarLuces);
    };
    var activarLuces = function (si) {
      enMarcha = si && !document.hidden;
      if (enMarcha && idLuces === null) idLuces = requestAnimationFrame(pintarLuces);
    };
    medir();
    lienzo.classList.add('activa');
    var heroVisible = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; activarLuces(heroVisible); }).observe(hero);
    else activarLuces(true);
    document.addEventListener('visibilitychange', function () { activarLuces(heroVisible); });
    var reMedir = null;
    window.addEventListener('resize', function () { clearTimeout(reMedir); reMedir = setTimeout(medir, 200); }, { passive: true });
  }

  /* ---------- Año del pie ---------- */
  $$('[data-anio]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();

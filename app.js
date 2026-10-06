// NovaAndes shop source catalog — restored from the public site on 2026-10-01.
// Public retail data only. Supplier costs and pricing calculations stay outside this deploy folder.
// Source: https://novaandes.ec/app.js (77 products) merged with catalog-public.json (orderCode/url).
const CATALOG = [
  {
    "id": "linterna-tactica-152234",
    "dropiId": 152234,
    "orderCode": "NA-1U7ANP6",
    "name": "Linterna táctica recargable",
    "category": "Hogar y herramientas",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-152234.jpg",
      "img/linterna-152234-ref-2.png",
      "img/linterna-152234-ref-3.png"
    ],
    "description": "Iluminación portátil recargable para tener a mano en casa, el vehículo o una salida al aire libre.",
    "features": [
      "1 linterna táctica recargable",
      "Luz frontal y panel lateral",
      "Formato portátil con clip",
      "Cable y accesorios sujetos a confirmación"
    ],
    "availability": "La primera foto es del proveedor; las imágenes adicionales son recreaciones de referencia sin marcas. Confirmamos modelo, modos de luz, alimentación, accesorios y existencias actuales antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/linterna-tactica-152234/"
  },
  {
    "id": "respaldo-silla-180745",
    "dropiId": 180745,
    "orderCode": "NA-1AM3JDZ",
    "name": "Soporte ergonómico de espalda para silla",
    "category": "Organización personal",
    "price": 31,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/respaldo-silla-180745-clean.png",
      "img/respaldo-180745-ref-2.png",
      "img/respaldo-180745-ref-3.png"
    ],
    "description": "Añade un apoyo desmontable al respaldo de una silla compatible para mejorar la comodidad al sentarte.",
    "features": [
      "1 soporte para respaldo",
      "Diseño para silla compatible",
      "Montaje y ajuste sujetos al modelo de silla",
      "Silla no incluida"
    ],
    "availability": "Imágenes de referencia recreadas a partir de la ficha del proveedor, sin publicidad de terceros. No es un dispositivo médico ni se prometen efectos terapéuticos. Confirmamos medidas, material, ajuste y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/respaldo-silla-180745/"
  },
  {
    "id": "cafetera-107346",
    "dropiId": 107346,
    "orderCode": "NA-1A0TDWC",
    "name": "Cafetera de filtro Sokany",
    "category": "Cocina",
    "price": 39,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-107346.jpg",
      "img/cafetera-107346-ref-2.png",
      "img/cafetera-107346-ref-3.png"
    ],
    "description": "Prepara café filtrado en casa con una cafetera eléctrica y jarra de vidrio.",
    "features": [
      "1 cafetera con jarra",
      "Sistema de café por goteo",
      "Interruptor frontal",
      "Café, filtros y taza no incluidos"
    ],
    "availability": "La primera foto es del proveedor; las imágenes adicionales son recreaciones de referencia sin marcas. Confirmamos voltaje para Ecuador, capacidad, filtro incluido, accesorios y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/cafetera-107346/"
  },
  {
    "id": "picador-109695",
    "dropiId": 109695,
    "name": "Picador eléctrico multifuncional",
    "category": "Cocina",
    "price": 25,
    "currency": "USD",
    "status": "draft",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/picador-109695-clean.png"
    ],
    "description": "Pica porciones pequeñas de ingredientes compatibles con un equipo eléctrico de mano.",
    "features": [
      "1 picador eléctrico",
      "Recipiente desmontable",
      "Formato compacto",
      "Ingredientes no incluidos"
    ],
    "availability": "Publicación pausada hasta verificar y preparar una galería compuesta únicamente por fotos del mismo producto del proveedor.",
    "url": "https://novaandes.ec/productos/picador-109695/"
  },
  {
    "id": "robot-trapeador-159921",
    "dropiId": 159921,
    "orderCode": "NA-17VKTP2",
    "name": "Robot trapeador recargable",
    "category": "Limpieza",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/robot-trapeador-159921-clean.png",
      "img/robot-159921-ref-2.png",
      "img/robot-159921-ref-3.png"
    ],
    "description": "Realiza pasadas automáticas sobre pisos compatibles con un equipo compacto y recargable.",
    "features": [
      "1 robot trapeador",
      "Almohadilla circular",
      "Alimentación recargable según ficha del proveedor",
      "Cable y accesorios sujetos a confirmación"
    ],
    "availability": "Imágenes de referencia recreadas a partir de la ficha del proveedor, sin publicidad de terceros. No se promete navegación inteligente ni cobertura total. Confirmamos funciones, autonomía, repuestos y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/robot-trapeador-159921/"
  },
  {
    "id": "cepillo-mascotas-73302",
    "dropiId": 73302,
    "orderCode": "NA-18U4Q3D",
    "name": "Cepillo con vapor para mascotas",
    "category": "Mascotas",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cepillo-mascotas-73302-clean.png",
      "img/cepillo-73302-ref-2.png",
      "img/cepillo-73302-ref-3.png"
    ],
    "description": "Cepilla el pelaje de una mascota con un accesorio de mano que libera una neblina ligera.",
    "features": [
      "1 cepillo para mascotas",
      "Mango integrado",
      "Depósito y alimentación sujetos a confirmación",
      "Para pelaje compatible"
    ],
    "availability": "Imágenes de referencia recreadas a partir de la ficha del proveedor, sin publicidad de terceros. Consulta a un veterinario si tu mascota tiene afecciones de piel. Confirmamos funcionamiento, temperatura, cuidados y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/cepillo-mascotas-73302/"
  },
  {
    "id": "fundas-zapatos-149004",
    "dropiId": 149004,
    "orderCode": "NA-0NWE52A",
    "name": "Fundas impermeables de silicona para zapatos",
    "category": "Auto y viaje",
    "price": 22,
    "currency": "USD",
    "status": "draft",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-149004.png",
      "img/fundas-zapatos-149004-ref-2.png",
      "img/fundas-zapatos-149004-ref-3.png"
    ],
    "description": "Cubre zapatos compatibles al caminar bajo lluvia o sobre superficies húmedas.",
    "features": [
      "1 par de fundas de silicona",
      "Diseño reutilizable",
      "Suela texturizada",
      "Tallas L y M mostradas en la ficha"
    ],
    "availability": "La primera foto es del proveedor; las imágenes adicionales son recreaciones de referencia. La resistencia al deslizamiento depende de la superficie y el ajuste. Confirmamos talla, color y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/fundas-zapatos-149004/"
  },
  {
    "id": "picador-3-litros-112193",
    "dropiId": 112193,
    "orderCode": "NA-0LBKL0V",
    "name": "Picador triturador eléctrico de 3 litros",
    "category": "Cocina",
    "price": 35,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-112193.webp",
      "img/picador-112193-ref-2.png",
      "img/picador-112193-ref-3.png"
    ],
    "description": "Procesa porciones de ingredientes compatibles en un recipiente metálico de gran capacidad.",
    "features": [
      "1 picador eléctrico",
      "Capacidad anunciada: 3 litros",
      "Recipiente de acero y cuchillas internas",
      "Ingredientes no incluidos"
    ],
    "availability": "La primera foto es del proveedor; las imágenes adicionales son recreaciones de referencia. Confirmamos voltaje para Ecuador, potencia, materiales, accesorios y existencias antes del pedido. Mantén las cuchillas fuera del alcance de niños.",
    "url": "https://novaandes.ec/productos/picador-3-litros-112193/"
  },
  {
    "id": "foco-ventilador-103380",
    "dropiId": 103380,
    "orderCode": "NA-04298VV",
    "name": "Foco con ventilador plegable y control",
    "category": "Iluminación y decoración",
    "price": 29,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-103380.jpg",
      "img/foco-103380-ref-2.png",
      "img/foco-103380-ref-3.png"
    ],
    "description": "Combina iluminación y ventilación en un accesorio plegable para una rosca compatible.",
    "features": [
      "1 foco con ventilador",
      "Aspas plegables",
      "Control remoto mostrado por el proveedor",
      "Rosca y voltaje sujetos a confirmación"
    ],
    "availability": "La primera foto es del proveedor; las imágenes adicionales son recreaciones de referencia. La instalación debe realizarse con la energía desconectada. Confirmamos rosca, voltaje, potencia, control y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/foco-ventilador-103380/"
  },
  {
    "id": "sarten-coreano-121419",
    "dropiId": 121419,
    "orderCode": "NA-0RAY6N7",
    "name": "Sartén coreano antiadherente",
    "category": "Cocina",
    "price": 26,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-121419.jpg",
      "img/sarten-121419-ref-2.png",
      "img/sarten-121419-ref-3.png"
    ],
    "description": "Prepara porciones a la plancha en una sartén redonda de estilo coreano.",
    "features": [
      "1 sartén con dos asas",
      "Revestimiento antiadherente según ficha del proveedor",
      "Para cocina compatible",
      "Alimentos y utensilios no incluidos"
    ],
    "availability": "La primera foto es del proveedor sin publicidad de KAY-IMPORTS; las imágenes adicionales son recreaciones de referencia. Confirmamos diámetro, material, compatibilidad, variante y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/sarten-coreano-121419/"
  },
  {
    "id": "fundas-ropa-156292",
    "dropiId": 156292,
    "orderCode": "NA-0OF8945",
    "name": "Fundas para ropa 60 × 120 cm · 10 unidades",
    "category": "Organización del hogar",
    "price": 27,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-156292-clean-1.jpg",
      "img/dropi-oct/dropi-156292-clean-2.jpg",
      "img/dropi-oct/dropi-156292-clean-3.jpg"
    ],
    "description": "Cubre prendas colgadas y mantén el clóset visualmente ordenado con fundas translúcidas.",
    "features": [
      "Paquete de 10 fundas",
      "Medida anunciada: 60 × 120 cm",
      "Cierre frontal",
      "Ropa y perchas no incluidas"
    ],
    "availability": "Confirmamos existencias antes del pedido. Fotos del proveedor; comprueba las medidas de tus prendas.",
    "url": "https://novaandes.ec/productos/fundas-ropa-156292/"
  },
  {
    "id": "pinzas-recipientes-134253",
    "dropiId": 134253,
    "orderCode": "NA-1YA0141",
    "name": "Pinzas para sujetar recipientes · 3 unidades",
    "category": "Cocina",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/pinzas-134253.jpg"
    ],
    "description": "Sujeta el borde de recipientes compatibles con unas pinzas de cocina de palanca.",
    "features": [
      "Paquete de 3 pinzas",
      "Mecanismo de agarre por presión",
      "Recipientes no incluidos"
    ],
    "availability": "Confirmamos color, apertura y carga admisible antes del pedido. Comprueba el agarre antes de levantar; no sustituyen toda protección contra quemaduras. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/pinzas-recipientes-134253/"
  },
  {
    "id": "bolsa-almuerzo-179779",
    "dropiId": 179779,
    "orderCode": "NA-1FS1WED",
    "name": "Bolsa para almuerzo de doble compartimento · negra",
    "category": "Organización personal",
    "price": 25,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/lonchera-179779.jpg"
    ],
    "description": "Separa recipientes y snacks en dos compartimentos con cierre para llevar tu almuerzo.",
    "features": [
      "1 bolsa negra, modelo TA70",
      "Dos compartimentos principales y bolsillo frontal",
      "Asas y correa para hombro",
      "Medidas en foto del proveedor: 25 × 17 × 27 cm"
    ],
    "availability": "Confirmamos existencias de la variante negra antes del pedido. Alimentos y recipientes no incluidos. No se garantiza una duración de conservación térmica. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/bolsa-almuerzo-179779/"
  },
  {
    "id": "estante-4-niveles-186057",
    "dropiId": 186057,
    "orderCode": "NA-1074XK9",
    "name": "Carrito organizador de 4 niveles en tonos pastel",
    "category": "Organización del hogar",
    "price": 32,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/estante-186057.jpg"
    ],
    "description": "Organiza libros, útiles y accesorios en cuatro canastas de colores.",
    "features": [
      "1 estante móvil de 4 niveles",
      "Canastas en tonos pastel con detalles decorativos",
      "Ruedas para moverlo",
      "Objetos de las fotos no incluidos"
    ],
    "availability": "Confirmamos medidas, montaje y carga máxima antes del pedido. No es un juguete ni una estructura para trepar. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/estante-4-niveles-186057/"
  },
  {
    "id": "soporte-silicona-155281",
    "dropiId": 155281,
    "orderCode": "NA-0DTA817",
    "name": "Soporte flexible de silicona para celular",
    "category": "Accesorios de tecnología",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/silicona-155281.png"
    ],
    "description": "Apoya tu celular en una superficie plana con un soporte flexible y compacto.",
    "features": [
      "1 soporte de silicona",
      "Formato ligero y ajustable",
      "Celulares y tabletas de las fotos no incluidos"
    ],
    "availability": "Confirmamos medidas, color y compatibilidad con tu dispositivo antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/soporte-silicona-155281/"
  },
  {
    "id": "recipiente-4-divisiones-179223",
    "dropiId": 179223,
    "orderCode": "NA-01Z2P0L",
    "name": "Recipiente con 4 compartimentos 24 × 15 × 7 cm",
    "category": "Cocina",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/recipiente-179223.jpg"
    ],
    "description": "Separa distintos ingredientes o snacks en un recipiente rectangular con divisiones.",
    "features": [
      "1 recipiente exterior y 4 compartimentos interiores",
      "Medidas: 24 × 15 × 7 cm, según proveedor",
      "Diseño transparente con tapa",
      "Alimentos no incluidos"
    ],
    "availability": "Confirmamos existencias y cuidados de uso antes del pedido. No se anuncia como apto para microondas, horno o lavavajillas sin confirmación. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/recipiente-4-divisiones-179223/"
  },
  {
    "id": "soporte-botellon-135937",
    "dropiId": 135937,
    "orderCode": "NA-1HUEQ1Y",
    "name": "Soporte metálico para botellón de agua",
    "category": "Cocina",
    "price": 23,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/botellon-135937.jpg"
    ],
    "description": "Apoya el botellón en posición inclinada para servir agua sobre una superficie adecuada.",
    "features": [
      "1 soporte metálico",
      "Diseño inclinado",
      "Botellón, agua y utensilios de las fotos no incluidos"
    ],
    "availability": "Confirmamos medidas, peso admisible, compatibilidad del botellón y si incluye grifo antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/soporte-botellon-135937/"
  },
  {
    "id": "cajones-refrigerador-144342",
    "dropiId": 144342,
    "orderCode": "NA-03WWOH2",
    "name": "Organizadores transparentes para refrigerador · 3 piezas",
    "category": "Cocina",
    "price": 28,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cajones-144342.jpg"
    ],
    "description": "Agrupa alimentos y envases en cajones transparentes que puedes extraer por sus asas.",
    "features": [
      "Pack de 3 organizadores",
      "Diseño rectangular transparente con asas",
      "Alimentos, bebidas y otros recipientes no incluidos"
    ],
    "availability": "Confirmamos medidas de cada pieza y existencias antes del pedido para comprobar que caben en tu refrigerador. No se promete uso en horno o microondas. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/cajones-refrigerador-144342/"
  },
  {
    "id": "dispensador-cepillos-159133",
    "dropiId": 159133,
    "orderCode": "NA-11G5KB8",
    "name": "Dispensador de pasta y portacepillos",
    "category": "Organización del hogar",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cepillos-159133.jpg"
    ],
    "description": "Organiza los cepillos y el tubo de pasta sobre la pared del baño.",
    "features": [
      "1 dispensador por presión y 1 portacepillos",
      "Espacio para 5 cepillos, según proveedor",
      "Fijación adhesiva para superficies compatibles",
      "Pasta dental y cepillos no incluidos"
    ],
    "availability": "Confirmamos color, medidas, adhesivo y compatibilidad con el tubo de pasta antes del pedido. No se promete esterilización ni efecto antibacteriano. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/dispensador-cepillos-159133/"
  },
  {
    "id": "moldes-corazon-17706",
    "dropiId": 17706,
    "orderCode": "NA-0II6UY8",
    "name": "Moldes desmontables de corazón · 6 piezas",
    "category": "Cocina",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/moldes-17706.png"
    ],
    "description": "Prepara pasteles con forma de corazón usando moldes de distintos tamaños.",
    "features": [
      "Juego de 6 moldes con forma de corazón",
      "Diseño desmontable",
      "Acabado negro, según proveedor"
    ],
    "availability": "Confirmamos medidas de cada molde, material y temperatura máxima de uso antes del pedido. Utensilios y alimentos de las fotos no incluidos. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/moldes-corazon-17706/"
  },
  {
    "id": "elevador-colchon-146193",
    "dropiId": 146193,
    "orderCode": "NA-1M0IPCH",
    "name": "Cuña elevadora de colchón",
    "category": "Hogar y herramientas",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/elevador-146193.jpg"
    ],
    "description": "Ayuda a mantener levantado un borde del colchón mientras acomodas la sábana.",
    "features": [
      "1 cuña con asa integrada",
      "Diseño de plástico para tareas domésticas",
      "Colchón y ropa de cama no incluidos"
    ],
    "availability": "Confirmamos medidas, color y compatibilidad antes del pedido. No se prometen efectos sobre dolores o lesiones; utiliza la herramienta de acuerdo con su capacidad. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/elevador-colchon-146193/"
  },
  {
    "id": "ablandador-carne-177071",
    "dropiId": 177071,
    "orderCode": "NA-0X1TXLN",
    "name": "Ablandador manual de carne",
    "category": "Cocina",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/ablandador-177071.jpg"
    ],
    "description": "Prepara cortes de carne con una herramienta manual de presión.",
    "features": [
      "1 ablandador manual",
      "Puntas de acero inoxidable, según proveedor",
      "No necesita electricidad",
      "Alimentos no incluidos"
    ],
    "availability": "Confirmamos medidas y existencias antes del pedido. Puntas afiladas: manipular con cuidado y mantener fuera del alcance de niños. Limpiar antes y después del uso. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/ablandador-carne-177071/"
  },
  {
    "id": "rama-hojas-130485",
    "dropiId": 130485,
    "orderCode": "NA-1KKNMRQ",
    "name": "Rama decorativa de hojas artificiales",
    "category": "Iluminación y decoración",
    "price": 23,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/hojas-130485.jpg"
    ],
    "description": "Añade un detalle verde a una repisa, marco o rincón de tu hogar sin usar plantas naturales.",
    "features": [
      "1 rama decorativa de hojas artificiales",
      "Tonos verdes",
      "Adornos y elementos de montaje no incluidos"
    ],
    "availability": "Confirmamos longitud, modelo y existencias antes del pedido. No se garantiza resistencia UV o uso permanente a la intemperie. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/rama-hojas-130485/"
  },
  {
    "id": "proyector-estrellas-120580",
    "dropiId": 120580,
    "orderCode": "NA-1VD5NIN",
    "name": "Lámpara proyectora de estrellas",
    "category": "Iluminación y decoración",
    "price": 23,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/proyector-120580.jpg"
    ],
    "description": "Decora paredes y techo con puntos de luz en forma de estrellas y luna.",
    "features": [
      "1 lámpara decorativa con rotación y luces de colores",
      "Medidas indicadas: 12 × 12 × 13,5 cm",
      "Alimentación USB 5 V o 3 pilas AA; pilas no incluidas",
      "Cable USB incluido, según proveedor"
    ],
    "availability": "Confirmamos color y existencias antes del pedido. Es una lámpara decorativa, no un tratamiento para el sueño. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/proyector-estrellas-120580/"
  },
  {
    "id": "huevera-4-niveles-187741",
    "dropiId": 187741,
    "orderCode": "NA-1I14EOC",
    "name": "Organizador de huevos de 4 niveles",
    "category": "Cocina",
    "price": 20,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/huevera-187741.png"
    ],
    "description": "Organiza los huevos en niveles y retíralos desde la salida inferior.",
    "features": [
      "1 organizador de 4 niveles",
      "Diseño con recorrido inclinado",
      "Huevos no incluidos"
    ],
    "availability": "Confirmamos dimensiones, capacidad y color antes del pedido para comprobar que cabe en tu refrigerador. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/huevera-4-niveles-187741/"
  },
  {
    "id": "cesto-retractil-166976",
    "dropiId": 166976,
    "orderCode": "NA-0NVNKF6",
    "name": "Cesto de basura retráctil para colgar",
    "category": "Limpieza",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cesto-166976.webp"
    ],
    "description": "Coloca un pequeño cesto al alcance de la mano en una puerta de mueble compatible.",
    "features": [
      "1 cesto retráctil de plástico",
      "Diseño para colgar sin tornillos, según proveedor",
      "Bolsas de basura no incluidas"
    ],
    "availability": "Confirmamos medidas, capacidad, color y compatibilidad con la puerta antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/cesto-retractil-166976/"
  },
  {
    "id": "base-movible-121198",
    "dropiId": 121198,
    "orderCode": "NA-1BNI0CY",
    "name": "Base ajustable con ruedas para electrodomésticos",
    "category": "Hogar y herramientas",
    "price": 29,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/base-121198.jpg"
    ],
    "description": "Una base de ancho ajustable para apoyar y desplazar electrodomésticos compatibles.",
    "features": [
      "1 base para armar",
      "Estructura ajustable con ruedas",
      "Electrodoméstico no incluido"
    ],
    "availability": "Antes del pedido verificamos rango de medidas, bloqueo de ruedas y carga admisible para tu aparato. No se promete compatibilidad universal. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/base-movible-121198/"
  },
  {
    "id": "destornillador-8-en-1-120449",
    "dropiId": 120449,
    "orderCode": "NA-051TGWL",
    "name": "Destornillador portátil 8 en 1",
    "category": "Hogar y herramientas",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/destornillador-120449.jpg"
    ],
    "description": "Lleva varias puntas en una herramienta compacta para ajustes y reparaciones domésticas sencillas.",
    "features": [
      "1 destornillador multifunción 8 en 1",
      "Formato portátil con diferentes puntas",
      "Para tornillos compatibles con las puntas incluidas"
    ],
    "availability": "Confirmamos tipos y medidas de puntas antes del pedido. No se anuncia como herramienta aislada para electricidad. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/destornillador-8-en-1-120449/"
  },
  {
    "id": "soportes-antivibracion-79316",
    "dropiId": 79316,
    "orderCode": "NA-15NMSBJ",
    "name": "Soportes para lavadora · 4 piezas",
    "category": "Hogar y herramientas",
    "price": 19,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/antivibracion-79316.jpg"
    ],
    "description": "Un juego de apoyos para colocar bajo las patas de electrodomésticos compatibles.",
    "features": [
      "Juego de 4 soportes",
      "Materiales de plástico y goma, según proveedor",
      "No incluye electrodomésticos"
    ],
    "availability": "El proveedor despacha modelos variados: confirmamos modelo, medidas y carga admisible antes de aceptar el pedido. No sustituye la nivelación correcta del aparato. Foto referencial del proveedor.",
    "url": "https://novaandes.ec/productos/soportes-antivibracion-79316/"
  },
  {
    "id": "organizadores-interior-105395",
    "dropiId": 105395,
    "orderCode": "NA-0XTBU1S",
    "name": "Set organizador para ropa interior",
    "category": "Organización del hogar",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/interior-105395.jpg"
    ],
    "description": "Separa prendas pequeñas y accesorios dentro del cajón para encontrarlos con facilidad.",
    "features": [
      "Set de organizadores con compartimentos",
      "Diseño de malla y formato plegable",
      "Prendas de la foto no incluidas"
    ],
    "availability": "Confirmamos cantidad de piezas, medidas, color y existencias del set antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/organizadores-interior-105395/"
  },
  {
    "id": "trapeador-spray-185010",
    "dropiId": 185010,
    "orderCode": "NA-0AYAZ31",
    "name": "Trapeador con rociador y cabezal de 40 cm",
    "category": "Limpieza",
    "price": 25,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/trapeador-185010.webp"
    ],
    "description": "Rocía el agua desde el mango y pasa el cabezal plano para la limpieza cotidiana del piso.",
    "features": [
      "1 trapeador con depósito y rociador integrado",
      "Cabezal de 40 cm y almohadilla de microfibra, según proveedor",
      "Almohadilla lavable y reutilizable"
    ],
    "availability": "Confirmamos cantidad de almohadillas, color y existencias antes del pedido. Usa líquidos compatibles con el aparato y con tu piso. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/trapeador-spray-185010/"
  },
  {
    "id": "tabla-acero-179773",
    "dropiId": 179773,
    "orderCode": "NA-1P7P5XJ",
    "name": "Tabla de picar de acero inoxidable 20 × 30 cm",
    "category": "Cocina",
    "price": 27,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/tabla-179773.png"
    ],
    "description": "Prepara ingredientes sobre una tabla de superficie metálica con abertura para colgar.",
    "features": [
      "1 tabla de picar",
      "Medidas: 20 × 30 cm, según proveedor",
      "Acero inoxidable con orificio de agarre"
    ],
    "availability": "Confirmamos existencias antes del pedido. Lava y seca después de cada uso; no sustituye las prácticas de higiene y separación de alimentos. No se promete efecto antibacteriano. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/tabla-acero-179773/"
  },
  {
    "id": "soporte-cuello-127888",
    "dropiId": 127888,
    "orderCode": "NA-1LEE3X1",
    "name": "Soporte flexible de cuello para celular",
    "category": "Accesorios de tecnología",
    "price": 27,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/soporte-cuello-127888.png"
    ],
    "description": "Mantén el celular apoyado mientras ves contenido o realizas una videollamada en reposo.",
    "features": [
      "1 soporte flexible con cabezal giratorio",
      "Zona de contacto acolchada",
      "Para celulares de 4 a 7 pulgadas, según proveedor",
      "Celular no incluido"
    ],
    "availability": "Confirmamos ajuste al tamaño y peso de tu teléfono antes del pedido. No usar al conducir ni mientras caminas. No se prometen beneficios médicos. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/soporte-cuello-127888/"
  },
  {
    "id": "armario-bano-142391",
    "dropiId": 142391,
    "orderCode": "NA-1V9A8EI",
    "name": "Armario de baño con estantes y dos puertas",
    "category": "Organización del hogar",
    "price": 41,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/armario-bano-142391.jpg"
    ],
    "description": "Ordena toallas y artículos de aseo en estantes abiertos y un compartimento inferior con puertas.",
    "features": [
      "1 organizador de baño",
      "Medidas en la imagen del proveedor: 40 × 25 × 90 cm",
      "Compartimentos abiertos y dos puertas inferiores",
      "Toallas, cestas y productos de aseo no incluidos"
    ],
    "availability": "Confirmamos medidas, material, montaje, existencias y cobertura antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/armario-bano-142391/"
  },
  {
    "id": "humidificador-jarron-112438",
    "dropiId": 112438,
    "orderCode": "NA-02T9OFU",
    "name": "Humidificador decorativo tipo jarrón",
    "category": "Iluminación y decoración",
    "price": 25,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/humidificador-112438.jpg"
    ],
    "description": "Un accesorio de mesa con forma de jarrón e iluminación de colores para tu espacio.",
    "features": [
      "1 humidificador de diseño tipo jarrón",
      "Iluminación RGB, según ficha del proveedor",
      "Diseño decorativo compacto"
    ],
    "availability": "Confirmamos capacidad, alimentación y accesorios incluidos antes del pedido. No se prometen efectos sobre la salud o el sueño. Sigue las instrucciones de limpieza del fabricante. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/humidificador-jarron-112438/"
  },
  {
    "id": "condimentos-172007",
    "dropiId": 172007,
    "orderCode": "NA-16C6M76",
    "name": "Organizador de condimentos de 4 divisiones",
    "category": "Cocina",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/condimentos-172007.png"
    ],
    "description": "Separa tus condimentos de uso diario y tenlos a mano al cocinar.",
    "features": [
      "1 organizador con 4 compartimentos y tapa",
      "Incluye 4 cucharas, según ficha del proveedor",
      "Los colores de la foto son ejemplos; no es un paquete de dos"
    ],
    "availability": "Confirmamos color, medidas y existencias antes del pedido. Condimentos no incluidos. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/condimentos-172007/"
  },
  {
    "id": "soporte-cocina-139871",
    "dropiId": 139871,
    "orderCode": "NA-0TNK0Y5",
    "name": "Soporte organizador para utensilios de cocina",
    "category": "Cocina",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/soporte-cocina-139871.jpg"
    ],
    "description": "Organiza tus utensilios sobre un soporte de pared y libera espacio en el mesón.",
    "features": [
      "1 soporte con ranuras y ganchos para utensilios",
      "Utensilios, cuchillos y paños de la foto no incluidos",
      "Acabado metálico, según ficha del proveedor"
    ],
    "availability": "Confirmamos medidas, sistema de fijación, accesorios de montaje y existencias antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/soporte-cocina-139871/"
  },
  {
    "id": "sacacorchos-estuche-103002",
    "dropiId": 103002,
    "orderCode": "NA-1K5TID7",
    "name": "Set sacacorchos con estuche",
    "category": "Cocina",
    "price": 25,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/sacacorchos-103002.jpg"
    ],
    "description": "Guarda tus accesorios para abrir y servir botellas en un estuche compacto con forma de botella.",
    "features": [
      "1 sacacorchos de camarero",
      "1 collar y 1 vertidor",
      "Estuche incluido",
      "No incluye bebidas ni copas"
    ],
    "availability": "Confirmamos existencias y color antes del pedido. Es un juego de accesorios, no una bebida alcohólica. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/sacacorchos-estuche-103002/"
  },
  {
    "id": "organizador-bano-175594",
    "dropiId": 175594,
    "orderCode": "NA-16AL0XM",
    "name": "Mueble organizador estrecho para baño",
    "category": "Organización del hogar",
    "price": 33,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/bano-175594.jpg"
    ],
    "description": "Aprovecha un rincón del baño con compartimentos abiertos y un espacio inferior con puerta.",
    "features": [
      "1 organizador de suelo",
      "Perfil estrecho para espacios pequeños",
      "Artículos de aseo, plantas y toallas no incluidos"
    ],
    "availability": "Confirma las medidas de tu espacio. Verificamos dimensiones, material, montaje, existencias y cobertura antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/organizador-bano-175594/"
  },
  {
    "id": "manguera-expandible-98312",
    "dropiId": 98312,
    "orderCode": "NA-0JJWP5Q",
    "name": "Manguera expandible de 15 metros",
    "category": "Jardín",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/manguera-98312.jpg"
    ],
    "description": "Riega las plantas o realiza tareas de limpieza exterior con una manguera de formato expandible.",
    "features": [
      "1 manguera con boquilla de riego",
      "Longitud anunciada: 15 m expandida",
      "Boquilla con diferentes patrones de salida de agua"
    ],
    "availability": "La expansión depende de la presión del agua. Confirmamos conexión, color, contenido y existencias antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/manguera-expandible-98312/"
  },
  {
    "id": "estante-cocina-130481",
    "dropiId": 130481,
    "orderCode": "NA-1J1AWC3",
    "name": "Estante de cocina con gabinete superior",
    "category": "Organización del hogar",
    "price": 58,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/estante-130481.jpg"
    ],
    "description": "Reúne utensilios y accesorios de cocina en un mueble de varios niveles.",
    "features": [
      "1 estante organizador",
      "Gabinete superior con puerta translúcida",
      "Estantes abiertos y canastas laterales",
      "Electrodomésticos, vajilla y alimentos no incluidos"
    ],
    "availability": "Antes del pedido confirmamos medidas completas, material, montaje, carga máxima y cobertura de envío para este mueble. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/estante-cocina-130481/"
  },
  {
    "id": "libreta-ahorro-185925",
    "dropiId": 185925,
    "orderCode": "NA-0INK1GN",
    "name": "Carpeta de ahorro con 100 sobres",
    "category": "Organización personal",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/libreta-185925.webp"
    ],
    "description": "Separa tu efectivo y registra tus avances en una carpeta con sobres transparentes.",
    "features": [
      "1 carpeta con 100 sobres para organizar efectivo",
      "Sistema de anillas",
      "Incluye tabla de seguimiento, según ficha del proveedor",
      "Dinero no incluido; no es un producto financiero"
    ],
    "availability": "Confirmamos color y existencias antes del pedido. El resultado del ahorro depende de tus aportes, no de la carpeta. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/libreta-ahorro-185925/"
  },
  {
    "id": "perchero-ropa-zapatos-124933",
    "dropiId": 124933,
    "orderCode": "NA-0LN7MTQ",
    "name": "Perchero organizador para ropa y zapatos",
    "category": "Organización del hogar",
    "price": 33,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/perchero-124933.jpg"
    ],
    "description": "Organiza prendas colgadas, ropa doblada y zapatos en una estructura abierta.",
    "features": [
      "1 organizador para armar",
      "Barras para colgar prendas",
      "Espacios de almacenamiento y cajones de tela, según ficha del proveedor",
      "Ropa, perchas, zapatos y bolsos no incluidos"
    ],
    "availability": "Confirmamos dimensiones, carga máxima, piezas incluidas, montaje y cobertura antes del pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/perchero-ropa-zapatos-124933/"
  },
  {
    "id": "contenedor-arroz-104653",
    "dropiId": 104653,
    "orderCode": "NA-1RK0H4B",
    "name": "Contenedor rectangular para arroz",
    "category": "Cocina",
    "price": 33,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/arroz-104653.jpg"
    ],
    "description": "Mantén el arroz organizado en un recipiente rectangular con tapa.",
    "features": [
      "1 contenedor rectangular",
      "Diseño con tapa de cierre",
      "Arroz y otros alimentos de la foto no incluidos"
    ],
    "availability": "Confirmamos capacidad, medidas, material, color y existencias antes del pedido. No se anuncia un cierre hermético certificado. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/contenedor-arroz-104653/"
  },
  {
    "id": "aspersor-circular-123285",
    "dropiId": 123285,
    "orderCode": "NA-0XROT0O",
    "name": "Aspersor circular para jardín",
    "category": "Jardín",
    "price": 19,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/aspersor-123285.jpg"
    ],
    "description": "Distribuye el riego de tu jardín con un aspersor giratorio que se conecta a la manguera.",
    "features": [
      "1 aspersor circular; manguera no incluida",
      "Rotación de 360° impulsada por el agua",
      "Boquillas ajustables, según ficha del proveedor",
      "Cuerpo de plástico ABS"
    ],
    "availability": "Confirmamos existencias y conexión con tu manguera antes del pedido. El alcance depende de la presión del agua; no se garantiza una superficie de cobertura. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/aspersor-circular-123285/"
  },
  {
    "id": "cosmetiquera-espejo-led-136321",
    "dropiId": 136321,
    "orderCode": "NA-071XQQB",
    "name": "Cosmetiquera con espejo y luz LED",
    "category": "Organización personal",
    "price": 29,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cosmetiquera-136321.jpg"
    ],
    "description": "Guarda tus accesorios de maquillaje y utiliza el espejo con iluminación LED al prepararte.",
    "features": [
      "1 cosmetiquera con espejo integrado",
      "Iluminación LED, según ficha del proveedor",
      "Formato compacto para organizar accesorios",
      "Maquillaje y elementos decorativos de la foto no incluidos"
    ],
    "availability": "Confirmamos color, medidas, alimentación de la luz y existencias antes de confirmar tu pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/cosmetiquera-espejo-led-136321/"
  },
  {
    "id": "fundas-empaque-100-98571",
    "dropiId": 98571,
    "orderCode": "NA-1NLR87I",
    "name": "Fundas de empaque 15 × 25 cm · 100 unidades",
    "category": "Organización del hogar",
    "price": 33,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/fundas-98571.jpg"
    ],
    "description": "Organiza y presenta artículos pequeños con un paquete de 100 fundas de empaque.",
    "features": [
      "Paquete de 100 fundas",
      "Medida indicada por el proveedor: 15 × 25 cm",
      "Para organizar y empacar artículos pequeños",
      "Contenido de las fotos y selladora no incluidos"
    ],
    "availability": "Confirmamos material, tipo de cierre y compatibilidad con tu uso antes del pedido. No se garantiza compatibilidad con máquinas de vacío ni uso alimentario sin confirmación adicional. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/fundas-empaque-100-98571/"
  },
  {
    "id": "cortina-led-multicolor-187639",
    "dropiId": 187639,
    "orderCode": "NA-1OEO1N7",
    "name": "Cortina de luces LED multicolor 3 × 3 m",
    "category": "Iluminación y decoración",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cortina-187639.jpg"
    ],
    "description": "Añade un fondo de luces de colores a una pared, ventana o rincón de tu casa.",
    "features": [
      "1 cortina de luces LED multicolor",
      "Medidas indicadas por el proveedor: 3 × 3 m",
      "Tiras verticales para decoración de interiores",
      "Cortinas de tela, muebles y otros adornos no incluidos"
    ],
    "availability": "Confirmamos alimentación eléctrica, accesorios incluidos y existencias antes del pedido. No se anuncia como impermeable ni apta para exteriores. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/cortina-led-multicolor-187639/"
  },
  {
    "id": "lupa-led-82759",
    "dropiId": 82759,
    "orderCode": "NA-1XYWVY9",
    "name": "Lupa de mano con luz LED",
    "category": "Hogar y herramientas",
    "price": 23,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/lupa-82759.jpg"
    ],
    "description": "Observa letras y pequeños detalles con una lupa de mano con iluminación integrada.",
    "features": [
      "1 lupa de mano con luz LED",
      "Mango para sujetarla y botón de encendido",
      "Para lectura, manualidades e inspección de objetos",
      "Otros objetos mostrados en la foto no incluidos"
    ],
    "availability": "Confirmamos factor de aumento, alimentación, medidas y existencias antes del pedido. No es un dispositivo médico. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/lupa-led-82759/"
  },
  {
    "id": "organizador-closet-viaje",
    "dropiId": 56297,
    "orderCode": "NA-0EP19R0",
    "name": "Organizador plegable de clóset y viaje",
    "category": "Organización del hogar",
    "price": 28,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/closet-56297-1.jpg",
      "img/closet-56297-2.jpg"
    ],
    "description": "Organiza tu ropa por compartimentos y cuelga el organizador al llegar. Un formato plegable para el clóset o la maleta.",
    "features": [
      "1 organizador; ropa y accesorios de las fotos no incluidos",
      "Tres espacios para ropa y compartimento inferior con cremallera",
      "Lona y poliéster, según ficha del proveedor",
      "Medidas desplegado: 40 × 25 × 54 cm; altura total con ganchos: 67 cm",
      "Plegado: 40 × 25 × 3,5 cm; color negro"
    ],
    "availability": "Confirmamos existencias antes del despacho. Comprueba las medidas de tu maleta y el espacio para colgarlo. Fotos del proveedor.",
    "url": "https://novaandes.ec/productos/organizador-closet-viaje/"
  },
  {
    "id": "organizador-40-bolsillos",
    "dropiId": 185433,
    "orderCode": "NA-0Y4ZD1Q",
    "name": "Organizador colgante de 40 bolsillos",
    "category": "Organización del hogar",
    "price": 26,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/bolsillos-185433-1.jpg",
      "img/bolsillos-185433-2.jpg"
    ],
    "description": "Aprovecha el espacio vertical y mantén tus accesorios a la vista con un organizador de tela para colgar.",
    "features": [
      "Precio por 1 organizador de 40 bolsillos",
      "Compartimentos individuales para accesorios y artículos pequeños",
      "Diseñado para colgar en puerta o clóset",
      "Calzado, juguetes y demás objetos de las fotos no incluidos"
    ],
    "availability": "Confirmamos medidas, color, compatibilidad con tu puerta y existencias por WhatsApp antes de confirmar el pedido. No se especifica carga máxima. Fotos del proveedor.",
    "url": "https://novaandes.ec/productos/organizador-40-bolsillos/"
  },
  {
    "id": "organizador-huevos-nevera",
    "dropiId": 185354,
    "orderCode": "NA-1FNKMR0",
    "name": "Caja organizadora de huevos",
    "category": "Cocina",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/huevos-185354-1.jpg",
      "img/huevos-185354-2.jpg"
    ],
    "description": "Mantén los huevos ordenados en el refrigerador con una caja con tapa y espacios individuales.",
    "features": [
      "Precio por 1 caja; no es un juego de varias cajas",
      "Diseño con tapa y cavidades individuales",
      "Apilable, según descripción del proveedor",
      "Huevos y otros elementos decorativos no incluidos"
    ],
    "availability": "Confirmamos color, medidas, capacidad y existencias por WhatsApp antes de confirmar tu pedido. Las fotos muestran ejemplos de uso y varios colores; no garantizan un color específico.",
    "url": "https://novaandes.ec/productos/organizador-huevos-nevera/"
  },
  {
    "id": "karaoke",
    "dropiId": null,
    "orderCode": "NA-1R50V31",
    "name": "Mini Máquina de Karaoke",
    "category": "Entretenimiento",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/k1.webp",
      "img/k2.webp",
      "img/k3.webp",
      "img/k4.webp"
    ],
    "description": "Luces de colores, micrófono incluido y formato compacto para acompañar tus reuniones en casa.",
    "features": [
      "1 máquina de karaoke con micrófono",
      "Luces de colores",
      "Formato compacto con correa para llevar"
    ],
    "availability": "Confirmamos disponibilidad antes de despachar.",
    "url": "https://novaandes.ec/productos/karaoke/"
  },
  {
    "id": "linterna-led-6-en-1",
    "dropiId": 1,
    "orderCode": "NA-1JVT20T",
    "name": "Linterna LED 6 en 1",
    "category": "Hogar y herramientas",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/linterna-179993-2.png",
      "img/linterna-179993-1.png"
    ],
    "description": "Una luz a mano para tareas en casa y salidas de camping. Iluminación frontal y lateral en un formato fácil de llevar.",
    "features": [
      "Luz frontal y panel lateral",
      "Batería recargable por USB, según ficha del proveedor",
      "Varios modos de iluminación",
      "Base plana para apoyarla sobre una superficie"
    ],
    "availability": "Confirmamos existencias y cobertura antes del despacho. Fotos del proveedor; autonomía y alcance no especificados.",
    "url": "https://novaandes.ec/productos/linterna-led-6-en-1/"
  },
  {
    "id": "calculadora-cientifica-152547",
    "dropiId": 152547,
    "name": "Calculadora científica avanzada",
    "category": "Oficina y estudio",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/calculadora-152547-1.jpg"
    ],
    "description": "Resuelve operaciones escolares y de oficina con una calculadora científica de formato portátil.",
    "features": [
      "1 calculadora científica",
      "Pantalla y teclado multifunción",
      "Panel solar y batería sujetos a confirmación",
      "Funciones exactas sujetas al modelo disponible"
    ],
    "availability": "Foto del proveedor del producto. Confirmamos modelo, funciones, alimentación, accesorios y existencias actuales antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/calculadora-cientifica-152547/"
  },
  {
    "id": "camara-dvr-auto-185350",
    "dropiId": 185350,
    "name": "Cámara DVR para automóvil",
    "category": "Auto y viaje",
    "price": 39,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/camara-dvr-185350-1.jpg",
      "img/camara-dvr-185350-2.webp"
    ],
    "description": "Registra el recorrido desde el parabrisas con una cámara compacta para vehículo.",
    "features": [
      "1 cámara DVR",
      "Soporte de ventosa",
      "Cable de alimentación para vehículo",
      "Memoria y resolución sujetas a confirmación"
    ],
    "availability": "Fotos del proveedor del producto. Confirmamos resolución, ángulo, tarjeta compatible, accesorios y existencias antes del pedido. Su uso debe respetar la normativa local de privacidad y tránsito.",
    "url": "https://novaandes.ec/productos/camara-dvr-auto-185350/"
  },
  {
    "id": "cable-usbc-base-143614",
    "dropiId": 143614,
    "name": "Cable USB-C trenzado con base organizadora",
    "category": "Accesorios de tecnología",
    "price": 20,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cable-usbc-143614-1.jpg",
      "img/cable-usbc-143614-2.jpg",
      "img/cable-usbc-143614-3.jpg",
      "img/cable-usbc-143614-4.png",
      "img/cable-usbc-143614-5.jpg"
    ],
    "description": "Mantén un cable USB-C recogido y listo para cargar dispositivos compatibles.",
    "features": [
      "1 cable USB-C a USB-C",
      "Acabado trenzado",
      "Base organizadora compacta",
      "Potencia y longitud sujetas a confirmación"
    ],
    "availability": "Fotos del proveedor del producto. La velocidad de carga depende del cargador y del dispositivo. Confirmamos longitud, potencia admitida, color y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/cable-usbc-base-143614/"
  },
  {
    "id": "cargador-auto-humidificador-179187",
    "dropiId": 179187,
    "name": "Cargador para auto con luz RGB y difusor",
    "category": "Auto y viaje",
    "price": 34,
    "currency": "USD",
    "status": "draft",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cargador-auto-179187-1.webp",
      "img/cargador-auto-179187-2.webp",
      "img/cargador-auto-179187-3.jpeg",
      "img/cargador-auto-179187-4.jpeg"
    ],
    "description": "Añade puertos de carga y una salida de neblina decorativa al tomacorriente compatible del vehículo.",
    "features": [
      "1 cargador para automóvil",
      "Dos puertos USB, según ficha analizada",
      "Aro de luz RGB",
      "Función de neblina y cable sujetos a confirmación"
    ],
    "availability": "Fotos del proveedor del producto. No se garantiza una potencia específica ni compatibilidad universal. Confirmamos voltaje, puertos, depósito, accesorios y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/cargador-auto-humidificador-179187/"
  },
  {
    "id": "freidora-aire-6l-140099",
    "dropiId": 140099,
    "name": "Freidora de aire digital de 6 litros",
    "category": "Cocina",
    "price": 59,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/freidora-140099-1.png",
      "img/freidora-140099-2.jpg",
      "img/freidora-140099-3.jpg",
      "img/freidora-140099-4.webp"
    ],
    "description": "Prepara porciones en una canasta de aire caliente de gran capacidad con control digital.",
    "features": [
      "1 freidora de aire",
      "Capacidad anunciada: 6 litros",
      "Canasta extraíble",
      "50 papeles protectores sujetos a confirmación"
    ],
    "availability": "Fotos del proveedor del producto. Confirmamos voltaje para Ecuador, potencia, capacidad, accesorios, cobertura de envío y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/freidora-aire-6l-140099/"
  },
  {
    "id": "soportes-ruedas-ajustables-158798",
    "dropiId": 158798,
    "name": "Soportes ajustables con ruedas · 4 piezas",
    "category": "Hogar y herramientas",
    "price": 22,
    "currency": "USD",
    "status": "draft",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/ruedas-158798-ref.png"
    ],
    "description": "Desplaza un mueble o electrodoméstico compatible con cuatro bases ajustables de apoyo.",
    "features": [
      "Juego de 4 soportes",
      "Largo ajustable según modelo",
      "Ruedas y superficie antideslizante",
      "Electrodoméstico no incluido"
    ],
    "availability": "Imagen de referencia recreada sin marcas de terceros. Confirmamos medidas, bloqueo, carga máxima y compatibilidad antes del pedido. No sustituye una instalación estable y nivelada.",
    "url": "https://novaandes.ec/productos/soportes-ruedas-ajustables-158798/"
  },
  {
    "id": "cocineta-gas-2-quemadores-188914",
    "dropiId": 188914,
    "name": "Cocineta a gas de 2 quemadores",
    "category": "Cocina",
    "price": 45,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cocineta-188914-1.jpg",
      "img/cocineta-188914-2.jpg",
      "img/cocineta-188914-3.jpg"
    ],
    "description": "Cocina sobre una superficie estable con dos quemadores y controles independientes.",
    "features": [
      "1 cocineta de sobremesa",
      "Dos quemadores",
      "Dos perillas de control",
      "Manguera y regulador sujetos a confirmación"
    ],
    "availability": "Fotos del proveedor del producto. Confirmamos tipo de gas, conexiones, accesorios, medidas y existencias antes del pedido. Debe instalarse y usarse en un lugar ventilado siguiendo las indicaciones del fabricante.",
    "url": "https://novaandes.ec/productos/cocineta-gas-2-quemadores-188914/"
  },
  {
    "id": "libro-interactivo-bilingue-123745",
    "dropiId": 123745,
    "name": "Libro interactivo bilingüe español–inglés",
    "category": "Oficina y estudio",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/libro-bilingue-123745-1.png",
      "img/libro-bilingue-123745-2.png",
      "img/libro-bilingue-123745-3.png"
    ],
    "description": "Explora vocabulario básico mediante ilustraciones y sonidos en un libro interactivo infantil.",
    "features": [
      "1 libro interactivo",
      "Contenido bilingüe según ficha analizada",
      "Botones o lector electrónico sujetos al modelo",
      "Alimentación y temas sujetos a confirmación"
    ],
    "availability": "Fotos del proveedor del producto. Confirmamos contenido, idioma, edad recomendada, alimentación, accesorios y existencias antes del pedido. Requiere supervisión adulta.",
    "url": "https://novaandes.ec/productos/libro-interactivo-bilingue-123745/"
  },
  {
    "id": "cargador-inalambrico-3en1-188909",
    "dropiId": 188909,
    "name": "Estación de carga inalámbrica 3 en 1",
    "category": "Accesorios de tecnología",
    "price": 34,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cargador-3en1-188909-1.jpg",
      "img/cargador-3en1-188909-2.jpg",
      "img/cargador-3en1-188909-3.jpg"
    ],
    "description": "Reúne celular, reloj y estuche de audífonos compatibles en una sola base de carga.",
    "features": [
      "1 estación de carga 3 en 1",
      "Espacios para tres dispositivos compatibles",
      "Formato vertical de escritorio",
      "Dispositivos y adaptador no incluidos salvo confirmación"
    ],
    "availability": "Fotos del proveedor del producto. La compatibilidad depende de cada dispositivo y estándar de carga. Confirmamos potencia, cable, adaptador, modelos compatibles y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/cargador-inalambrico-3en1-188909/"
  },
  {
    "id": "cuadernos-escritura-magica-85475",
    "dropiId": 85475,
    "orderCode": "NA-0D8T463",
    "name": "Cuadernos reutilizables de escritura · 4 unidades",
    "category": "Oficina y estudio",
    "price": 19,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/cuadernos-85475-ref.png"
    ],
    "description": "Practica trazos básicos con un set de cuadernos de líneas guiadas y accesorios de escritura.",
    "features": [
      "Set de 4 cuadernos",
      "Líneas o surcos de práctica",
      "1 bolígrafo y accesorios sujetos a confirmación",
      "Diseños y ejercicios pueden variar"
    ],
    "availability": "Imagen de referencia recreada sin personajes ni marcas de terceros. Confirmamos contenido, idioma, páginas, tinta, accesorios, edad recomendada y existencias antes del pedido. Requiere supervisión adulta.",
    "url": "https://novaandes.ec/productos/cuadernos-escritura-magica-85475/"
  },
  {
    "id": "camara-wifi-ip66-65031",
    "dropiId": 65031,
    "orderCode": "NA-CAM-IP66-001",
    "name": "Cámara Wi‑Fi IP66",
    "category": "Seguridad y tecnología",
    "price": 39,
    "currency": "USD",
    "status": "draft",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-65031.webp"
    ],
    "description": "Supervisa un espacio compatible desde una cámara conectada a la red Wi‑Fi.",
    "features": [
      "1 cámara Wi‑Fi",
      "Diseño anunciado como IP66 por el proveedor",
      "Aplicación, resolución y almacenamiento sujetos a confirmación",
      "Accesorios de montaje sujetos al modelo"
    ],
    "availability": "Confirmamos existencias, compatibilidad, alimentación y accesorios antes del pedido.",
    "url": "https://novaandes.ec/productos/camara-wifi-ip66-65031/"
  },
  {
    "id": "plancha-vapor-portatil-82369",
    "dropiId": 82369,
    "orderCode": "NA-1DQPGPM",
    "name": "Plancha de vapor portátil para ropa",
    "category": "Cuidado de la ropa",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-82369.jpeg"
    ],
    "description": "Alisa prendas compatibles con vapor en un formato portátil.",
    "features": [
      "1 plancha de vapor portátil",
      "Depósito integrado según ficha del proveedor",
      "Uso vertical sujeto al modelo",
      "Prendas y perchas no incluidas"
    ],
    "availability": "Confirmamos voltaje, capacidad, accesorios y existencias antes del pedido; prueba primero en una zona poco visible de la tela.",
    "url": "https://novaandes.ec/productos/plancha-vapor-portatil-82369/"
  },
  {
    "id": "bolsa-almacenamiento-179218",
    "dropiId": 179218,
    "orderCode": "NA-1GPIVI4",
    "name": "Bolsa ecológica de almacenamiento",
    "category": "Organización del hogar",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-179218.jpg"
    ],
    "description": "Guarda ropa y artículos ligeros en una bolsa reutilizable para mantener el espacio ordenado.",
    "features": [
      "1 bolsa de almacenamiento",
      "Formato reutilizable",
      "Medidas y cierre sujetos a confirmación",
      "Objetos de la foto no incluidos"
    ],
    "availability": "Confirmamos medidas, material y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/bolsa-almacenamiento-179218/"
  },
  {
    "id": "pulverizador-aceite-172732",
    "dropiId": 172732,
    "orderCode": "NA-1RRIT0R",
    "name": "Pulverizador de aceite para cocina",
    "category": "Cocina",
    "price": 20,
    "currency": "USD",
    "status": "draft",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-172732.png"
    ],
    "description": "Aplica aceite en una neblina fina sobre utensilios y alimentos compatibles.",
    "features": [
      "1 pulverizador de aceite",
      "Recipiente recargable",
      "Aceite y alimentos no incluidos",
      "Capacidad y material sujetos a confirmación"
    ],
    "availability": "Confirmamos capacidad, material, mecanismo y existencias antes del pedido; lavar antes del primer uso.",
    "url": "https://novaandes.ec/productos/pulverizador-aceite-172732/"
  },
  {
    "id": "ventilador-recargable-super-161274",
    "dropiId": 161274,
    "orderCode": "NA-1VW3CLQ",
    "name": "Ventilador recargable de mesa",
    "category": "Hogar y tecnología",
    "price": 29,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-161274.jpg"
    ],
    "description": "Mueve aire en un escritorio o mesa con un ventilador compacto y recargable.",
    "features": [
      "1 ventilador recargable",
      "Formato de mesa",
      "Velocidades, batería y cable sujetos a confirmación",
      "Cargador no incluido salvo confirmación"
    ],
    "availability": "Confirmamos autonomía, velocidades, carga, accesorios y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/ventilador-recargable-super-161274/"
  },
  {
    "id": "base-refrigerante-laptop-108627",
    "dropiId": 108627,
    "orderCode": "NA-0K7YCT7",
    "name": "Base refrigerante para laptop",
    "category": "Accesorios de tecnología",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-108627.jpg"
    ],
    "description": "Eleva una laptop compatible y favorece el flujo de aire con ventilación integrada.",
    "features": [
      "1 base refrigerante",
      "Ventilación integrada según ficha del proveedor",
      "Alimentación y niveles sujetos a confirmación",
      "Laptop no incluida"
    ],
    "availability": "Confirmamos dimensiones, compatibilidad, alimentación, ruido y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/base-refrigerante-laptop-108627/"
  },
  {
    "id": "repetidor-wifi-139834",
    "dropiId": 139834,
    "orderCode": "NA-187HBIQ",
    "name": "Repetidor amplificador de señal Wi‑Fi",
    "category": "Accesorios de tecnología",
    "price": 32,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-139834.png"
    ],
    "description": "Amplía la cobertura de una red Wi‑Fi compatible en zonas donde la señal llega débil.",
    "features": [
      "1 repetidor Wi‑Fi",
      "Instalación en tomacorriente compatible",
      "Bandas, velocidad y alcance sujetos a confirmación",
      "Router y servicio de internet no incluidos"
    ],
    "availability": "El rendimiento depende del router, la construcción y la interferencia; confirmamos estándar, bandas, voltaje y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/repetidor-wifi-139834/"
  },
  {
    "id": "mini-proyector-bolsillo-83973",
    "dropiId": 83973,
    "orderCode": "NA-1NUPJ8I",
    "name": "Mini proyector de bolsillo",
    "category": "Entretenimiento",
    "price": 49,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-83973.png"
    ],
    "description": "Proyecta contenido compatible en una pared o pantalla desde un equipo compacto.",
    "features": [
      "1 mini proyector",
      "Formato portátil",
      "Resolución, brillo y conexiones sujetos a confirmación",
      "Dispositivo fuente y pantalla no incluidos"
    ],
    "availability": "Confirmamos resolución nativa, entradas, alimentación, accesorios y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/mini-proyector-bolsillo-83973/"
  },
  {
    "id": "fuente-agua-mascotas-97230",
    "dropiId": 97230,
    "orderCode": "NA-PET-FNT-001",
    "name": "Fuente eléctrica de agua para mascotas · 2 litros",
    "category": "Mascotas",
    "price": 35,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-97230-clean.png",
      "img/fuente-mascotas-galeria-2.jpg",
      "img/fuente-mascotas-galeria-3.jpg",
      "img/fuente-mascotas-galeria-4.jpg"
    ],
    "description": "Mantén agua en circulación para una mascota con una fuente eléctrica de 2 litros.",
    "features": [
      "1 fuente eléctrica",
      "Capacidad anunciada: 2 litros",
      "Bomba y filtro sujetos a confirmación",
      "Agua y mascota no incluidas"
    ],
    "availability": "Galería ampliada con fotos del mismo diseño exterior, sin logos ni publicidad de terceros. La capacidad se confirma con la ficha del proveedor antes del pedido; también confirmamos voltaje, filtros, repuestos, limpieza y existencias.",
    "url": "https://novaandes.ec/productos/fuente-agua-mascotas-97230/"
  },
  {
    "id": "audifonos-inalambricos-m27-60739",
    "dropiId": 60739,
    "orderCode": "NA-098FU55",
    "name": "Audífonos inalámbricos M27",
    "category": "Accesorios de tecnología",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-60739.jpeg"
    ],
    "description": "Escucha audio y atiende llamadas compatibles con audífonos inalámbricos y estuche de carga.",
    "features": [
      "1 par de audífonos M27",
      "Estuche de carga",
      "Autonomía y controles sujetos a confirmación",
      "Cable y adaptador sujetos a la ficha disponible"
    ],
    "availability": "Confirmamos versión Bluetooth, autonomía, accesorios, compatibilidad y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/audifonos-inalambricos-m27-60739/"
  },
  {
    "id": "mini-camara-a9-wifi",
    "dropiId": null,
    "orderCode": "NA-CAM-A9-001",
    "name": "Mini cámara A9 con soporte",
    "category": "Seguridad y tecnología",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/mini-camara-a9-wifi-1.jpg",
      "img/mini-camara-a9-galeria-2.jpg",
      "img/mini-camara-a9-galeria-3.jpg",
      "img/mini-camara-a9-galeria-4.jpg"
    ],
    "description": "Cámara compacta A9 con soporte para supervisar un espacio compatible desde una ubicación discreta.",
    "features": [
      "1 mini cámara A9",
      "Soporte de sobremesa",
      "Conectividad Wi-Fi sujeta a compatibilidad",
      "Memoria no incluida salvo confirmación"
    ],
    "availability": "Galería ampliada únicamente con fotos de una unidad A9 y sus accesorios; se excluyeron las imágenes de paquetes de tres cámaras. Confirmamos conectividad, aplicación compatible, alimentación, accesorios incluidos y existencias antes de aceptar el pedido. Usa este producto respetando la privacidad y la normativa local.",
    "url": "https://novaandes.ec/productos/mini-camara-a9-wifi/"
  },
  {
    "id": "ropero-closet-3-cuerpos-86793",
    "dropiId": 86793,
    "orderCode": "NA-0WYA3CT",
    "name": "Ropero clóset de 3 cuerpos con forro",
    "category": "Organización del hogar",
    "price": 32,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/ropero-86793-1.jpg",
      "img/ropero-86793-2.jpg",
      "img/ropero-86793-3.jpg"
    ],
    "description": "Organiza prendas y accesorios en un ropero portátil de tres cuerpos con cubierta de tela.",
    "features": [
      "1 ropero portátil de 3 cuerpos",
      "Estructura con compartimentos",
      "Forro exterior según ficha del proveedor",
      "Ropa y accesorios no incluidos"
    ],
    "availability": "Confirmamos medidas, color, montaje, carga y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/ropero-closet-3-cuerpos-86793/"
  },
  {
    "id": "rodillera-unidad-158443",
    "dropiId": 158443,
    "orderCode": "NA-1K8IEP1",
    "name": "Rodillera ajustable · 1 unidad",
    "category": "Organización personal",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/rodillera-158443-1.png",
      "img/rodillera-158443-2.png",
      "img/rodillera-158443-3.png"
    ],
    "description": "Añade soporte ajustable a una rodilla durante actividades cotidianas compatibles.",
    "features": [
      "1 rodillera",
      "Correas ajustables según imagen del proveedor",
      "Talla, lado y material sujetos a confirmación",
      "Se vende por unidad"
    ],
    "availability": "No es un dispositivo médico ni se prometen efectos terapéuticos; confirmamos talla, lado, material y existencias antes del pedido.",
    "url": "https://novaandes.ec/productos/rodillera-unidad-158443/"
  },
{
    "id": "cocina-gas-portatil-191178",
    "dropiId": 191178,
    "orderCode": "NA-MC5HTA",
    "name": "Cocina de gas portátil para camping",
    "category": "Auto y viaje",
    "price": 39,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-191178-1.jpeg",
      "img/dropi-oct/dropi-191178-2.jpeg",
      "img/dropi-oct/dropi-191178-3.jpeg"
    ],
    "description": "Cocina compacta a gas para cocinar al aire libre: en campamentos, paseos o cuando necesitas una hornilla extra.",
    "features": [
      "1 cocina de gas portátil",
      "Llama ajustable",
      "Diseño compacto y base estable",
      "Funciona a gas (sin conexión eléctrica)",
      "Fácil de limpiar"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/cocina-gas-portatil-191178/"
  },
{
    "id": "batidor-mano-42608",
    "dropiId": 42608,
    "orderCode": "NA-VGG7Y8",
    "name": "Batidor de mano de acero inoxidable",
    "category": "Cocina",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-42608-1.jpg",
      "img/dropi-oct/dropi-42608-2.jpg",
      "img/dropi-oct/dropi-42608-3.jpg"
    ],
    "description": "Batidor manual de acero inoxidable para batir huevos, mezclar salsas y preparar emulsiones en segundos.",
    "features": [
      "1 batidor manual",
      "Acero inoxidable",
      "Mango ergonómico",
      "Formato compacto",
      "Apto para lavavajillas"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/batidor-mano-42608/"
  },
{
    "id": "limpia-vasos-presion-267",
    "dropiId": 267,
    "orderCode": "NA-CKFWVK",
    "name": "Lavavasos a presión para fregadero",
    "category": "Cocina",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-267-1.jpeg",
      "img/dropi-oct/dropi-267-2.jpeg",
      "img/dropi-oct/dropi-267-3.webp"
    ],
    "description": "Lava vasos, tazas y botellas con un chorro de agua a presión: rápido, higiénico y fácil de instalar en el fregadero.",
    "features": [
      "1 lavador de vasos a presión",
      "Limpia vasos, tazas y botellas rápidamente",
      "Instalación sencilla en el fregadero",
      "Ideal para la cocina del hogar y negocios"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/limpia-vasos-presion-267/"
  },
{
    "id": "spray-sellador-174911",
    "dropiId": 174911,
    "orderCode": "NA-BG8SYS",
    "name": "Spray sellador impermeable",
    "category": "Hogar y herramientas",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-174911-3.png",
      "img/dropi-oct/dropi-174911-2.png"
    ],
    "description": "Spray sellador de fórmula de caucho líquido que impermeabiliza y sella filtraciones en múltiples superficies.",
    "features": [
      "1 lata de spray sellador",
      "Impermeable y hermético",
      "Multi-superficie: concreto, baldosas, metal, PVC, madera y cemento",
      "Secado rápido",
      "Acabado pintable"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/spray-sellador-174911/"
  },
{
    "id": "dispensador-arroz-144708",
    "dropiId": 144708,
    "orderCode": "NA-2K3KFG",
    "name": "Dispensador de arroz con dosificador",
    "category": "Cocina",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-144708-3.png",
      "img/dropi-oct/dropi-144708-2.png"
    ],
    "description": "Dispensador con dosificador que mantiene el arroz y los granos frescos, protegidos de la humedad, el polvo y los insectos.",
    "features": [
      "1 dispensador de arroz",
      "Dosificador integrado",
      "Ventana transparente para ver el nivel",
      "Diseño compacto que ahorra espacio",
      "Plástico apto para alimentos (ABS y PP)",
      "Color enviado aleatoriamente"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/dispensador-arroz-144708/"
  },
{
    "id": "cepillo-dental-electrico-185071",
    "dropiId": 185071,
    "orderCode": "NA-BVQG2N",
    "name": "Cepillo dental eléctrico recargable",
    "category": "Organización personal",
    "price": 19,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-185071-1.jpeg",
      "img/dropi-oct/dropi-185071-2.jpeg",
      "img/dropi-oct/dropi-185071-3.jpeg"
    ],
    "description": "Cepillo dental eléctrico recargable por USB con vibración de alta frecuencia para una limpieza profunda diaria.",
    "features": [
      "1 cepillo dental eléctrico",
      "Recargable por USB",
      "Temporizador integrado",
      "Vibración de alta frecuencia",
      "Cabezal reemplazable",
      "Diseño ergonómico, ideal para hogar y viajes"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/cepillo-dental-electrico-185071/"
  },
{
    "id": "licuadora-mano-4en1-153287",
    "dropiId": 153287,
    "orderCode": "NA-859BXN",
    "name": "Licuadora de mano 4 en 1",
    "category": "Cocina",
    "price": 49,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-153287-2.png",
      "img/dropi-oct/dropi-153287-1.jpg",
      "img/dropi-oct/dropi-153287-3.png"
    ],
    "description": "Licuadora de mano 4 en 1 con motor de alta potencia, velocidad variable y turbo: licúa, pica y bate con un solo equipo.",
    "features": [
      "Motor de alta potencia con velocidad variable + turbo",
      "Cuchilla Pro-Blade de acero inoxidable (4 cuchillas)",
      "Diseño antisalpicaduras",
      "Acople rápido Easy-Click",
      "Incluye: brazo licuador, vaso picador con base antideslizante, batidor metálico, vaso medidor graduado y manual",
      "Accesorios libres de BPA"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/licuadora-mano-4en1-153287/"
  },
{
    "id": "platera-vitrina-45340",
    "dropiId": 45340,
    "orderCode": "NA-YTNCMD",
    "name": "Platera con vitrina protectora",
    "category": "Cocina",
    "price": 39,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-45340-1.webp",
      "img/dropi-oct/dropi-45340-2.webp",
      "img/dropi-oct/dropi-45340-3.png"
    ],
    "description": "Escurreplatos con vitrina protectora de acrílico que mantiene tu vajilla limpia, ordenada y libre de polvo.",
    "features": [
      "1 platera con vitrina",
      "Medidas: 80,5 cm de alto × 85,5 cm de ancho × 27,5 cm de profundidad",
      "Estructura de acero inoxidable",
      "Vitrina acrílica transparente",
      "Incluye: porta cubiertos, porta cuchillos, soporte para tablas y repisa para jabón",
      "Color negro"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/platera-vitrina-45340/"
  },
{
    "id": "taladro-2-baterias-124438",
    "dropiId": 124438,
    "orderCode": "NA-CL8A6H",
    "name": "Taladro con 2 baterías recargables",
    "category": "Hogar y herramientas",
    "price": 49,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-124438-1.webp",
      "img/dropi-oct/dropi-124438-2.jpg",
      "img/dropi-oct/dropi-124438-3.jpg"
    ],
    "description": "Taladro eléctrico de litio con 2 baterías recargables y maletín con accesorios: listo para perforar y atornillar.",
    "features": [
      "1 taladro de litio",
      "2 baterías de iones de litio",
      "1 cargador",
      "Maletín plástico con brocas, puntas y dados",
      "Embrague ajustable con múltiples posiciones de torque"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/taladro-2-baterias-124438/"
  },
{
    "id": "cepillo-giratorio-9en1-112421",
    "dropiId": 112421,
    "orderCode": "NA-GYNLYA",
    "name": "Cepillo giratorio de limpieza 9 en 1",
    "category": "Limpieza",
    "price": 29,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-112421-1.jpg",
      "img/dropi-oct/dropi-112421-2.jpg",
      "img/dropi-oct/dropi-112421-3.jpg"
    ],
    "description": "Kit de limpieza con cepillo giratorio y 9 cabezales intercambiables para azulejos, bañeras, cocinas, vidrios y esquinas.",
    "features": [
      "1 mango con cepillo giratorio",
      "9 cabezales intercambiables",
      "Para azulejos, bañeras, cocinas, juntas y vidrios",
      "Mango extensible"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/cepillo-giratorio-9en1-112421/"
  }
,
{
    "id": "dispensador-huevos-104318",
    "dropiId": 104318,
    "orderCode": "NA-Z9XQAB",
    "name": "Dispensador de huevos",
    "category": "Cocina",
    "price": 24,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-104318-1.jpg",
      "img/dropi-oct/dropi-104318-2.jpg",
      "img/dropi-oct/dropi-104318-3.webp"
    ],
    "description": "Dispensador organizador de huevos con doble cajón deslizable: ahorra espacio en el refrigerador y mantiene los huevos ordenados y siempre visibles.",
    "features": [
      "Doble cajón deslizable para huevos",
      "Ahorra espacio en el refrigerador",
      "Huevos ordenados y siempre visibles",
      "Material resistente y fácil de limpiar",
      "Ideal para cocina y organización"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/dispensador-huevos-104318/"
  },
{
    "id": "mesa-auxiliar-3-niveles-171999",
    "dropiId": 171999,
    "orderCode": "NA-GNV9EH",
    "name": "Mesa auxiliar de 3 niveles con ruedas",
    "category": "Organización del hogar",
    "price": 39,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-171999-1.jpg",
      "img/dropi-oct/dropi-171999-2.webp",
      "img/dropi-oct/dropi-171999-3.jpg"
    ],
    "description": "Mesa auxiliar de 3 niveles con ruedas: estructura metálica con repisas estilo madera, perfecta para cocina, baño o dormitorio.",
    "features": [
      "3 niveles amplios de almacenamiento",
      "Ruedas para moverla con facilidad",
      "Estructura metálica resistente",
      "Repisas estilo madera elegante",
      "Ideal para cocina, baño o dormitorio"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/mesa-auxiliar-3-niveles-171999/"
  },
{
    "id": "juego-cuchillos-6-piezas-102353",
    "dropiId": 102353,
    "orderCode": "NA-2QAUWL",
    "name": "Juego de cuchillos de 6 piezas",
    "category": "Cocina",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-102353-1.jpg",
      "img/dropi-oct/dropi-102353-2.jpg",
      "img/dropi-oct/dropi-102353-3.jpg"
    ],
    "description": "Juego de 6 piezas en colores pastel: 4 cuchillos de acero inoxidable con filo corrugado, más tijera de cocina y pelador cerámico, en caja de presentación.",
    "features": [
      "6 piezas: 4 cuchillos + tijera + pelador",
      "Hojas de acero inoxidable",
      "Filo corrugado antiadherente",
      "Mangos ergonómicos en colores pastel",
      "Caja de presentación incluida"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/juego-cuchillos-6-piezas-102353/"
  }
,
{
    "id": "termometro-cocina-33165",
    "dropiId": 33165,
    "orderCode": "NA-CD6Q3P",
    "name": "Termómetro digital de cocina",
    "category": "Cocina",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-33165-1.jpeg",
      "img/dropi-oct/dropi-33165-3.jpeg",
      "img/dropi-oct/dropi-33165-2.jpeg"
    ],
    "description": "Termómetro digital de cocina con sonda de acero inoxidable y pantalla LCD de lectura rápida: ideal para carnes, asados y repostería.",
    "features": [
      "Pantalla digital LCD de lectura rápida",
      "Sonda larga de acero inoxidable",
      "Botones °C/°F y función Hold",
      "Ideal para carnes, asados y repostería",
      "Diseño compacto fácil de guardar"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/termometro-cocina-33165/"
  },
{
    "id": "tubo-expandible-172750",
    "dropiId": 172750,
    "orderCode": "NA-EF7BYT",
    "name": "Tubo expandible multiuso",
    "category": "Organización del hogar",
    "price": 23,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-172750-1.jpeg",
      "img/dropi-oct/dropi-172750-2.jpeg",
      "img/dropi-oct/dropi-172750-3.jpg"
    ],
    "description": "Barra expandible de acero inoxidable de 140 a 260 cm: se instala por presión sin taladrar, ideal para cocina, armario, baño o cortinas.",
    "features": [
      "Ajustable de 140 a 260 cm",
      "Instalación por presión, sin taladrar",
      "Acero inoxidable antideslizante",
      "Para cocina, armario, baño o cortinas",
      "Color según disponibilidad"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/tubo-expandible-172750/"
  },
{
    "id": "platera-cocina-dos-pozos-14520",
    "dropiId": 14520,
    "orderCode": "NA-QSJ968",
    "name": "Platera de cocina de dos niveles",
    "category": "Cocina",
    "price": 34,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-14520-3.jpeg",
      "img/dropi-oct/dropi-14520-2.jpeg",
      "img/dropi-oct/dropi-14520-1.webp"
    ],
    "description": "Escurridor de acero inoxidable de dos niveles sobre el fregadero (85 × 35,5 × 49 cm): con estante para utensilios, ganchos y soporte para tabla de picar.",
    "features": [
      "Dos niveles que aprovechan el fregadero",
      "Acero inoxidable resistente",
      "Medidas: 85 × 35,5 × 49 cm",
      "Ganchos y soporte para tabla incluidos",
      "Ahorra espacio en la cocina"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/platera-cocina-dos-pozos-14520/"
  }
,
{
    "id": "porta-utensilios-giratorio-189359",
    "dropiId": 189359,
    "orderCode": "NA-6FARCN",
    "name": "Porta utensilios giratorio",
    "category": "Cocina",
    "price": 20,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-189359-1.png",
      "img/dropi-oct/dropi-189359-2.png",
      "img/dropi-oct/dropi-189359-3.png"
    ],
    "description": "Porta utensilios giratorio de acero inoxidable con 3 compartimentos (17 × 12 cm): mantiene la cocina organizada con los utensilios siempre al alcance.",
    "features": [
      "Diseño giratorio 360°",
      "3 compartimentos internos",
      "Acero inoxidable resistente",
      "Medidas: 17 cm de alto × 12 cm de diámetro",
      "Ideal para una cocina organizada"
    ],
    "availability": "Primera imagen retocada para eliminar publicidad del proveedor; el producto es el mismo. Confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/porta-utensilios-giratorio-189359/"
  },
{
    "id": "utensilios-cocina-20-piezas-137448",
    "dropiId": 137448,
    "orderCode": "NA-G3LN62",
    "name": "Set de utensilios de cocina · 20 piezas",
    "category": "Cocina",
    "price": 32,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-137448-1.png",
      "img/dropi-oct/dropi-137448-2.jpg",
      "img/dropi-oct/dropi-137448-3.jpg"
    ],
    "description": "Set de 20 piezas de cocina con mangos color menta y detalles cobre: incluye base organizadora; resistentes al calor y aptos para antiadherentes.",
    "features": [
      "20 piezas con base organizadora",
      "Mangos color menta con detalles cobre",
      "Resistentes al calor",
      "Aptos para sartenes antiadherentes",
      "Cuchillos, espátulas, cucharones y más"
    ],
    "availability": "Primera imagen retocada para eliminar publicidad del proveedor; el producto es el mismo. Confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/utensilios-cocina-20-piezas-137448/"
  },
  {
    "id": "espuma-multiusos-limpieza-139833",
    "dropiId": 139833,
    "orderCode": "NA-FF6NZ6",
    "name": "Espuma multiusos de limpieza profunda",
    "category": "Limpieza",
    "price": 21,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-139833-1.jpg",
      "img/dropi-oct/dropi-139833-2.jpg",
      "img/dropi-oct/dropi-139833-3.jpg",
      "img/dropi-oct/dropi-139833-4.jpg"
    ],
    "description": "Espuma limpiadora multiusos con cepillo integrado; elimina grasa y suciedad de cocina, auto y muebles.",
    "features": [
      "Limpieza profunda con espuma activa",
      "Cepillo integrado para fregar",
      "Para cocina, auto, tapicería y más",
      "Aroma fresco"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/espuma-multiusos-limpieza-139833/"
  },
  {
    "id": "cinta-impermeable-techo-177068",
    "dropiId": 177068,
    "orderCode": "NA-XRJV56",
    "name": "Cinta adhesiva impermeable para techo",
    "category": "Hogar y herramientas",
    "price": 33,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-177068-1.jpg",
      "img/dropi-oct/dropi-177068-2.jpg",
      "img/dropi-oct/dropi-177068-3.jpg"
    ],
    "description": "Membrana impermeabilizante para techos y terrazas; evita filtraciones de agua y humedad.",
    "features": [
      "Sella filtraciones y goteras",
      "Resistente al agua y a la intemperie",
      "Fácil aplicación sin herramientas",
      "Para techos, terrazas y canalones"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/cinta-impermeable-techo-177068/"
  },
  {
    "id": "mini-licuadora-portatil-16297",
    "dropiId": 16297,
    "orderCode": "NA-1A5QHN",
    "name": "Mini licuadora portátil recargable",
    "category": "Cocina",
    "price": 23,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-16297-1.jpg",
      "img/dropi-oct/dropi-16297-2.jpg",
      "img/dropi-oct/dropi-16297-3.jpg",
      "img/dropi-oct/dropi-16297-4.jpg",
      "img/dropi-oct/dropi-16297-5.jpg"
    ],
    "description": "Licuadora portátil recargable por USB; prepara jugos y batidos donde quieras.",
    "features": [
      "Recargable por USB",
      "Cuchillas de acero inoxidable",
      "Compacta y fácil de llevar",
      "Ideal para jugos, batidos y papillas"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/mini-licuadora-portatil-16297/"
  },
  {
    "id": "mini-plancha-vapor-123103",
    "dropiId": 123103,
    "orderCode": "NA-CWAHD6",
    "name": "Mini plancha de vapor portátil",
    "category": "Cuidado de la ropa",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-123103-1.jpg",
      "img/dropi-oct/dropi-123103-2.jpg",
      "img/dropi-oct/dropi-123103-3.jpg"
    ],
    "description": "Plancha de vapor portátil con calentamiento rápido; adiós arrugas en minutos.",
    "features": [
      "Calentamiento rápido",
      "Vapor continuo para todo tipo de tela",
      "Compacta, ideal para viajes",
      "Depósito de 50 ml"
    ],
    "availability": "Imágenes retocadas para eliminar texto publicitario del proveedor; el producto es el mismo. Confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/mini-plancha-vapor-123103/"
  },
  {
    "id": "zapatera-organizador-apilable-24151",
    "dropiId": 24151,
    "orderCode": "NA-ECZ7FQ",
    "name": "Zapatera organizador apilable transparente",
    "category": "Organización del hogar",
    "price": 39,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-24151-1.jpg",
      "img/dropi-oct/dropi-24151-2.jpg",
      "img/dropi-oct/dropi-24151-3.jpg"
    ],
    "description": "Cajas transparentes apilables para organizar zapatos, ropa y accesorios.",
    "features": [
      "Diseño apilable que ahorra espacio",
      "Puerta frontal transparente",
      "Para zapatos, ropa y gorras",
      "Fácil de armar y limpiar"
    ],
    "availability": "Imágenes retocadas para eliminar texto publicitario del proveedor; el producto es el mismo. Confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/zapatera-organizador-apilable-24151/"
  },
  {
    "id": "cuchillo-clever-2en1-120172",
    "dropiId": 120172,
    "orderCode": "NA-JLVI3O",
    "name": "Cuchillo clever 2 en 1 con tabla",
    "category": "Cocina",
    "price": 19,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-120172-1.jpg",
      "img/dropi-oct/dropi-120172-2.jpg",
      "img/dropi-oct/dropi-120172-3.jpg",
      "img/dropi-oct/dropi-120172-4.jpg"
    ],
    "description": "Tijera-cuchillo 2 en 1 con tabla de cortar integrada; corta y pica en segundos.",
    "features": [
      "Cuchillo y tijera en uno",
      "Tabla de cortar integrada",
      "Acero inoxidable",
      "Ideal para verduras, hierbas y más"
    ],
    "availability": "Imágenes retocadas para eliminar texto publicitario del proveedor; el producto es el mismo. Confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/cuchillo-clever-2en1-120172/"
  },
  {
    "id": "rodillo-quita-pelusa-76835",
    "dropiId": 76835,
    "orderCode": "NA-G5H38I",
    "name": "Rodillo quita pelusa para mascotas",
    "category": "Mascotas",
    "price": 22,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-76835-1.jpg",
      "img/dropi-oct/dropi-76835-2.jpg",
      "img/dropi-oct/dropi-76835-3.jpg"
    ],
    "description": "Rodillo grande para quitar pelo de mascotas de sofás, camas y ropa.",
    "features": [
      "Atrapa pelo de perros y gatos",
      "Para sofá, cama, mantas y ropa",
      "Mango ergonómico",
      "Reutilizable y fácil de limpiar"
    ],
    "availability": "Imágenes retocadas para eliminar texto publicitario del proveedor; el producto es el mismo. Confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/rodillo-quita-pelusa-76835/"
  },
  {
    "id": "cesta-organizadora-ropa-57651",
    "dropiId": 57651,
    "orderCode": "NA-B7MFRS",
    "name": "Cesta organizadora para ropa con ruedas",
    "category": "Organización del hogar",
    "price": 28,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-57651-1.jpg",
      "img/dropi-oct/dropi-57651-2.jpg",
      "img/dropi-oct/dropi-57651-3.jpg"
    ],
    "description": "Cesta organizadora con 4 compartimentos y ruedas; separa la ropa por color o tipo.",
    "features": [
      "4 compartimentos para clasificar",
      "Estructura con ruedas giratorias",
      "Tela resistente con asas",
      "Ideal para ropa, juguetes y más"
    ],
    "availability": "Imágenes retocadas para eliminar texto publicitario del proveedor; el producto es el mismo. Confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/cesta-organizadora-ropa-57651/"
  },
  {
    "id": "plancha-vapor-raf-124385",
    "dropiId": 124385,
    "orderCode": "NA-WSBXN2",
    "name": "Plancha de vapor RAF",
    "category": "Cuidado de la ropa",
    "price": 30,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-124385-1.jpg",
      "img/dropi-oct/dropi-124385-2.jpg",
      "img/dropi-oct/dropi-124385-3.jpg"
    ],
    "description": "Plancha a vapor RAF con calentamiento rápido y selector de temperatura para todo tipo de tela.",
    "features": [
      "Vapor continuo",
      "Selector de temperatura por tipo de tela",
      "Calentamiento rápido",
      "Incluye vaso medidor"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/plancha-vapor-raf-124385/"
  },
  {
    "id": "aspiradora-inalambrica-mano-179798",
    "dropiId": 179798,
    "orderCode": "NA-W13SYU",
    "name": "Aspiradora inalámbrica de mano",
    "category": "Hogar y tecnología",
    "price": 39,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-179798-1.jpg",
      "img/dropi-oct/dropi-179798-2.jpg",
      "img/dropi-oct/dropi-179798-3.jpg"
    ],
    "description": "Aspiradora inalámbrica de mano con accesorios; limpia auto, sofá y rincones.",
    "features": [
      "Succión potente 3500–5000 Pa",
      "Batería recargable por USB",
      "Filtro lavable",
      "Incluye boquillas y cepillos"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/aspiradora-inalambrica-mano-179798/"
  },
  {
    "id": "zapatera-plegable-6-niveles-174382",
    "dropiId": 174382,
    "orderCode": "NA-RIMLJS",
    "name": "Zapatera plegable de 6 niveles",
    "category": "Organización del hogar",
    "price": 45,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-174382-1.jpg",
      "img/dropi-oct/dropi-174382-2.jpg",
      "img/dropi-oct/dropi-174382-3.jpg"
    ],
    "description": "Zapatera plegable vertical de 6 niveles con puertas transparentes; ahorra espacio.",
    "features": [
      "6 niveles con puertas transparentes",
      "Diseño plegable que ahorra espacio",
      "Protege del polvo",
      "Fácil de armar sin herramientas"
    ],
    "availability": "Imágenes del proveedor; confirmamos modelo, stock actual, accesorios y precio final antes de aceptar el pedido.",
    "url": "https://novaandes.ec/productos/zapatera-plegable-6-niveles-174382/"
  },
  {
    "id": "aceite-semilla-negra-177871",
    "dropiId": 177871,
    "orderCode": "NA-BS7K2M",
    "name": "Aceite de semilla negra etíope",
    "category": "Salud y bienestar",
    "price": 25,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/blackseed-177871-1.jpg",
      "img/blackseed-177871-2.jpg",
      "img/blackseed-177871-3.jpg"
    ],
    "description": "Suplemento en cápsulas blandas de aceite de semilla negra de origen etíope. Frasco con 60 softgels.",
    "features": [
      "60 cápsulas blandas por frasco",
      "Aceite de semilla negra etíope",
      "Formato softgel fácil de tomar",
      "Suplemento dietario"
    ],
    "availability": "Imágenes del proveedor; confirmamos presentación, contenido y existencias actuales antes de aceptar el pedido. Este es un suplemento dietario, no un medicamento; no diagnostica, trata ni cura enfermedades.",
    "url": "https://novaandes.ec/productos/aceite-semilla-negra-177871/"
  },
  {
    "id": "corrector-postura-128587",
    "dropiId": 128587,
    "orderCode": "NA-5KAMP1",
    "name": "Corrector de postura",
    "category": "Salud y bienestar",
    "price": 20,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-128587-1.jpg",
      "img/dropi-oct/dropi-128587-2.jpg",
      "img/dropi-oct/dropi-128587-3.jpg"
    ],
    "description": "Corrector de postura tipo faja con correas cruzadas en forma de X y varillas de fibra que dan soporte a hombros y espalda. Ayuda a aliviar la tensión de hombros y espalda y a mantener una postura más alineada en el día a día. Ligero y elástico, se puede usar debajo o encima de la ropa y se ajusta fácilmente sin ayuda de otra persona.",
    "features": [
      "Correas cruzadas en X para hombros y espalda",
      "Varillas de fibra que ayudan a alinear la espalda",
      "Doble función: corrige postura y da soporte lumbar",
      "Ligero, elástico y cómodo para uso diario",
      "Se usa debajo o encima de la ropa",
      "Fácil de poner y ajustar sin ayuda",
      "Color negro"
    ],
    "availability": "Tallas sujetas a stock del proveedor. La tercera imagen fue recortada para eliminar texto promocional del proveedor. Confirmamos talla y existencias antes de aceptar el pedido. Foto del proveedor.",
    "url": "https://novaandes.ec/productos/corrector-postura-128587/"
  },
  {
    "id": "licuadora-portatil-recargable-187815",
    "dropiId": 187815,
    "orderCode": "NA-GNM7N2",
    "name": "Licuadora portátil recargable",
    "category": "Cocina",
    "price": 25,
    "currency": "USD",
    "status": "published",
    "retailApproved": true,
    "shipping": "Envío incluido, sujeto a cobertura",
    "images": [
      "img/dropi-oct/dropi-187815-2.jpg",
      "img/dropi-oct/dropi-187815-1.jpg"
    ],
    "description": "Licuadora portátil recargable por USB para preparar jugos y batidos frescos donde estés. Vaso transparente con tapa, base compacta y cable de carga USB incluido. Fácil de usar, de transportar y de limpiar.",
    "features": [
      "Recargable por USB (cable incluido)",
      "Portátil y compacta para llevar a todas partes",
      "Vaso con tapa para tomar directamente",
      "Ideal para jugos, batidos y smoothies",
      "Fácil de usar y de limpiar"
    ],
    "availability": "Confirmamos existencias antes de aceptar el pedido. Fotos del proveedor.",
    "url": "https://novaandes.ec/productos/licuadora-portatil-recargable-187815/"
  }
];

// Verified gallery overrides. Every image below matches the same catalog item;
// no related-product or abstract imagery.
const VERIFIED_GALLERIES = {
  "utensilios-cocina-20-piezas-137448": [
    "img/dropi-oct/dropi-137448-1.png",
    "img/dropi-oct/dropi-137448-2.jpg",
    "img/dropi-oct/dropi-137448-3.jpg"
  ],
  "porta-utensilios-giratorio-189359": [
    "img/dropi-oct/dropi-189359-1.png",
    "img/dropi-oct/dropi-189359-2.png",
    "img/dropi-oct/dropi-189359-3.png"
  ],
  "platera-cocina-dos-pozos-14520": [
    "img/dropi-oct/dropi-14520-3.jpeg",
    "img/dropi-oct/dropi-14520-2.jpeg",
    "img/dropi-oct/dropi-14520-1.webp"
  ],
  "tubo-expandible-172750": [
    "img/dropi-oct/dropi-172750-1.jpeg",
    "img/dropi-oct/dropi-172750-2.jpeg",
    "img/dropi-oct/dropi-172750-3.jpg"
  ],
  "termometro-cocina-33165": [
    "img/dropi-oct/dropi-33165-1.jpeg",
    "img/dropi-oct/dropi-33165-3.jpeg",
    "img/dropi-oct/dropi-33165-2.jpeg"
  ],
  "juego-cuchillos-6-piezas-102353": [
    "img/dropi-oct/dropi-102353-1.jpg",
    "img/dropi-oct/dropi-102353-2.jpg",
    "img/dropi-oct/dropi-102353-3.jpg"
  ],
  "mesa-auxiliar-3-niveles-171999": [
    "img/dropi-oct/dropi-171999-1.jpg",
    "img/dropi-oct/dropi-171999-2.webp",
    "img/dropi-oct/dropi-171999-3.jpg"
  ],
  "dispensador-huevos-104318": [
    "img/dropi-oct/dropi-104318-1.jpg",
    "img/dropi-oct/dropi-104318-2.jpg",
    "img/dropi-oct/dropi-104318-3.webp"
  ],
  "sarten-coreano-121419": [
    "img/dropi-121419-clean-1.png",
    "img/dropi-121419-2.jpg",
    "img/dropi-121419-3.jpg"
  ],
  "fundas-ropa-156292": [
    "img/dropi-156292-clean-1.png",
    "img/dropi-156292-2.jpg",
    "img/dropi-156292-3.jpg"
  ],
  "ablandador-carne-177071": [
    "img/ablandador-177071.jpg",
    "img/dropi-177071-2.webp",
    "img/dropi-177071-3.webp"
  ],
  "destornillador-8-en-1-120449": [
    "img/dropi-120449-1.jpg",
    "img/dropi-120449-2.jpg",
    "img/dropi-120449-3.webp"
  ],
  "soportes-antivibracion-79316": [
    "img/dropi-79316-1.jpeg",
    "img/dropi-79316-2.jpeg",
    "img/dropi-79316-3.jpg"
  ],
  "soporte-cuello-127888": [
    "img/dropi-127888-1.webp",
    "img/dropi-127888-2.jpg",
    "img/dropi-127888-3.jpeg"
  ],
  "organizador-bano-175594": [
    "img/dropi-175594-1.jpg",
    "img/dropi-175594-2.jpg",
    "img/dropi-175594-3.jpg"
  ],
  "organizador-closet-viaje": [
    "img/dropi-56297-1.jpg",
    "img/dropi-56297-2.jpg",
    "img/dropi-56297-3.jpg"
  ],
  "cuadernos-escritura-magica-85475": [
    "img/dropi-85475-1.jpg",
    "img/dropi-85475-2.jpg",
    "img/dropi-85475-3.jpg"
  ],
  "plancha-vapor-portatil-82369": [
    "img/dropi-82369.jpeg",
    "img/dropi-82369-2.jpeg",
    "img/dropi-82369-3.jpeg"
  ],
  "camara-wifi-ip66-65031": [
    "img/dropi-65031.webp"
  ]
};

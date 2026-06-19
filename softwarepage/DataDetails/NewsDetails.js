  import News1 from "../public/News1.png";
import News2 from "../public/News2.png";
import News3 from "../public/News3.png";
import Other_News1 from "../public/Other_News1.avif";
import Other_News2 from "../public/Other_News2.avif";
import Other_News3 from "../public/Other_News3.avif";
  const NewsDetails = [
  {
    title: "Nuevos plazos para la Facturación Electrónica",
    description: `
La Dirección General de Impuestos Internos (DGII) ha emitido un nuevo comunicado detallando la extensión de plazos para que los grandes contribuyentes nacionales finalicen su proceso de migración al sistema de facturación electrónica.

Esta medida busca garantizar que todas las empresas cuenten con el soporte técnico necesario y hayan completado sus pruebas de homologación satisfactoriamente.

Desde SPS, recomendamos a nuestros clientes revisar su estatus actual y aprovechar este período para asegurar que sus certificados digitales y firmas electrónicas estén vigentes ante la entrada en vigencia de la Ley 32-23.
    `,
    subtitle: "DGII News",
    published: "01/01/2023",
    img: News1,
    other_img:Other_News1 ,
  },

  {
    title: "Optimiza tu inventario con DUKE POS",
    description: `
Gestionar un inventario eficiente es la clave para la rentabilidad de cualquier negocio moderno. Con DUKE POS, tienes acceso a herramientas de análisis predictivo en tiempo real.

Implementa alertas de stock mínimo para evitar ventas perdidas y utiliza los reportes de 'Movimiento de Productos' para identificar artículos de baja rotación y optimizar sus ofertas.

La automatización del conteo cíclico reduce errores humanos significativamente, permitiendo que su equipo se enfoque en el servicio al cliente.
    `,
    subtitle: "TECH TIPS",
    published: "01/01/2023",
    img:News2,
    other_img:  Other_News2,
  },

  {
    title: "Integración nativa con Microsoft Azure",
    description: `
Nos complace anunciar que toda la infraestructura de servicios en la nube de SPS ha sido migrada exitosamente a los centros de datos regionales de Microsoft Azure para ofrecer mayor estabilidad.

Esta actualización permite a nuestros usuarios disfrutar de una latencia menor al emitir comprobantes fiscales electrónicos (e-NCF), además de una redundancia de datos de nivel bancario.

Los usuarios no necesitan realizar ninguna acción manual; la actualización se ha realizado de forma transparente para garantizar la continuidad operativa de su negocio.
    `,
    subtitle: "SPS UPDATES",
    published: "01/01/2023",
    img: News3,
    other_img:  Other_News3,
  },
];
export default NewsDetails
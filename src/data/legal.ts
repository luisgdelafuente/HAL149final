import type { LegalDoc } from '../types/content';

// Dummy legal copy with realistic structure. Have it reviewed by a lawyer before launch.

export const legalNotice: LegalDoc = {
  updatedAt: '2026-11-01',
  sections: {
    en: [
    { id: 'owner', heading: '1. Site owner identification', paragraphs: ['In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is: [Full legal name], Tax ID [NIF/CIF], with registered address at [Address], Spain. Contact: hello@hal149.com.', 'Commercial registry details, where applicable: [Registry, volume, folio, sheet].'] },
    { id: 'purpose', heading: '2. Purpose', paragraphs: ['This website publishes essays, project write-ups and field notes on artificial intelligence, business architecture and philosophy of technology, and offers a contact channel for professional enquiries.'] },
    { id: 'terms', heading: '3. Terms of use', paragraphs: ['Access to this website is free and implies acceptance of these terms. Users agree to make lawful use of the content and not to damage, disable or overload the site.'] },
    { id: 'ip', heading: '4. Intellectual and industrial property', paragraphs: ['All content, including texts, graphics, the HAL149 logo and source code, belongs to the site owner or is used with permission. Reproduction requires prior written authorization, except for brief quotations with attribution and a link to the source.'] },
    { id: 'liability', heading: '5. Limitation of liability', paragraphs: ['Content is published for informational purposes and does not constitute professional advice. The owner is not liable for decisions taken on the basis of this content, nor for temporary unavailability of the site.'] },
    { id: 'links', heading: '6. Links', paragraphs: ['This site may contain links to third-party websites. The owner does not control and is not responsible for their content or privacy practices.'] },
    { id: 'law', heading: '7. Applicable law and jurisdiction', paragraphs: ['These terms are governed by Spanish law. Any dispute shall be submitted to the courts of the user’s place of residence when the user acts as a consumer, or otherwise to the courts of [City], Spain.'] }],

    es: [
    { id: 'titular', heading: '1. Identificación del titular', paragraphs: ['En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), el titular de este sitio web es: [Nombre completo], NIF [NIF/CIF], con domicilio en [Dirección], España. Contacto: hello@hal149.com.', 'Datos registrales, en su caso: [Registro, tomo, folio, hoja].'] },
    { id: 'objeto', heading: '2. Objeto', paragraphs: ['Este sitio web publica ensayos, proyectos y notas de campo sobre inteligencia artificial, arquitectura de negocio y filosofía de la tecnología, y ofrece un canal de contacto para consultas profesionales.'] },
    { id: 'condiciones', heading: '3. Condiciones de uso', paragraphs: ['El acceso a este sitio es gratuito e implica la aceptación de estas condiciones. La persona usuaria se compromete a hacer un uso lícito de los contenidos y a no dañar, inutilizar o sobrecargar el sitio.'] },
    { id: 'propiedad', heading: '4. Propiedad intelectual e industrial', paragraphs: ['Todos los contenidos, incluidos textos, gráficos, el logotipo de HAL149 y el código fuente, pertenecen al titular o se usan con autorización. Su reproducción requiere autorización previa por escrito, salvo citas breves con atribución y enlace a la fuente.'] },
    { id: 'responsabilidad', heading: '5. Exclusión de responsabilidad', paragraphs: ['Los contenidos se publican con fines informativos y no constituyen asesoramiento profesional. El titular no se responsabiliza de las decisiones tomadas a partir de ellos ni de la indisponibilidad temporal del sitio.'] },
    { id: 'enlaces', heading: '6. Enlaces', paragraphs: ['Este sitio puede contener enlaces a webs de terceros. El titular no controla ni es responsable de sus contenidos ni de sus prácticas de privacidad.'] },
    { id: 'legislacion', heading: '7. Legislación aplicable y jurisdicción', paragraphs: ['Estas condiciones se rigen por la legislación española. Cualquier controversia se someterá a los juzgados del domicilio de la persona usuaria cuando actúe como consumidora o, en otro caso, a los de [Ciudad], España.'] }]

  }
};

export const privacyPolicy: LegalDoc = {
  updatedAt: '2026-11-01',
  sections: {
    en: [
    { id: 'controller', heading: '1. Data controller', paragraphs: ['The controller of your personal data is [Full legal name], Tax ID [NIF], [Address], Spain. Contact: hello@hal149.com.'] },
    { id: 'purposes', heading: '2. Purposes of processing', paragraphs: ['We process data to answer messages sent through the contact form, and to send the newsletter to subscribers who request it.'] },
    { id: 'legal-basis', heading: '3. Legal basis', paragraphs: ['Processing is based on your consent (Article 6.1.a GDPR), given when you submit a form, and on legitimate interest for responding to professional enquiries (Article 6.1.f GDPR).'] },
    { id: 'retention', heading: '4. Retention', paragraphs: ['Contact data is kept for as long as needed to handle your request and for up to [12] months afterwards. Newsletter data is kept until you unsubscribe.'] },
    { id: 'recipients', heading: '5. Recipients', paragraphs: ['Data is not sold or shared with third parties, except service providers acting as processors (such as hosting and email delivery) under data processing agreements.'] },
    { id: 'transfers', heading: '6. International transfers', paragraphs: ['Where a provider is located outside the European Economic Area, transfers rely on adequacy decisions or the European Commission’s Standard Contractual Clauses.'] },
    { id: 'rights', heading: '7. Your rights', paragraphs: ['You may exercise your rights of access, rectification, erasure, objection, restriction and portability, and withdraw consent at any time, by writing to hello@hal149.com.'] },
    { id: 'complaint', heading: '8. Right to complain', paragraphs: ['If you believe your rights have not been respected, you may lodge a complaint with the Spanish Data Protection Agency (AEPD), www.aepd.es.'] }],

    es: [
    { id: 'responsable', heading: '1. Responsable del tratamiento', paragraphs: ['El responsable del tratamiento de tus datos es [Nombre completo], NIF [NIF], [Dirección], España. Contacto: hello@hal149.com.'] },
    { id: 'finalidades', heading: '2. Finalidades del tratamiento', paragraphs: ['Tratamos los datos para responder a los mensajes enviados mediante el formulario de contacto y para enviar el boletín a quienes lo solicitan.'] },
    { id: 'base-juridica', heading: '3. Base jurídica', paragraphs: ['El tratamiento se basa en tu consentimiento (art. 6.1.a RGPD), otorgado al enviar un formulario, y en el interés legítimo para responder a consultas profesionales (art. 6.1.f RGPD).'] },
    { id: 'conservacion', heading: '4. Conservación', paragraphs: ['Los datos de contacto se conservan el tiempo necesario para atender tu solicitud y hasta [12] meses después. Los datos del boletín se conservan hasta que te des de baja.'] },
    { id: 'destinatarios', heading: '5. Destinatarios', paragraphs: ['Los datos no se venden ni se ceden a terceros, salvo a proveedores que actúan como encargados del tratamiento (como alojamiento y envío de correo) bajo los correspondientes contratos.'] },
    { id: 'transferencias', heading: '6. Transferencias internacionales', paragraphs: ['Cuando un proveedor se encuentra fuera del Espacio Económico Europeo, las transferencias se amparan en decisiones de adecuación o en las Cláusulas Contractuales Tipo de la Comisión Europea.'] },
    { id: 'derechos', heading: '7. Tus derechos', paragraphs: ['Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, y retirar tu consentimiento en cualquier momento, escribiendo a hello@hal149.com.'] },
    { id: 'reclamacion', heading: '8. Derecho a reclamar', paragraphs: ['Si consideras que no se han respetado tus derechos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), www.aepd.es.'] }]

  }
};

export const cookiePolicy: LegalDoc = {
  updatedAt: '2026-11-01',
  sections: {
    en: [
    { id: 'what', heading: '1. What cookies are', paragraphs: ['Cookies are small files stored on your device when you visit a website. They allow the site to remember information about your visit.'] },
    { id: 'types', heading: '2. Cookies we use', paragraphs: ['Essential: store your cookie choice. Preferences: remember theme and language. Analytics (only with consent): anonymous, aggregated usage statistics. No advertising cookies are used.'] },
    { id: 'list', heading: '3. Cookie list', paragraphs: ['hal149-consent · essential · stores your consent choices · 12 months.', 'hal149-theme · preferences · remembers dark or light theme · persistent local storage.', '[analytics-cookie] · analytics · anonymous statistics · [duration].'] },
    { id: 'consent', heading: '4. Managing consent', paragraphs: ['You can accept, reject or configure non-essential cookies in the banner shown on your first visit, and change your choice at any time using the "Cookie settings" link in the footer.'] },
    { id: 'browser', heading: '5. Browser settings', paragraphs: ['You can also block or delete cookies from your browser settings. Blocking essential cookies may affect how the site works.'] },
    { id: 'updates', heading: '6. Updates', paragraphs: ['This policy may change when the cookies used on the site change. The date at the top shows the latest revision.'] }],

    es: [
    { id: 'que-son', heading: '1. Qué son las cookies', paragraphs: ['Las cookies son pequeños archivos que se guardan en tu dispositivo al visitar un sitio web. Permiten que el sitio recuerde información sobre tu visita.'] },
    { id: 'tipos', heading: '2. Cookies que utilizamos', paragraphs: ['Esenciales: guardan tu elección sobre cookies. Preferencias: recuerdan el tema y el idioma. Analítica (solo con consentimiento): estadísticas de uso anónimas y agregadas. No se usan cookies publicitarias.'] },
    { id: 'lista', heading: '3. Listado de cookies', paragraphs: ['hal149-consent · esencial · guarda tus preferencias de consentimiento · 12 meses.', 'hal149-theme · preferencias · recuerda el tema claro u oscuro · almacenamiento local persistente.', '[cookie-analitica] · analítica · estadísticas anónimas · [duración].'] },
    { id: 'consentimiento', heading: '4. Gestión del consentimiento', paragraphs: ['Puedes aceptar, rechazar o configurar las cookies no esenciales en el aviso que aparece en tu primera visita, y cambiar tu elección en cualquier momento desde el enlace «Configurar cookies» del pie de página.'] },
    { id: 'navegador', heading: '5. Configuración del navegador', paragraphs: ['También puedes bloquear o eliminar cookies desde la configuración de tu navegador. Bloquear las esenciales puede afectar al funcionamiento del sitio.'] },
    { id: 'actualizaciones', heading: '6. Actualizaciones', paragraphs: ['Esta política puede cambiar cuando cambien las cookies utilizadas. La fecha superior indica la última revisión.'] }]

  }
};
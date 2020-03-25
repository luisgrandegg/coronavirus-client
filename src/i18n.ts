import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            admin: {
                stats: {
                    period: {
                        total: 'Total'
                    },
                    type: {
                        inquiries_banned: 'Consultas baneadas',
                        inquiries: 'Consultas',
                        inquiries_attended: 'Consultas atendidas',
                        inquiries_flagged: 'Consultas flaggeadas',
                        doctors: 'Médicos',
                        doctors_validated: 'Médicos validados'
                    }
                }
            },
            'admin-dashboard': {
                container: {
                    'link-to-doctor': '← Volver al panel de citas',
                },
            },
            footer: {
                'title': '¿Nos ayudas a difundir?',
                'first-paragraph': 'Ayúdanos compartiendo este servicio para que podamos ayudar a más gente.',
                'powered-by': 'Hecho con mucho cariño en Madrid :)'
            },
            header: {
                admin: {
                    doctors: 'Médicos',
                    moderate: 'Moderar',
                    stats: 'Stats'
                },
                doctor: {
                    pending: 'Pendientes',
                    own: 'Mis peticiones'
                },
                login: 'login',
                title: 'Cita Médica en Casa',
                dashboard: 'dashboard'
            },
            home: {
                drawing: {
                    alt: 'Cita Médica en Casa'
                },
                'claim': {
                    title: '¿Necesitas consejo médico o psicológico?<br>#QuédateEnCasa y consulta a profesionales'
                },
                'how-does-it-work': {
                    title: 'Así funciona Cita Médica en Casa',
                    'first-paragraph': 'Ponemos en contacto a <strong>profesionales colegiados en medicina o psicología y ciudadanos</strong> a través de email o videollamada, para resolver dudas sin coste alguno. Queremos reducir la sobrecarga de hospitales y centros de salud en consultas leves.'
                },
                'patient': {
                    title: 'Para ciudadanos/as',
                    'first-paragraph': 'Plantea una duda médica excepto sobre el Coronavirus. <strong>Si tienes una emergencia llama al 112</strong>, no esperes a que te atendamos en esta web.',
                    cta: 'Realizar una consulta',
                    'counter-pre': 'Hemos atendido',
                    'counter-post': 'consultas'
                },
                'doctor': {
                    title: 'Para Médicos/as',
                    'first-paragraph': 'Presta tu ayuda a personas que no pueden acudir a una consulta.',
                    'register-button': 'Registrarme',
                    login: 'Acceder con mi cuenta',
                    'counter-pre': 'Ya somos',
                    'counter-post': 'médicos/as'
                },
                'psychologist': {
                    title: 'Para Psicólogos/as',
                    'first-paragraph': 'Presta tu ayuda a personas que no pueden acudir a una consulta.',
                    'register-button': 'Registrarme',
                    login: 'Acceder con mi cuenta',
                    'counter-pre': 'Ya somos',
                    'counter-post': 'psicólogos/as'
                },
                'what-is-not': {
                    title: '¿Qué no es Cita Médica en Casa?',
                    'first-paragraph': '<strong>No acudas aquí</strong> si tienes síntomas asociados a el Coronavirus COVID-19 o si sospechas que puedes tenerlo, <strong><a target="_blank" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/documentos/20200306_Preguntas_respuestas_2019-nCoV.pdf">sigue las recomendaciones de las autoridades sanitarias</a></strong> o <strong><a target="_blank" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/telefonos.htm">llama a los teléfonos habilitados por las comunidades autónomas</a></strong> para este fin <strong><a target="_blank" href="https://www.coronamadrid.com/">o utiliza www.coronamadrid.com</a></strong>.',
                    'second-paragraph': 'Cita Médica en Casa, <strong>no es un sustituto del Sistema Nacional de Salud ni de la cita presencial con tu médico. No es un servicio médico de diagnóstico ni de prescripción de tratamientos</strong> de ningún tipo.'
                },
                'what-is': {
                    title: 'Aquí te contamos en detalle quiénes somos',
                },
                privacy: {
                    title: '¿Cómo trataremos tus datos?'
                },
                'privacy-doctor': {
                    title: 'Si eres profesional',
                    'first-paragraph': '<strong>Nunca los cederemos a terceros</strong>, ni se utilizarán para otro fin que no sea el de esta plataforma.',
                    'second-paragraph': '<strong>Los ciudadanos solo verán tu email</strong>. Si lo deseas, podrás crearte uno específico para la platafoma y preservar tu intimidad.',
                    'third-paragraph': 'Una vez finalizada esta situación <strong>la plataforma Cita Médica en Casa desaparecerá</strong> y será borrada. En cualquier caso, puedes solicitar el borrado de tus datos en cualquier momento. Escribe un correo a <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> solicitándolo.'

                },
                'privacy-patient': {
                    title: 'Si eres ciudadano/a',
                    'first-paragraph': '<strong>Nunca los cederemos a terceros</strong>, ni se utilizarán para otro fin que no sea el de esta plataforma.',
                    'second-paragraph': '<strong>Los datos del formulario que has rellenado solo los verá personal médico</strong>.',
                    'third-paragraph': 'Una vez finalizada esta situación <strong>la plataforma Cita Médica en Casa desaparecerá</strong> y será borrada. En cualquier caso, puedes solicitar el borrado de tus datos en cualquier momento. Escribe un correo a <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> solicitándolo.'
                }
            },
            'inquiry-list': {
                empty: '* No hay consultas con los filtros que tienes seleccionados *'
            },
            inquiry: {
                attend: 'Atender petición',
                unattend: 'Desatender petición',
                'created-at': 'Recibido el {{createdAtDate}} a las {{createdAtTime}}',
                email: {
                    field: 'Email del ciudadano:',
                    copied: 'Email copiado en el portapapeles',
                    copy: 'Copiar email en el portapapeles'
                },
                speciality: 'Especialidad:',
                flag: 'Marcar como inapropiado',
                unflag: 'Desmarcar como inapropiado',
                deactivate: 'Eliminar',
                age: 'Edad (de quien necesita consejo):',
                time: 'Cuanto tiempo lleva con el problema:',
                'not-specified': 'No especificado'
            },
            'register-doctor': {
                drawing: {
                    alt: 'Cita Médica en Casa para profesionales'
                },
                confirmation: {
                    header: {
                        title: 'Solicitud recibida'
                    },
                    content: {
                        message: 'Recibirás una llamada telefónica para verificar tus datos. Muchísimas gracias por unirte a esta iniciativa.'
                    }
                },
                header: {
                    title: '¿Cómo funciona Cita Médica en Casa para profesionales?'
                },
                content: {
                    'list-item-1': 'Debes <strong>rellenar el formulario</strong> que verás a continuación.',
                    'list-item-2': 'Validaremos tu perfil <strong>comprobando tu número de colegiado/a.</strong>',
                    'list-item-3': '<strong>Puedes utilizar tu email personal o, si lo prefieres, crear una cuenta</strong> de Gsuite (Google); te enviaremos instrucciones acerca de cómo funciona.',
                    'list-item-4': 'Con el email y contraseña que has indicado en el formulario de registro, <strong>podrás acceder al listado de dudas de ciudadanos.</strong>',
                    'list-item-5': '<strong>Escoge una duda de la lista</strong> (sólo verás las preguntas de tu área, medicina o psicología) </strong>y envía un email con la respuesta</strong> por escrito a su pregunta. Si necesitas tener una videollamada con la persona que plantea la duda, escríbenos al email: <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> y te facilitaremos un enlace y los pasos a seguir',
                    'form-header': 'Para añadirte a nuestra base de datos y que puedas atender dudas necesitamos:',
                    'responsability': 'Recuerda que Cita Médica en Casa, no sustituye al Servicio nacional de salud, ni a la visita a tu médico y no te proporcionará un diagnóstico o un tratamiento. Cita Médica en casa no se hace responsable de los contenidos ni de las opiniones intercambiadas entre profesionales de la medicina y ciudadanos.'
                },
                fields: {
                    name: 'Nombre',
                    surname: 'Apellidos',
                    speciality: 'Especialidad',
                    license: 'Número de colegiado (los ciudadanos no lo verán)',
                    email: 'Email (los ciudadanos no lo verán)',
                    phone: 'Teléfono (los ciudadanos no lo verán)',
                    password: 'Contraseña',
                    'confirm-password': 'Confirma contraseña',
                    'terms': '<a target="_blank" href="/static/consentimiento.pdf">Acepto que mis datos se incorporen a Cita médica en Casa.</a>',
                    'privacy': '<a target="_blank" href="/static/politica_privacidad.pdf">Me comprometo a no hacer públicos datos de ciudadanos.</a>',
                }
            },
            'register-patient': {
                drawing: {
                    alt: 'Cita Médica en Casa para ciudadanos'
                },
                confirmation: {
                    header: {
                        title: 'Solicitud recibida'
                    },
                    content: {
                        time: {
                            title: '¿Cuánto tardarán en responderme?',
                            message: 'Las personas que responden son voluntarias, tratan de hacerlo lo más rápido posible, pero se puede demorar. Si necesitas respuesta urgente debes llamar al 112.',
                        },
                        'message-1': 'Recibirás un email confimándola con un link para acceder a una consulta online, o con una respuesta a tu consulta.',
                        'message-2': '<a href="/help/patient/">Aquí tienes más ayuda</a> sobre Cita Médica en Casa.'
                    }
                },
                header: {
                    title: '¿Cómo funciona Cita Médica en Casa para ciudadanos?'
                },
                content: {
                    'list-item-1': 'Rellenas un formulario con tu duda que no tenga que ver con el Coronavirus; tus datos y tu pregunta serán cifrados para preservar su confidencialidad.',
                    'list-item-2': 'Estos datos se enviarán a un doctor o doctora para que concierte una videollamada contigo o para que resuelva tu duda por email.',
                    'list-item-3': 'Te llegará un email con la respuesta o para confirmar tu videollamada.',
                    'list-item-4': 'Si se trata de una sesión online utilizaréis Hangouts de Google, te enviaremos un link.',
                    'form-step1-header': 'Para ayudarte, dinos:',
                    'form-step2-header': '¿Sobre qué necesitas consejo?',
                    'form-step2-description': 'Elige entre cuestión médica o psicológica',
                    'responsability': 'Recuerda que Cita Médica en Casa, no sustituye al Servicio nacional de salud, ni a la visita a tu médico y no te proporcionará un diagnóstico o un tratamiento. Cita Médica en casa no se hace responsable de los contenidos ni de las opiniones intercambiadas entre profesionales de la medicina y ciudadanos.'
                },
                fields: {
                    age: 'Edad (tuya o de quien necesite consejo)',
                    email: 'Email (para enviarte la cita)',
                    'confirm-email': 'Confirma email',
                    'doctor-type': 'Elige una opción',
                    speciality: 'Especialidad',
                    time: '¿Cuánto tiempo lleva con el problema?',
                    summary: 'Resumen de tu problema',
                    'summary-placeholder': 'Formula tu pregunta de forma sencilla y clara. Añade información sobre tratamientos o si sigues algún tipo de terapia para poner al profesional en contexto. No escribas aquí tus datos personales.',
                    'terms': '<a target="_blank" href="/static/consentimiento.pdf">Acepto compartir mis datos personales con el personal médico.</a>',
                    'privacy': '<a target="_blank" href="/static/politica_privacidad.pdf">Acepto la política de privacidad y la protección de datos.</a>',
                    'confirm-age': 'Soy mayor de 18 años.',
                    'submit': 'Enviar duda'
                },
                'doctor-type': {
                    regular: 'Consulta médica',
                    psychologist: 'Consulta psicológica'
                },
            },
            'register-form': {
                submit: 'Registrarme',
                error: {
                    length: ' El campo debe tener al menos {{length}} caracteres',
                    required: 'El campo es requerido',
                    format: 'El campo tiene un formato incorrecto',
                    accept: 'Es necesario aceptar los términos',
                    confirm: 'El campo no coincide',
                    invalid: 'Ya hay una cuenta con este email'
                }
            },
            'login-form': {
                submit: 'Enviar',
                error: {
                    required: 'El campo es requerido',
                    format: 'El campo tiene un formato incorrecto',
                    accept: 'Es necesario aceptar los términos',
                    invalid: 'Uy, esta no vale. Intenta otra vez'
                },
                fields: {
                    email: 'Email',
                    password: 'Contraseña'
                }
            },
            doctor: {
                'created-at': 'Recibido el {{createdAtDate}} a las {{createdAtTime}}',
                name: 'Nombre:',
                surname: 'Apellidos:',
                license: 'Número colegiado:',
                email: 'Email:',
                phone: 'Teléfono:',
                speciality: 'Especialidad:',
                validate: 'Validar',
                invalidate: 'Invalidar',
                activate: 'Activar',
                deactivate: 'Desactivar',
                'inquiries-attended': 'Consultas respondidas:'
            },
            'doctor-dashboard': {
                header: {
                    title: 'Listado de dudas planteadas'
                },
                content: {
                    'first-paragraph': 'Cita Médica en Casa está pensada para la resolución de dudas sencillas de salud. No es un plataforma para diagnosticar o preescribir medicamentos, tampoco se atenderán preguntas sobre Coronavirus, ese tema está en manos de los canales oficiales del Estado.',
                    'second-paragraph': 'Mil gracias de nuevo por tu ayuda.'
                },
                filter: {
                    'open-modal': 'Filtra por especialidad',
                    title: '¿Qué tipo de dudas deseas atender?',
                    'apply-button': 'Filtra por especialidad'
                }
            },
            share: {
                title: 'Cita Médica en Casa',
                text: 'Si necesitas consejo médico o psicológico, dese #CitaMédicaEnCasa te ponen en contacto con profesionales voluntarios. Así aliviamos la saturación de la sanidad. Visítales y si no lo necesitas, pon tu grano de arena compartiendo https://www.citamedicaencasa.es vía @CitaMedicaCasa'
            },
            'about-us': {
                'volunteers': {
                    title: 'Somos voluntarios y voluntarias',
                    'first-paragraph': '<strong>No somos un servicio médico.</strong> Somos un equipo formado por personas expertas en distintas disciplinas: desarrollo, diseño, experiencia de usuario, SEO, contenidos... y por supuesto: Medicina. <strong>Todos los profesionales médicos también son voluntarios y están colegiados; nos encargamos de comprobarlo uno por uno.</strong>',
                },
                'our-goal': {
                    title: 'Nuestro objetivo',
                    'first-paragraph': '<strong>Poner en contacto a los ciudadanos con profesionales médicos</strong>. Dadas las restricciones de movimiento, creemos que <strong>las dudas sencillas de salud pueden ser resueltas a distancia</strong>, reduciendo los desplazamientos innecesarios.',
                    'second-paragraph': 'Tenemos la seguridad de que <strong>resolver esas dudas</strong>, aunque sean sencillas, también <strong>ayuda a tranquilizar en estos momentos de confinamiento.</strong>',
                },
                'collaboration': {
                    title: 'Colaboramos, no sustituimos',
                    'first-paragraph': '<strong>Cita Médica en Casa no sustituye al sistema nacional de salud ni a una cita con un médico de cabecera o especialista</strong>. Admiramos la labor que está desempeñado el personal sanitario en estos momentos y queremos echar una mano aliviando su trabajo, pero nunca interfiriendo.',
                    'second-paragraph': '<strong>En Cita médica en Casa no se realizan diagnósticos ni se prescriben tratamientos</strong>. Por eso, si sospechas que tienes una patología grave, necesitas ayuda urgente, estás siguiendo un tratamiento o ya tienes cita con tu médico, no lo sustituyas por esta plataforma.',
                    'list-item-1': '<strong>En caso de urgencia llama al 112.</strong>',
                    'list-item-2': '<strong>Si sospechas que puedes estar infectado/a por COVID-19</strong> llama a los <strong><a target="_blank" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/telefonos.htm">teléfonos habilitados por las comunidades autónomas</a></strong> y si estás <strong><a target="_blank" href="https://www.coronamadrid.com/">en Madrid descarga la app oficial</a></strong>.',
                },
                'security': {
                    title: 'La seguridad de la información que nos envías',
                    'first-paragraph': '<strong>Todas las consultas que nos envías son encriptadas</strong> para preservar la información, es el personal médico el que las lee y nunca se cederán a terceros. Además, una vez finalizado el estado de alarma se borrarán. ',
                    'second-paragraph': 'En cualquier caso, puedes pedir su borrado cuando tú quieras escribiendo un email a: <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a>',
                }
            },
            'thanks-box': {
                text: 'Manda un fuerte aplauso a todos los médicos voluntarios',
                'quantity-type': 'aplausos',
                tooltip: {
                    text: 'Ayúdanos a difundir el proyecto en tu red social favorita',
                    message: '👏👏👏👏👏👏👏👏👏👏👏👏 Un gran aplauso por todo el personal sanitario, que no dejan de ayudar ni aunque se tengan que quedar en casa!',
                    'message-alternative': 'Un gran aplauso por todo el personal sanitario, que no dejan de ayudar ni aunque se tengan que quedar en casa!'
                }
            },
            'back-home': {
                text: 'Volver a la home'
            },
            'help-patient': {
                title: 'Preguntas frecuentes para ciudadanos',
                trust: {
                    title: '¿Cómo sé que las personas que contestan mis dudas son profesionales?',
                    'first-paragraph': 'Tanto en el caso de la medicina como de la psicología, <strong>comprobamos uno por uno todos los números de colegiado</strong> de los profesionales que nos solicitan unirse a la plataforma. Nos tomamos muy en serio vuestra salud.',
                },
                'answer-time': {
                    title: '¿Cuánto tardarán en contestarme?',
                    'first-paragraph': 'No podemos decirte un plazo exacto. Las personas que colaboran en Cita Médica en Casa lo hacen en su tiempo libre y de forma voluntaria, ten paciencia. En cualquier caso, <strong>si tienes una urgencia médica, llama al 112 sin dudarlo</strong>, no esperes nuestra respuesta.',
                },
                'why-not-covid': {
                    title: '¿Por qué no contestáis preguntas sobre el Coronavirus?',
                    'first-paragraph': 'Cita Médica en Casa se centra en las dudas generales de salud, para descongestionar el sistema sanitario. <strong>Existen canales oficiales con información concreta sobre ese tema</strong>:',
                    'list-item-1': '<a href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/telefonos.htm" target="_blank">Web con los teléfonos de cada comunidad autónoma</a>',
                    'list-item-2': '<a href="https://twitter.com/sanidadgob" target="_blank">Twitter del ministerio de Sanidad</a>',
                },
                'how-many-questions': {
                    title: '¿Cuántas dudas puedo enviar?',
                    'first-paragraph': '<strong>Las que necesites</strong>, pero ten en cuenta que la misma persona no responderá a todas tus dudas sobre medicina o psicología a la vez. Se ponen en cola y los profesionales las van contestando, así que <strong>puede que te respondan diferentes profesionales en diferentes momentos</strong>.',
                },
                'what-kind-of-questions': {
                    title: '¿Qué tipo de dudas puedo plantear?',
                    'first-paragraph': 'Todas aquellas que tengan que ver con salud. Ten en cuenta que aquí no se diagnostican enfermedades ni se prescriben tratamientos, Cita Médica en Casa no sustituye a tu médico ni al sistema de salud.',
                },
                'question-taxonomy': {
                    title: '¿Cómo describo mi duda?',
                    'first-paragraph': 'Cuando nos la cuentes en el formulario hazlo de forma concisa, dinos cuál es el problema, desde cuando te ocurre, qué sintomas tienes, si te duele cómo es el dolor y donde está localizado.',
                    'second-paragraph': 'Dinos también si tienes alergia a algo, estás tomando alguna medicación y si tienes enfermedades como diabetes, hipertensión o te han operado recientemente por ejemplo, esos detalles ayudan a los médicos.',
                }
            },
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

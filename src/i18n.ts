import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            footer: {
                'title': '¿Nos ayudas a difundir?',
                'first-paragraph': 'Ayúdanos compartiendo este servicio para que podamos ayudar a más gente.',
                'powered-by': 'Hecho con mucho cariño en Madrid :)'
            },
            header: {
                admin: {
                    doctors: 'Médicos',
                    moderate: 'Moderar'
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
                'claim': {
                    title: '#QuédateEnCasa y consulta a un médico'
                },
                'how-does-it-work': {
                    title: '¿Cómo funciona?',
                    'first-paragraph': 'Ponemos en contacto a médicos y ciudadanos <strong>a través de email o videollamada</strong>, para resolver dudas. Queremos reducir la sobrecarga de hospitales y centros de salud en consultas leves. '

                },
                'pacient': {
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
                    'counter-post': 'médicos'
                },
                'what-is-not': {
                    title: '¿Qué no es Cita Médica en Casa?',
                    'first-paragraph': '<strong>No acudas aquí</strong> si tienes síntomas asociados a al Coronavirus COVID-19 o si sospechas que puedes tenerlo, <strong><a target="_blank" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/documentos/20200306_Preguntas_respuestas_2019-nCoV.pdf">sigue las recomendaciones de las autoridades sanitarias</a></strong> o <strong><a target="_blank" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/telefonos.htm">llama a los teléfonos habilitados por las comunidades autónomas</a></strong> para este fin <strong><a target="_blank" href="https://www.coronamadrid.com/">o utiliza www.coronamadrid.com</a></strong>.',
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
                    'second-paragraph': '<strong>Los pacientes solo verán tu email</strong>. Si lo deseas, podrás crearte uno específico para la platafoma y preservar tu intimidad.',
                    'third-paragraph': 'Una vez finalizada esta situación <strong>la plataforma Cita Médica en Casa desaparecerá</strong> y será borrada. En cualquier caso, puedes solicitar el borrado de tus datos en cualquier momento. Escribe un correo a <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> solicitándolo.'

                },
                'privacy-patient': {
                    title: 'Si eres ciudadano/a',
                    'first-paragraph': '<strong>Nunca los cederemos a terceros</strong>, ni se utilizarán para otro fin que no sea el de esta plataforma.',
                    'second-paragraph': '<strong>Los datos del formulario que has rellenado solo los verá personal médico</strong>.',
                    'third-paragraph': 'Una vez finalizada esta situación <strong>la plataforma Cita Médica en Casa desaparecerá</strong> y será borrada. En cualquier caso, puedes solicitar el borrado de tus datos en cualquier momento. Escribe un correo a <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> solicitándolo.'
                }
            },
            inquiry: {
                attend: 'Atender petición',
                unattend: 'Desatender petición',
                'created-at': 'Recibido el {{createdAtDate}} a las {{createdAtTime}}',
                email: 'Email del ciudadano:',
                speciality: 'Especialidad:',
                flag: 'Marcar como inapropiado',
                unflag: 'Desmarcar como inapropiado',
                deactivate: 'Eliminar'
            },
            'register-doctor': {
                confirmation: {
                    header: {
                        title: 'Solicitud recibida'
                    },
                    content: {
                        message: 'Recibirás una llamada telefónica para verificar tus datos. Muchísimas gracias por unirte a esta iniciativa.'
                    }
                },
                header: {
                    title: '¿Como funciona Cita Médica en Casa para profesionales?'
                },
                content: {
                    'list-item-1': 'Debes <strong>rellenar el formulario</strong> que verás a continuación.',
                    'list-item-2': 'Te validamos, comprobando tu número de colegiado/a.',
                    'list-item-3': '<strong>Puedes utilizar tu email personal o, si lo prefieres, crear una cuenta</strong> de Gsuite (Google), te enviaremos instrucciones acerca de cómo funciona.',
                    'list-item-4': '<strong>Te damos acceso al recopilatorio de dudas</strong> de ciudadanos accedes con tu email y contraseña que has creado en el formulario.',
                    'list-item-5': '<strong>Escoges a una duda de la lista y envías un email con una respuesta</strong> por escrito a su consulta. Si necesitas tener una videollamada con la persona que plantea la duda, escríbenos al email: <a href="mailto:pati@citamedicaencasa.com">pati@citamedicaencasa.com</a> y te facilitaremos un enlace y los pasos a seguir',
                    'form-header': 'Para añadirte a nuestra base de datos y que puedas atender pacientes necesitamos:',
                    'responsability': 'Recuerda que Cita Médica en Casa, no sustituye al Servicio nacional de salud, ni a la visita a tu médico y no te proporcionará un diagnóstico o un tratamiento. Cita Médica en casa no se hace responsable de los contenidos ni de las opiniones intercambiadas entre profesionales de la medicina y ciudadanos.'
                },
                fields: {
                    name: 'Nombre',
                    surname: 'Apellidos',
                    speciality: 'Especialidad',
                    license: 'Número de colegiado (no será visible a los pacientes)',
                    email: 'Email (no será visible a los pacientes)',
                    phone: 'Teléfono (no será visible a los pacientes)',
                    password: 'Contraseña',
                    'confirm-password': 'Confirma contraseña',
                    'terms': '<a target="_blank" href="/static/consentimiento.pdf">Acepto que mis datos se incorporen a Cita médica en Casa.</a>',
                    'privacy': '<a target="_blank" href="/static/politica_privacidad.pdf">Me comprometo a no hacer públicos datos de pacientes.</a>',
                }
            },
            'register-patient': {
                confirmation: {
                    header: {
                        title: 'Solicitud recibida'
                    },
                    content: {
                        message: 'Recibirás un email confimándola con un link para acceder a una consulta online, o con una respuesta a tu consulta.'
                    }
                },
                header: {
                    title: '¿Como funciona Cita Médica en Casa para ciudadanos?'
                },
                content: {
                    'list-item-1': 'Rellenas un formulario con tu duda que no tenga que ver con el Coronavirus, tus datos y tu pregunta serán cifrados para preservar su confidencialidad.',
                    'list-item-2': 'Estos datos se enviaran a un doctor o doctora para que concierte una videollamada contigo o para que resuelva tu consulta por email.',
                    'list-item-3': 'Te llegará un email con la respuesta o para confirmar tu videollamada.',
                    'list-item-4': 'Si se trata de una consulta online utilizaréis Hangouts de Google, te enviaremos un link.',
                    'form-header': 'Por favor, para para plantear tu consulta dinos:',
                    'responsability': 'Recuerda que Cita Médica en Casa, no sustituye al Servicio nacional de salud, ni a la visita a tu médico y no te proporcionará un diagnóstico o un tratamiento. Cita Médica en casa no se hace responsable de los contenidos ni de las opiniones intercambiadas entre profesionales de la medicina y ciudadanos.'
                },
                fields: {
                    age: 'Edad',
                    email: 'Email (para enviarte la cita)',
                    'confirm-email': 'Confirma email',
                    speciality: 'Especialidad',
                    summary: 'Resumen de tu problema',
                    'summary-placeholder': 'Resumen de tu duda: Dinos cuánto hace que lo tienes, si tomas medicación, enfermedades que tengas como por ejemplo diabetes, alergias... todo lo que nos pueda ayudar a entenderlo mejor. No escribas aquí tus datos personales.',
                    'terms': '<a target="_blank" href="/static/consentimiento.pdf">Acepto compartir mis datos personales con el personal médico.</a>',
                    'privacy': '<a target="_blank" href="/static/politica_privacidad.pdf">Acepto la política de privacidad y la protección de datos.</a>',
                    'confirm-age': 'Soy mayor de 18 años.',
                    'submit': 'Enviar duda'
                }
            },
            'register-form': {
                submit: 'Registrarme',
                error: {
                    required: 'El campo es requerido',
                    format: 'El campo tiene un formato incorrecto',
                    accept: 'Es necesario aceptar los términos',
                    confirm: 'El campo no coincide',
                }
            },
            'login-form': {
                submit: 'Enviar',
                error: {
                    required: 'El campo es requerido',
                    format: 'El campo tiene un formato incorrecto',
                    accept: 'Es necesario aceptar los términos',
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
                deactivate: 'Desactivar'
            },
            'doctor-dashboard': {
                header: {
                    title: 'Listado de dudas planteadas'
                },
                content: {
                    'first-paragraph': 'Cita Médica en Casa está pensada para la resolución de dudas sencillas de salud. No es un plataforma para diagnosticar o preescribir medicamentos, tampoco se atenderán preguntas sobre Coronavirus, ese tema está en manos de los canales oficiales del Estado.',
                    'second-paragraph': 'Mil gracias de nuevo por tu ayuda.'
                }
            },
            share: {
                title: 'Cita Médica en Casa',
                text: 'Desde Cita Médica en Casa están ayudando a aliviar la saturación de la sanidad, visítales y pon tu grano de arena compartiendo'
            },
            'about-us': {
                'volunteers': {
                    title: 'Somos voluntarios y voluntarias',
                    'first-paragraph': 'No somos un servicio médico. Somos un equipo de personas que se han propuesto echar una mano durante el estado de alarma, para reducir la saturación de la sanidad.',
                    'second-paragraph': 'En el equipo hay programadores, diseñadoras, gente de experiencia de usuario, SEO, contenidos... y por supuesto <strong>médicos y médicas, con número de colegiado comprobado uno por uno</strong>. Todos actuando de forma voluntaria sin ningún tipo de remuneración.',
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
            }
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
